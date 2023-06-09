import { ListProps } from "../types/interface";
import nonePoster from '../images/no-poster.jpg'

const ContentDetail  = ({info}: ListProps) => {
    return (
        <div className="detail-wrapper">
            <div className="row-box">
                <img src={info?.posters ? info?.posters.split('|')[0] : nonePoster} alt="영화포스터" />
                <div className="text-wrapper">
                    <h2>{info?.title}</h2>
                    <h3>{info?.type},{info?.titleEng},{info?.repRatDate}</h3>
                    <hr />
                </div>
            </div>
        </div>
    )
}

export default ContentDetail;