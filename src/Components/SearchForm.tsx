import { GoSearch } from 'react-icons/go';
import { SearchFormProps } from '../types/interface'; 

const SearchForm = ({submitFn,searchType,setSearchType,searchContext,setSearchContext}:SearchFormProps) => {
    const handlerKeyPress = (e:React.KeyboardEvent<HTMLInputElement>) => {
        if(e.key === 'enter') submitFn();
    }
    return (
        <form onSubmit={submitFn} className="search-form">
            <label htmlFor="searchType">검색유형선택</label>
            <select name="searchType" id="searchType" onChange={(e:React.ChangeEvent<HTMLSelectElement>)=>setSearchType(e.target.value)} value={searchType}>
                <option value="title">제목</option>
                <option value="director">감독</option>
            </select>
            <label htmlFor="searchContext">검색어입력</label>
            <input type="text" placeholder="검색어를 입력해주세요." name="searchContext" required id="searchContext" onKeyPress={handlerKeyPress} onChange={(e:React.ChangeEvent<HTMLInputElement>)=>setSearchContext(e.target.value)} value={searchContext}></input>
            <button type="submit">
                <GoSearch />
            </button>
        </form>
    )
}

export default SearchForm;