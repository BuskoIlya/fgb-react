import config from '../../js/config';

import './Header.css';

function Header() {
  return (
    <header className = "header">
      <img className = "header__logo logo"
           src = {config.imgFlagPath + 'by-round.jpg'} alt = "Флаг Беларуси" />
      <h1 className = "title">Сообщество Го Беларуси</h1>
    </header>
  );
}

export default Header;