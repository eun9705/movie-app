import axios from "axios";
import { ImSearch } from 'react-icons/im';

const SearchForm = () => {
    const api_key = process.env.REACT_APP_KMDB_KEY;
    const submitHandler = async(e:React.ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();
        let searchTypeVal = e.target.searchType.value;
        let searchContextVal = e.target.searchContext.value;
        const res = await axios.get(`http://api.koreafilm.or.kr/openapi-data2/wisenut/search_api/search_json2.jsp?collection=kmdb_new2&detail=Y&${searchTypeVal}=${searchContextVal}&ServiceKey=${api_key}`);
    }
    return <form onSubmit={submitHandler} className="search-form">
        <label htmlFor="search-type"></label>
        <select name="searchType" id="search-type">
            <option value="title">제목</option>
            <option value="director">감독</option>
        </select>
        <label htmlFor="search-context"></label>
        <input type="text" placeholder="검색어를 입력해주세요." name="searchContext" required id="search-context"/>
        <button type="submit">
            <ImSearch />
        </button>    
    </form>
}

export default SearchForm;