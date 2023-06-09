import { ListProps } from "../types/interface";
import nonePoster from '../images/no-poster.jpg'
import { Link } from "react-router-dom";

const SquareList = ({info}: ListProps)  => {
    return (
        <Link to='/detail' className="card">
            <img src={info?.posters ? info?.posters.split('|')[0] : nonePoster} alt="영화포스터" />
            <h4>{info?.title.replace(/!HE|!HS/ig,'')}</h4>
        </Link>
    )
}

export default SquareList;