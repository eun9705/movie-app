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

export const getMovieResApi = async (searchType:string,searchContext:string) => {
    console.log(searchType,searchContext);
    const api_key = process.env.REACT_APP_KMDB_KEY;
    try {
        const { data } = await axios.get<MovieData>(`http://api.koreafilm.or.kr/openapi-data2/wisenut/search_api/search_json2.jsp?collection=kmdb_new2&detail=Y&${searchType}=${searchContext}&ServiceKey=${api_key}`);
        return data.Data[0];
        // return data.Data[0].Result;
    }
    catch(error) {
        //error 로직 추가 필요
        console.log(error);
    }
}