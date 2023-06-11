import { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { FormSubmitProps, MovieList } from "../types/interface";
import { getMovieResApi } from "../api/serviceApi";
import SearchForm from "../Components/SearchForm";
import SquareList from '../Components/SquareList';

const MovieMain = () => {
    const [searchType,setSearchType] = useState<string>('title');
    const [searchContext,setSearchContext] = useState<string>('');
    const [viewCount,setViewCount] = useState<boolean>(false);
    const [totalCount,setTotalCount] = useState<number | undefined>(0);
    const [listProps,setListProps] = useState<MovieList[] | undefined>([]);
    const [searchParams,setSearchParams] = useSearchParams();
    // const { movieId,movieSeq } = useParams() as { movieId:string;movieSeq: string};
    
    const navigation = useNavigate();
    
    const keyword = searchParams.get('keyword')!;
    const context = searchParams.get('context')!;

    const submitHandler = async (e:React.FormEvent<FormSubmitProps>) => {
        e.preventDefault();
        setSearchParams({keyword:searchType,context:searchContext});
        navigation(`/?keyword=${searchType}&context=${searchContext}`);
        const result = await getMovieResApi(searchType,searchContext);
        setViewCount(true);
        setTotalCount(result?.TotalCount);
        setListProps(result?.Result);
    }

    const searchHistory = async () => {
        if(keyword && context) {
            console.log(keyword,context);
            console.log('state',searchType,searchContext);
            const result = await getMovieResApi(keyword,context);
            setViewCount(true);
            setTotalCount(result?.TotalCount);
            setListProps(result?.Result);
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
            {viewCount &&
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