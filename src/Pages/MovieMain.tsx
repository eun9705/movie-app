import { useEffect, useState,useRef } from 'react';
import { useNavigate,useParams } from 'react-router-dom';
import { FormSubmitProps, MovieList } from "../types/interface";
import { getMovieResApi } from "../api/serviceApi";
import SearchForm from "../Components/SearchForm";
import SquareList from '../Components/SquareList';
import { Link } from 'react-router-dom';

const MovieMain = () => {
    const [totalCount,setTotalCount] = useState<number | undefined>(0);
    const [listProps,setListProps] = useState<MovieList[] | undefined>([]);
    const [viewList,setViewList] = useState<boolean>(false);
    const inputRef = useRef<HTMLInputElement>(null);
    const selectRef = useRef<HTMLSelectElement>(null);

    const { keyword,context } = useParams() as { keyword:string;context: string};
    
    const navigation = useNavigate();

    const startApi = async (selectVal:string|undefined,inputVal:string|undefined) => {
        const result = await getMovieResApi(selectVal,inputVal);
        setViewList(true);
        setTotalCount(result?.TotalCount);
        setListProps(result?.Result);
    }

    const submitHandler = async (e:React.FormEvent<FormSubmitProps>) => {
        e.preventDefault();
        const selectVal = selectRef.current?.value;
        const inputVal = inputRef.current?.value;
        navigation(`/${selectVal}/${inputVal}`);
        startApi(selectVal,inputVal);
    }

    const searchHistory = async () => {
        if(keyword && context) startApi(keyword,context);  
    }

    useEffect(()=>{
        searchHistory();
    },[keyword,context]);


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
                    <SearchForm submitFn={submitHandler} inputRef={inputRef} selectRef={selectRef} />
                </div>
            </div>
                {viewList && 
                    <div className='card-box container'>
                        <strong className='result-text'>검색결과({totalCount})</strong>
                        <hr />
                        <div className="card-wrapper">
                            {totalCount !==0 ? 
                                listProps?.map((info,idx)=>{
                                    return <SquareList info={info} key={idx}/>
                                }) :
                                <div className='text-wrapper'>
                                    <strong><span className='highlight'>'{inputRef.current?.value}'</span>에 대한 검색결과 없음</strong>
                                    <p>
                                        단어의 철자가 정확한지 확인해 보세요.<br />
                                        검색 옵션을 변경해서 다시 검색해 보세요.
                                    </p>
                                </div>
                            }
                        </div>
                        {(listProps && listProps?.length > 10) && <button className='more-btn'>View More +</button>}
                    </div>
                }
        </div>
    )
}

export default MovieMain;