import axios from "axios";
import { MovieData } from "../types/interface";

export const getMovieResApi = async (searchTypeVal:string,searchContextVal:string) => {
    const api_key = process.env.REACT_APP_KMDB_KEY;
    try {
        const { data } = await axios.get<MovieData>(`http://api.koreafilm.or.kr/openapi-data2/wisenut/search_api/search_json2.jsp?collection=kmdb_new2&detail=Y&${searchTypeVal}=${searchContextVal}&ServiceKey=${api_key}`);
        return data.Data[0].Result;
    }
    catch(error) {
        //error 로직 추가 필요
    }
}