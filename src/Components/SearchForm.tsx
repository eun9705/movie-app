import { ChangeEvent } from 'react'
import { GoSearch } from 'react-icons/go';
import { SearchFormProps } from '../types/interface'; 

const SearchForm = ({submitFn,selectVal,setSelectVal,inputVal,setInputVal}:SearchFormProps) => {
    const handlerKeyPress = (e:React.KeyboardEvent<HTMLInputElement>) => {
        if(e.key === 'enter') submitFn();
    }
    return (
        <form onSubmit={submitFn} className="search-form">
            <label htmlFor="searchType">검색유형선택</label>
            <select name="searchType" id="searchType" onChange={(e:ChangeEvent<HTMLSelectElement>)=>{setSelectVal(e.currentTarget.value)}} value={selectVal}>
                <option value="title">제목</option>
                <option value="director">감독</option>
            </select>
            <label htmlFor="searchContext">검색어입력</label>
            <input type="text" placeholder="검색어를 입력해주세요." name="searchContext" required id="searchContext" onKeyPress={handlerKeyPress} onChange={(e:ChangeEvent<HTMLInputElement>)=>{setInputVal(e.currentTarget.value)}} value={inputVal}></input>
            <button type="submit">
                <GoSearch />
            </button>
        </form>
    )
}

export default SearchForm;