import { Link } from 'react-router-dom';
import logo from '../images/logo.svg'

const Header = () => {
    return (
        <header>
            <Link to='/'><img src={logo} alt="로고" /></Link>
            <ul>
                <li><Link to='/'>영 화 검 색</Link></li>
                <li><Link to='/introduce'>소 개</Link></li>
            </ul>
        </header>
    )
}

export default Header;