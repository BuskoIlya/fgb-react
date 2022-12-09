import './Footer.css';

function Footer() {
  return (
    <footer className = "footer">
      <p>&copy; Бусько Илья Владимирович</p>
      <img className = "footer__logo logo"
           src = { process.env.REACT_APP_IMG_LOGO_PATH + 'fgb-160.png' } alt = "Логотип сообщества 'Умный Аист'"/>
    </footer>
  );
}

export default Footer;