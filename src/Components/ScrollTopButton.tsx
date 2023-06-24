import {MouseEvent} from 'react';
import { HiArrowUp } from 'react-icons/hi';

const ScrollTopButton = () => {
    const moveTop = (event:MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        window.scroll({
            top: 0,
            behavior: 'smooth'
        })
    }
    return <button className="top-btn" onClick={moveTop}><HiArrowUp /></button>
};

export default ScrollTopButton;