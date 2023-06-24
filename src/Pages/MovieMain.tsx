import { useEffect, useState } from 'react';
import { useNavigate,useParams,Link } from 'react-router-dom';
import { FormSubmitProps, MovieList } from "../types/interface";
import { getMovieResApi } from "../api/serviceApi";
import SearchForm from "../Components/SearchForm";
import SquareList from '../Components/SquareList';
import MoreButton from '../Components/MoreButton';

const MovieMain = () => {
    const [loading,setLoading] = useState<boolean>(false);
    const [totalCount,setTotalCount] = useState<number | undefined>(0);
    const [listProps,setListProps] = useState<MovieList[] | undefined>([]);
    const [currentPage,setCurrentPage] = useState<number>(1);
    const [selectVal,setSelectVal] = useState<string>('title');
    const [inputVal,setInputVal] = useState<string>('');
    const { keyword,context } = useParams() as { keyword:string;context: string };
    
    const navigation = useNavigate();

    const startApi = async (selectVal:string|undefined,inputVal:string|undefined) => {
        setLoading(true);
        const result = await getMovieResApi(selectVal,inputVal);
        if(typeof(result) === 'object') {
            setLoading(false);
            setTotalCount(result?.TotalCount);
            setListProps(result?.Result);
        }
    }

    const submitHandler = async (e:React.FormEvent<FormSubmitProps>) => {
        e.preventDefault();
        navigation(`/${selectVal}/${inputVal}`);
        setCurrentPage(1);
    }

    useEffect(()=>{
        if(keyword && context) {
            if(keyword !== selectVal || context !== inputVal) {
                setSelectVal(keyword);
                setInputVal(context);
            }
            startApi(keyword,context);  
        }else {
            setSelectVal('title');
            setInputVal('');
        }
    },[keyword,context]);

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
        <div className="movie-main">
            <div className="main-wrapper">
                <div className="container">
                    <div className="title-box">
                        <span>Korean Movie Database</span>
                        <h1 className='highlight'><Link to="/" className='highlight'>KMDb</Link></h1>
                        <p>
                            한국영화데이터베이스의 Open API를 활용하여 제작한 사이트입니다.<br />
                            제목, 감독 옵션을 선택하여 검색할 수 있습니다.
                        </p>
                    </div>
                    <SearchForm submitFn={submitHandler} selectVal={selectVal} setSelectVal={setSelectVal} inputVal={inputVal} setInputVal={setInputVal}/>
                </div>
            </div>
            {(keyword && context) &&
                <div className='card-box container'>
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
    )
}

export default MovieMain;