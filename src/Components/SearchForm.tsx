import { GoSearch } from 'react-icons/go';

const SearchForm = ({submitHandler}:any) => {
    // const [listProps,setListProps] = useState<MovieList[] | undefined>([]);

    // const submitHandler = async (e:React.ChangeEvent<HTMLFormElement>) => {
    //     e.preventDefault();
    //     let searchTypeVal = e.target.searchType.value;
    //     let searchContextVal = e.target.searchContext.value;
    //     const result = await getMovieResApi(searchTypeVal,searchContextVal);
    //     setListProps(result);
    // }

    return (
        <>
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
            {/* <div className="card-wrapper">
                {listProps?.map((info,idx)=>{
                    return <SquareList info={info} key={idx}/>
                })}
            </div> */}
        </>
    )
}

export default SearchForm;