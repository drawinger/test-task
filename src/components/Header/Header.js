import './Header.css';
import logo from '../../images/logo.jpg';

function Header() {
    return (
        <header className="header">
            <img src={logo} alt="Логотип" className="header__logo"/>
            <h1 className="header__title">スタジオジブリの好きな映画</h1>
        </header>

    );
}

export default Header;