import React from 'react';
import { useNavigate } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightToBracket, faUser } from '@fortawesome/free-solid-svg-icons';

import { Button } from 'fgb-ui-components';
import UserContext from '../../user/UserContext';
import './Login.css';

function Login() {

  const [user, setUser] = React.useContext(UserContext);
  const [isLogin, setIsLogin] = React.useState(true);
  const [fields, setFields] = React.useState({ email: '', password: '' });
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
      body: JSON.stringify({ email: fields.email, password: fields.password }),
      credentials: "include",
      headers: { 'Content-Type': 'application/json; charset=UTF-8' }
    };
    let url = process.env.REACT_APP_SERVER_URL;
    url += isLogin ?
      process.env.REACT_APP_API_USER_LOGIN :
      process.env.REACT_APP_API_USER_REGISTER;

    await fetch(url, options)
      .then(response => response.json())
      .then(data => {
        const { fullName, img, letter, token } = data;
        window.localStorage.setItem('token', token);
        setUser({ fullName, img, letter, token });
        navigate(`/profile`);
      })
      .catch(e => {
        console.log(e);
        alert('Неверный логин или пароль!');
        navigate('/');
      });
  }

  return (
    <form onSubmit={onSubmit} className="login">
      <div className="login__title">
        <Button
          active={isLogin}
          color="blue"
          onClick={(e) => {e.preventDefault(); setIsLogin(true);}}
          startIcon={<FontAwesomeIcon icon={faRightToBracket} />}
        >
          Войти
        </Button>
        <Button
          active={!isLogin}
          color="blue"
          onClick={(e) => {e.preventDefault(); setIsLogin(false);}}
          startIcon={<FontAwesomeIcon icon={faUser} />}
        >
          Зарегистрироваться
        </Button>
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
      <Button color="blue">{isLogin ? 'Войти': 'Зарегистрироваться'}</Button>
    </form>
  );
}

export default Login;