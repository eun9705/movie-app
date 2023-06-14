import axios from "axios";
import { MovieData } from "../types/interface";

const errorHandler = (code:number) => {
    switch(code) {
        case 403:
        case 404:
            break;
        case 500:
        case 503:
            break;
        default:
            break;
    }
}

export const getMovieResApi = async (searchType:string|undefined,searchContext:string|undefined) => {
    const api_key = process.env.REACT_APP_KMDB_KEY;
    // console.log(searchType,searchContext);
    // return;
    try {
        const { data } = await axios.get<MovieData>(`http://api.koreafilm.or.kr/openapi-data2/wisenut/search_api/search_json2.jsp?collection=kmdb_new2&detail=Y&${searchType}=${searchContext}&ServiceKey=${api_key}&listCount=150`);
        return data.Data[0];
    }
    catch(error) {
        //error 로직 추가 필요
        console.log(error);
    }
}

export const getMovieDetail = async (id:string,seq:string) => {
    const api_key = process.env.REACT_APP_KMDB_KEY;
    try{
        const { data } = await axios.get<MovieData>(`http://api.koreafilm.or.kr/openapi-data2/wisenut/search_api/search_json2.jsp?collection=kmdb_new2&detail=Y&movieId=${id}&movieSeq=${seq}&ServiceKey=${api_key}&listCount=1`);
        return data.Data[0];
    }
    catch(error) {

    }
}