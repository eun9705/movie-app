import { useState } from "react";
import { ImSearch } from 'react-icons/im';
import { getMovieResApi } from "../api/serviceApi";
import { MovieList } from "../types/interface";
import SquareList from "./SquareList";

const SearchForm = () => {
    // const api_key = process.env.REACT_APP_KMDB_KEY;
    const [listProps,setListProps] = useState<MovieList[] | undefined>([]);
    
    const submitHandler = async (e:React.ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();
        let searchTypeVal = e.target.searchType.value;
        let searchContextVal = e.target.searchContext.value;
        const result = await getMovieResApi(searchTypeVal,searchContextVal);
        setListProps(result);
    }
    return (
        <div>
            <form onSubmit={submitHandler} className="search-form">
                <label htmlFor="search-type">검색유형선택</label>
                <select name="searchType" id="search-type">
                    <option value="title">제목</option>
                    <option value="director">감독</option>
                </select>
                <label htmlFor="search-context">검색어입력</label>
                <input type="text" placeholder="검색어를 입력해주세요." name="searchContext" required id="search-context"/>
                <button type="submit">
                    <ImSearch />
                </button>
            </form>
            <SquareList listProps={listProps}/>
        </div>
    )
}

export default SearchForm;