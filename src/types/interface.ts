export interface MovieData {
    Data: Array<MovieResult>;
}
export interface MovieResult {
    Count: number;
    TotalCount: number;
    Result: Array<MovieList>;
}
export interface MovieList {
    // ALIAS:string;
    // Awards1:string;
    // Awards2:string;
    // Codes:Array<Code>;
    // CommCodes:Array<CommCode>;
    // DOCID:string;
    // actor:Array<actor>
    // audiAcc:string;
    // company:string;
    // directors:Array<director>;
    // episodes:string;
    // fLocation:string;
    genre:string;
    keywords:string;
    kmdbUrl:string;
    modDate:string;
    movieId:string;
    movieSeq:string;
    nation:string;
    openThtr:string;
    // plots:Array<plot>;
    posters:string;
    prodYear:string;
    ratedYn:string;
    rating:string;
    // ratings:Array<rating>;
    regDate:string;
    repRatDate:string;
    repRlsDate:string;
    runtime:string;
    salesAcc:string;
    screenArea:string;
    screenCnt:string;
    soundtrack:string;
    // staffs:Array<staff>;
    // stat:Array<stat>;
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
    // vods:Array<vod>;
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

// export interface FormSubmitProps extends HTMLFormElement {
//     submitHandler: (event:React.FormEvent<HTMLFormElement>) => void;
// }