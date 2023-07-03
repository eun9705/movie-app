import { Link } from 'react-router-dom';
import logo from '../images/logo.svg';

const Header = () => {
    return (
        <header>
            <Link to='/'><img src={logo} alt="로고" /></Link>
        </header>
    )
}

export default Header;