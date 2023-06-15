import { useState } from "react";
import { Link,useNavigate } from "react-router-dom";
import { Navigation,EffectCoverflow } from 'swiper';
import { Swiper,SwiperSlide } from "swiper/react";
import { BsFillArrowLeftCircleFill,BsInfoCircleFill } from 'react-icons/bs';
import { DetailProps } from "../types/interface";
import nonePoster from '../images/no-poster.jpg'

const ContentDetail  = ({info}: DetailProps) => {
    const navigation = useNavigate();
    const [viewAll,setViewAll] = useState<boolean>(false);
    return (
        <div className="detail-wrapper">
            <div className="row-box first">
                <img src={info?.posters ? info?.posters.split('|')[0] : nonePoster} alt="영화포스터" />
                <div className="text-wrapper">
                    <button onClick={()=>navigation(-1)}>
                        <BsFillArrowLeftCircleFill />이전
                    </button>
                    <h2>{info?.title}</h2>
                    <ul className="row-box info-list">
                        <li>{info?.type}</li>
                        <li>{info?.titleEng}</li>
                        <li>{info?.repRlsDate.slice(0,4)}</li>
                    </ul>
                    <hr />
                    <strong>기본정보</strong>
                    <div className="info-wrapper">
                        <div className="row-box"><span>개봉</span>{info?.repRlsDate.replace(/(\d{4})(\d{2})(\d{2})/, "$1.$2.$3")}</div>
                        <div className="row-box"><span>등급</span>{info?.rating}</div>
                        <div className="row-box"><span>장르</span>{info?.genre}</div>
                        <div className="row-box"><span>국가</span>{info?.nation}</div>
                        <div className="row-box"><span>러닝타임</span>{info?.runtime}분</div>
                        <div className="row-box"><span>감독</span>{info?.directors.director[0].directorNm} ({info?.directors.director[0].directorEnNm})</div>
                        <div className="row-box">
                            <span>출연</span>
                            <ul className={viewAll ? "on" : ""}>
                                {info?.actors.actor.map((item,idx)=>{
                                    if(info?.actors.actor.length === (idx + 1)) {
                                        return <li key={idx}>{item.actorNm}</li>
                                    }
                                    return <li key={idx}>{item.actorNm}, </li>
                                })}
                            </ul>
                        </div>
                        <button className="basic-btn" onClick={()=>{setViewAll(!viewAll)}}>{viewAll ? "닫기" : "더보기"}</button>
                    </div>
                </div> 
            </div>
            <div className="content-wrapper">
                <h3>줄거리</h3>
                <hr />
                <p>{info?.plots?.plot[0].plotText.replace(/\./gm,"\n")}</p>
            </div>
            <div className="content-wrapper">
                <h3>포스터({info?.posters.split('|').length})</h3>
                <hr />
                <Swiper 
                    effect={"coverflow"}
                    modules={[Navigation,EffectCoverflow]} 
                    centeredSlides={true}
                    slidesPerView={5} 
                    coverflowEffect={{
                        rotate: 10,
                        stretch: 0, 
                        depth: 100,
                        modifier: 2,
                        slideShadows: true,
                    }}
                    navigation
                    breakpoints={{
                        820: { slidesPerView:5 },
                        375:{ slidesPerView:2 }
                    }}
                >
                    {info?.posters.split('|').map((item,idx)=>{
                        return <SwiperSlide className="poster-slide" key={idx}>
                            <img src={item} alt="영화포스트" />
                        </SwiperSlide>
                    })}
                </Swiper>
            </div>
            {info?.kmdbUrl && <Link to={info?.kmdbUrl} target="_blank" className="link-btn">KMDb에 등록된 정보 보기<BsInfoCircleFill /></Link>}
        </div>
    )
}

export default ContentDetail;