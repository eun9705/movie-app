import { useState } from 'react';
import { Link } from 'react-router-dom';
import SearchForm from "../Components/SearchForm";

const MovieHome = () => {
    const [selectVal,setSelectVal] = useState<string>('title');
    const [inputVal,setInputVal] = useState<string>('');
    
    

    return (
        <div className='movie-main'>
            <div className="container">
                <div className="title-box">
                <span>Korean Movie Database</span>
                    <h1 className='highlight'><Link to="/" className='highlight'>KMDb</Link></h1>
                    <p>
                        한국영화데이터베이스의 Open API를 활용하여 제작한 사이트입니다.<br />
                        제목, 감독 옵션을 선택하여 검색할 수 있습니다.
                    </p>
                </div>
                <SearchForm selectVal={selectVal} setSelectVal={setSelectVal} inputVal={inputVal} setInputVal={setInputVal}/>
            </div>
        </div>
    )
}

export default MovieHome;