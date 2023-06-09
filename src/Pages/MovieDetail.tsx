import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ContentDetail from "../Components/ContentDetail";
import { MovieList } from "../types/interface";
import { getMovieDetail } from '../api/serviceApi';

const MovieDetail = () => {
    const { movieId,movieSeq } = useParams() as { movieId:string;movieSeq: string};
    const [detailProps,setDetailProps] = useState<MovieList[] | undefined>([]);

    const getDetailProps = async () => {
        const result = await getMovieDetail(movieId,movieSeq);
        setDetailProps(result?.Result);
    }
    useEffect(()=>{
        getDetailProps();
    },[]);
    return (
        <div className="detail-box">
            <div className="container">
                {detailProps?.map((info,idx)=>{
                    return <ContentDetail info={info} key={idx}/>
                })}
            </div>
        </div>
    )
}

export default MovieDetail;