import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightToBracket, faUser } from '@fortawesome/free-solid-svg-icons';
import FGBButton from '../../components/FGBButton/FGBButton';
import UserContext from '../../user/UserContext';
import './Login.css';

function Login() {

  const url = process.env.REACT_APP_SERVER_URL + process.env.REACT_APP_API_USER_LOGIN;
  const [user, setUser] = React.useContext(UserContext);
  const [fields, setFields] = React.useState({
    email: '',
    password: ''
  });
  const navigate = useNavigate();

  const handleChange = (event) => {
    setFields({
      ...fields,
      [event.target.name]: event.target.value
    });
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    const options = {
      method: 'POST',
      headers: {'Content-Type': 'application/json; charset=UTF-8'},
      body: JSON.stringify({login: fields.email, password: fields.password})
    };
    const res = await fetch(url, options);
    if (res.ok) {
      const {token} = await res.json();
      window.localStorage.setItem('token', token);
      setUser({token: token});
      navigate('/profile');
    } else {
      alert('Неверный логин или пароль!');
      navigate('/');
    }
  }

  return (
    <form onSubmit={onSubmit} className="login">
      <div className="login__title">
        <FGBButton
          className="fgb-button fgb-button_blue"
          startIcon={<FontAwesomeIcon icon={faRightToBracket} />}
        >
          Войти
        </FGBButton>
        <FGBButton
          className="fgb-button fgb-button_blue"
          startIcon={<FontAwesomeIcon icon={faUser} />}
        >
          Зарегистрироваться
        </FGBButton>
      </div>
      <label className="login__field">
        Логин:
        <input
          className="login__input"
          name="email"
          onChange={handleChange}
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
          onChange={handleChange}
          type="text"
          value={fields.password}
        />
      </label>
      <FGBButton className="fgb-button fgb-button_blue">Войти</FGBButton>
    </form>
  );
}

export default Login;