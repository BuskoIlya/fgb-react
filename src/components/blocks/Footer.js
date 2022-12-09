import config from '../../js/config';

import './Footer.css';

function Footer() {
  return (
    <footer className = "footer">
      <p>&copy; Бусько Илья Владимирович</p>
      <img className = "footer__logo logo"
           src = {config.imgLogoPath + 'fgb-160.png'} alt = "Логотип сообщества 'Умный Аист'"/>
    </footer>
  );
}

export default Footer;