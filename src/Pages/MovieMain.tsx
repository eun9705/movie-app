import { useEffect, useState } from 'react';
import { useNavigate,useParams } from 'react-router-dom';
import { FormSubmitProps, MovieList } from "../types/interface";
import { getMovieResApi } from "../api/serviceApi";
import SearchForm from "../Components/SearchForm";
import SquareList from '../Components/SquareList';

const MovieMain = () => {
    const [searchType,setSearchType] = useState<string>('title');
    const [searchContext,setSearchContext] = useState<string>('');
    const [totalCount,setTotalCount] = useState<number | undefined>(0);
    const [listProps,setListProps] = useState<MovieList[] | undefined>([]);
    const { keyword,context } = useParams() as { keyword:string;context: string};
    
    const navigation = useNavigate();

    const startApi = async (selectVal:string,inputVal:string) => {
        const result = await getMovieResApi(selectVal,inputVal);
        setTotalCount(result?.TotalCount);
        setListProps(result?.Result);
    }

    const submitHandler = async (e:React.FormEvent<FormSubmitProps>) => {
        e.preventDefault();
        navigation(`/${searchType}/${searchContext}`);
        startApi(searchType,searchContext);
    }

    const checkState = async () => {
        setSearchType(keyword);
        setSearchContext(context);
    }

    const searchHistory = async () => {
        if(keyword && context) {
            await checkState();
            startApi(searchType,searchContext);
        }  
    }

    useEffect(()=>{
        searchHistory();
    },[keyword,context]);

    
    return <>
        <div className="movie-main">
            <div className="main-wrapper">
                <div className="container">
                    <div className="title-box">
                        <span>Korean Movie Database</span>
                        <h1 className='highlight'>KMDb</h1>
                        <p>
                            한국영화데이터베이스의 Open API를 활용하여 제작한 사이트입니다.<br />
                            제목, 감독 옵션을 선택하여 검색할 수 있습니다.
                        </p>
                    </div>
                    <SearchForm submitFn={submitHandler} searchType={searchType} setSearchType={setSearchType} searchContext={searchContext} setSearchContext={setSearchContext}/>
                </div>
            </div>
            {(keyword && context) &&
                <div className='card-box container'>
                    <strong className='result-text'>검색결과({totalCount})</strong>
                    <hr />
                    <div className="card-wrapper">
                        {totalCount !==0 ? 
                            listProps?.map((info,idx)=>{
                                return <SquareList info={info} key={idx}/>
                            }) :
                            <div className='text-wrapper'>
                                <strong><span className='highlight'>'{searchContext}'</span>에 대한 검색결과 없음</strong>
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
    </>
}

export default MovieMain;