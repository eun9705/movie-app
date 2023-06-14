import { GoSearch } from 'react-icons/go';
import { SearchFormProps } from '../types/interface'; 

const SearchForm = ({submitFn,inputRef,selectRef}:SearchFormProps) => {
    const handlerKeyPress = (e:React.KeyboardEvent<HTMLInputElement>) => {
        if(e.key === 'enter') submitFn();
    }
    return (
        <form onSubmit={submitFn} className="search-form">
            <label htmlFor="searchType">검색유형선택</label>
            <select name="searchType" id="searchType" defaultValue={selectRef.current?.value} ref={selectRef}>
                <option value="title">제목</option>
                <option value="director">감독</option>
            </select>
            <label htmlFor="searchContext">검색어입력</label>
            <input type="text" placeholder="검색어를 입력해주세요." name="searchContext" required id="searchContext" onKeyPress={handlerKeyPress} defaultValue={inputRef.current?.value} ref={inputRef}></input>
            <button type="submit">
                <GoSearch />
            </button>
        </form>
    )
}

export default SearchForm;