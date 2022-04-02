import './Header.css';
import logo from '../../images/logo.jpg';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';


function Header() {
    return (
        <header className="header">
            <Link to='/'><img src={logo} alt="Логотип" className="header__logo"/></Link>
            <Link to='./likes'><h1 className="header__title">スタジオジブリの好きな映画</h1></Link>
        </header>

    );
}

export default Header;