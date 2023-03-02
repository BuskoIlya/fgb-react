import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightToBracket, faUser } from '@fortawesome/free-solid-svg-icons';
import FGBButton from '../../components/FGBButton/FGBButton';
import UserContext from '../../user/UserContext';
import './Login.css';

function Login() {

  const [user, setUser] = React.useContext(UserContext);
  const [isLogin, setIsLogin] = React.useState(true);
  const [fields, setFields] = React.useState({
    email: '',
    password: ''
  });
  const navigate = useNavigate();

  const handleChangeFieldValue = (event) => {
    setFields({
      ...fields,
      [event.target.name]: event.target.value
    });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const options = {
      method: 'POST',
      headers: {'Content-Type': 'application/json; charset=UTF-8'},
      body: JSON.stringify({login: fields.email, password: fields.password})
    };
    let url = process.env.REACT_APP_SERVER_URL;
    url += isLogin ?
      process.env.REACT_APP_API_USER_LOGIN :
      process.env.REACT_APP_API_USER_REGISTER;
    const res = await fetch(url, options);

    if (res.ok) {
      const {token, logoImg, letter, fio} = await res.json();
      window.localStorage.setItem('token', token);
      setUser({token, logoImg, letter, fio});
      navigate(`/profile`);
    } else {
      alert('Неверный логин или пароль!');
      navigate('/');
    }
  }

  return (
    <form onSubmit={onSubmit} className="login">
      <div className="login__title">
        <FGBButton
          active={isLogin ? true : false}
          color="blue"
          onClickAction={(e) => {e.preventDefault(); setIsLogin(true);}}
          startIcon={<FontAwesomeIcon icon={faRightToBracket} />}
        >
          Войти
        </FGBButton>
        <FGBButton
          active={!isLogin ? true : false}
          color="blue"
          onClickAction={(e) => {e.preventDefault(); setIsLogin(false);}}
          startIcon={<FontAwesomeIcon icon={faUser} />}
        >
          Зарегистрироваться
        </FGBButton>
      </div>
      <label className="login__field">
        Логин (почта):
        <input
          className="login__input"
          name="email"
          onChange={handleChangeFieldValue}
          placeholder="Почта"
          type="text"
          value={fields.email}
        />
      </label>
      <label className="login__field">
        Пароль:
        <input
          className="login__input"
          name="password"
          onChange={handleChangeFieldValue}
          type="text"
          value={fields.password}
        />
      </label>
      <FGBButton color="blue">{isLogin ? 'Войти': 'Зарегистрироваться'}</FGBButton>
    </form>
  );
}

export default Login;