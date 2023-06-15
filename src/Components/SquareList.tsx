import { Link } from "react-router-dom";
import { ListProps } from "../types/interface";
import nonePoster from '../images/no-poster.jpg'

const SquareList = ({info}: ListProps)  => {
    return (
        <>
            {info?.map((item,idx)=>{
                return <Link to={`/detail/${item?.movieId}/${item?.movieSeq}`} className="card" key={idx}>
                    <img src={item?.posters ? item?.posters.split('|')[0] : nonePoster} alt="영화포스터" />
                    <h4>{item?.title.replace(/!HE|!HS/ig,'')}</h4>
                </Link>
            })}
        </>
        
    )
}

export default SquareList;