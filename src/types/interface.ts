import {Dispatch,SetStateAction,RefObject} from 'react';

export interface MovieData {
    Data: Array<MovieResult>;
}
export interface MovieResult {
    TotalCount: number;
    Result: Array<MovieList>;
}
export interface MovieList {
    actors:ActorsObj;
    directors:DirectorsObj;
    genre:string;
    keywords:string;
    kmdbUrl:string;
    movieId:string;
    movieSeq:string;
    nation:string;
    plots:PlotsObj;
    posters:string;
    rating:string;
    repRlsDate:string;
    runtime:string;
    stlls:string;
    title:string;
    titleEng:string;
    titleEtc:string;
    titleOrg:string;
    type:string;
}

export interface DirectorsObj {
    director: Array<Director>;
}

export interface Director {
    directorEnNm:string;
    directorNm:string;
}

export interface PlotsObj {
    plot: [{plotText:string}];
}

export interface ActorsObj {
    actor: [{actorNm:string}];
}

export interface FormElements extends HTMLFormControlsCollection {
    searchType:HTMLSelectElement;
    searchContext:HTMLInputElement
}

export interface FormSubmitProps extends HTMLFormElement {
    readonly elements: FormElements;
}

export interface ListProps {
    info: MovieList[] | undefined;
}

export interface DetailProps {
    info: MovieList | undefined;
}

export interface SearchFormProps {
    submitFn: any;
    selectVal:string;
    setSelectVal:Dispatch<SetStateAction<string>>;
    inputVal:string;
    setInputVal:Dispatch<SetStateAction<string>>;
}

export interface MoreButtonProps {
    totalCount:number | undefined;
    page:number;
    changePageNum:Dispatch<SetStateAction<number>>;
}

export interface ButtonName {
    buttonName:string;
}