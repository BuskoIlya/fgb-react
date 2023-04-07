import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightToBracket, faUser } from '@fortawesome/free-solid-svg-icons';

import { Button } from 'fgb-ui-components';
import { UserContext } from '../../store';
import css from './Login.module.css';

export const Login = () => {
  const { userStore } = useContext(UserContext);
  const [isLogin, setIsLogin] = useState(true);
  const [fields, setFields] = useState({ email: '', password: '' });
  const navigate = useNavigate();

  const onChangeFieldValue = (event) => {
    setFields({
      ...fields,
      [event.target.name]: event.target.value
    });
  };

  const onLoginFalse = (event) => {
    event.preventDefault();
    setIsLogin(false);
  }

  const onLoginTrue = (event) => {
    event.preventDefault();
    setIsLogin(true);
  }

  const onSubmit = async (e) => {
    e.preventDefault();
    if (isLogin) {
      await userStore.login(fields.email, fields.password);
    } else {
      await userStore.register(fields.email, fields.password);
    }
    if (userStore.isAuth) {
      navigate(`/profile`);
    } else {
      navigate('/');
    }
  }

  return (
    <form onSubmit={onSubmit} className={css.form}>
      <div className={css.title}>
        <Button
          color="blue"
          isActive={isLogin}
          iconBefore={<FontAwesomeIcon icon={faRightToBracket} />}
          onClick={onLoginTrue}
        >
          Войти
        </Button>
        <Button
          color="blue"
          isActive={!isLogin}
          iconBefore={<FontAwesomeIcon icon={faUser} />}
          onClick={onLoginFalse}
        >
          Зарегистрироваться
        </Button>
      </div>
      <label className={css.field}>
        Логин (почта):
        <input
          className={css.input}
          name="email"
          onChange={onChangeFieldValue}
          placeholder="Почта"
          type="text"
          value={fields.email}
        />
      </label>
      <label className={css.field}>
        Пароль:
        <input
          className={css.input}
          name="password"
          onChange={onChangeFieldValue}
          type="password"
          value={fields.password}
        />
      </label>
      <Button color="blue">{isLogin ? 'Войти': 'Зарегистрироваться'}</Button>
    </form>
  );
};