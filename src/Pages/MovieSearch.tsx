import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import queryString from 'query-string';
import { MovieList } from "../types/interface";
import { getMovieResApi } from "../api/serviceApi";
import SearchForm from "../Components/SearchForm";
import SquareList from '../Components/SquareList';
import MoreButton from '../Components/MoreButton';

const MovieSearch = () => {
    const [loading,setLoading] = useState<boolean>(false);
    const [totalCount,setTotalCount] = useState<number | undefined>(0);
    const [listProps,setListProps] = useState<MovieList[] | undefined>([]);
    const [currentPage,setCurrentPage] = useState<number>(1);
    const [selectVal,setSelectVal] = useState<string>('title');
    const [inputVal,setInputVal] = useState<string>('');
    const { search } = useLocation();
    const { type,context } = queryString.parse(search) as { context:string|undefined;type:string|undefined };

    const startApi = async (selectVal:string|undefined,inputVal:string|undefined) => {
        setLoading(true);
        const result = await getMovieResApi(selectVal,inputVal);
        if(typeof(result) === 'object') {
            setLoading(false);
            setTotalCount(result?.TotalCount);
            setListProps(result?.Result);
        }
    }

    useEffect(()=>{
        if(type && context) {
            if(type !== selectVal || context !== inputVal) {
                setSelectVal(type);
                setInputVal(context);
            }
            startApi(type,context);  
        }else {
            setSelectVal('title');
            setInputVal('');
        }
    },[type,context]);

    const currentList = (listProps:MovieList[] | undefined) => {
        const indexOfLast = currentPage * 10;
        let currentPosts:MovieList[]|undefined = [];
        currentPosts = listProps?.slice(0, indexOfLast);
        return currentPosts;
    }

    useEffect(()=>{
        setCurrentPage(1);
        currentList(listProps);
    },[listProps]);

    return (
        <div className="movie-search">
            <div className="container">
                <SearchForm selectVal={selectVal} setSelectVal={setSelectVal} inputVal={inputVal} setInputVal={setInputVal}/>
                {(type && context) &&
                    <div className='card-box'>
                        <strong className='result-text'>검색결과({totalCount})</strong>
                        <hr />
                        <div className="card-wrapper">
                            {!loading && totalCount! < 1 ? 
                                <div className='text-wrapper'>
                                    <strong><span className='highlight'>'{context}'</span>에 대한 검색결과 없음</strong>
                                    <p>
                                        단어의 철자가 정확한지 확인해 보세요.<br />
                                        검색 옵션을 변경해서 다시 검색해 보세요.
                                    </p>
                                </div>
                                :
                                <SquareList info={currentList(listProps)}/>
                            }
                        </div>
                        {(listProps && listProps?.length > 10) && <MoreButton totalCount={totalCount} page={currentPage} changePageNum={setCurrentPage}/>}
                    </div>
                }
            </div>
        </div>
    )
}

export default MovieSearch;