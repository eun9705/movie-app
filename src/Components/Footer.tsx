import { Link } from "react-router-dom";

const Footer = () => {
    return <footer>
        <Link to="https://github.com/eun9705/movie-app" target="_blank">ⓒ 2023. Bae Eunkyoung. All rights reserved.</Link>
        <p>
            본 사이트는 상업적 목적이 아닌 개인 포트폴리오 용도로 제작되었습니다.<br />
            일부 이미지 및 폰트 등은 그 출처가 따로 있음을 밝힙니다.<br />
            해당 사이트는 1920*1080해상도에 최적화 되었습니다.
        </p>
    </footer>
}

export default Footer;