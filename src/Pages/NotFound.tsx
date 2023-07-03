import { useLocation } from 'react-router-dom'
import PageMoveButton from '../Components/PageMoveButton';
import caution from '../images/caution.png';

const NotFound = () => {
    const location = useLocation();
    const { pathname }  = location;
    const pathParam = pathname.split('/')[1];
    return (
        <div className='not-found-main'>
            <img src={caution} alt="경고 아이콘" />
            {pathParam === 'warn' ? <strong>잘못된 접근입니다.</strong> : <strong>요청하신 페이지를 찾을 수 없습니다.</strong>}
            {pathParam === 'warn' ?
            <p>서비스 이용에 불편을 드려서 죄송합니다.</p>
            :
            <p>
                존재하지 않는 주소를 입력하셨거나,<br/>
                요청하신 페이지의 주소가 변경, 삭제되었을 수 있습니다.<br/>
                입력한 주소가 정확한지 다시 한 번 확인 주시기 바랍니다.
            </p>
            }
            <div>
                {pathParam === 'warn' ? "" : <PageMoveButton buttonName={"prev"} />}
                <PageMoveButton buttonName={"main"} />
            </div>
        </div>
    );
};

export default NotFound;