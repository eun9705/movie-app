import { useEffect } from "react";
import { MoreButtonProps } from "../types/interface";

const MoreButton = ({totalCount,page,changePageNum}:MoreButtonProps) => {
    let totalPage:number = totalCount! / 10;
    const checkPage = () => {
        if(totalCount && totalCount % 10 > 0) totalPage++;
    }
    useEffect(()=>{ checkPage();},[]);
    
    return (
        <>
            {(totalPage > page) && <button className='more-btn' onClick={()=>{changePageNum(page + 1)}}>View More +</button>}
        </>
    )
}

export default MoreButton;