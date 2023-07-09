import axios from "axios";
import { MovieData } from "../types/interface";

const url = `${process.env.PUBLIC_URL}/warn`;

export const getMovieResApi = async (searchType:string|undefined,searchContext:string|undefined) => {
    const api_key = process.env.REACT_APP_KMDB_KEY;
    try {
        const { data } = await axios.get<MovieData>(`http://api.koreafilm.or.kr/openapi-data2/wisenut/search_api/search_json2.jsp?collection=kmdb_new2&detail=Y&${searchType}=${searchContext}&ServiceKey=${api_key}&listCount=150`);
        return data.Data[0];
    }
    catch(error) {
        // window.location.pathname = url;
    }
}

export const getMovieDetail = async (id:string,seq:string) => {
    const api_key = process.env.REACT_APP_KMDB_KEY;
    try{
        const { data } = await axios.get<MovieData>(`http://api.koreafilm.or.kr/openapi-data2/wisenut/search_api/search_json2.jsp?collection=kmdb_new2&detail=Y&movieId=${id}&movieSeq=${seq}&ServiceKey=${api_key}&listCount=1`);
        return data.Data[0];
    }
    catch(error) {
        // window.location.pathname = url;
    }
}