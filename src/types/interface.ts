export interface MovieData {
    Data: Array<MovieResult>;
}
export interface MovieResult {
    Count: number;
    TotalCount?: number;
    Result: Array<MovieList>;
}
export interface MovieList {
    genre:string;
    keywords:string;
    kmdbUrl:string;
    modDate:string;
    movieId:string;
    movieSeq:string;
    nation:string;
    openThtr:string;
    posters:string;
    prodYear:string;
    ratedYn:string;
    rating:string;
    regDate:string;
    repRatDate:string;
    repRlsDate:string;
    runtime:string;
    salesAcc:string;
    screenArea:string;
    screenCnt:string;
    soundtrack:string;
    statDate:string;
    statSouce:string;
    stlls:string;
    themeSong:string;
    title:string;
    titleEng:string;
    titleEtc:string;
    titleOrg:string;
    type:string;
    use:string;
}

export interface FormElements extends HTMLFormControlsCollection {
    searchType: HTMLSelectElement;
    searchContext:HTMLInputElement
}

export interface FormSubmitProps extends HTMLFormElement {
    readonly elements: FormElements;
}

export interface ListProps {
    info: MovieList | undefined
}