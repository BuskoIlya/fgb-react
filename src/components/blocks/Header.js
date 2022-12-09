import './Header.css';

function Header() {
  return (
    <header className = "header">
      <img className = "header__logo logo"
           src = { process.env.REACT_APP_IMG_FLAG_PATH + 'by-round.jpg' } alt = "Флаг Беларуси" />
      <h1 className = "header__title title">Сообщество Го Беларуси</h1>
    </header>
  );
}

export default Header;