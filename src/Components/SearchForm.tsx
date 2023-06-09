import { GoSearch } from 'react-icons/go';

const SearchForm = ({submitHandler}:any) => {
    return (
        <form onSubmit={submitHandler} className="search-form">
            <label htmlFor="searchType">검색유형선택</label>
            <select name="searchType" id="searchType">
                <option value="title">제목</option>
                <option value="director">감독</option>
            </select>
            <label htmlFor="searchContext">검색어입력</label>
            <input type="text" placeholder="검색어를 입력해주세요." name="searchContext" required id="searchContext"/>
            <button type="submit">
                <GoSearch />
            </button>
        </form>
    )
}

export default SearchForm;