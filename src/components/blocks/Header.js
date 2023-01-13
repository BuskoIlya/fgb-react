import './Header.css';

function Header() {
  return (
    <header className="header">
      <img
        className="logo header__logo"
        src={process.env.REACT_APP_IMG_FLAG_PATH + 'by-round.jpg'}
        alt="Флаг Беларуси"
      />
      <h1 className="title header__title">Сообщество Го Беларуси</h1>
    </header>
  );
}

export default Header;