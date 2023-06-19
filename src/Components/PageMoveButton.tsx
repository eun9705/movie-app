import { useNavigate } from 'react-router-dom';
import { ButtonName } from '../types/interface';

const PageMoveButton = ({buttonName}:ButtonName) => {
    const navigate = useNavigate();
    const pageMoveFn = (type:string) => {
        if(type === 'prev') navigate(-1);
        else navigate('/');
    }
    return <button className={`${buttonName}`} onClick={()=>pageMoveFn(buttonName)}>{(buttonName === 'prev') ? "이전" : "메인"}페이지</button>
};

export default PageMoveButton;