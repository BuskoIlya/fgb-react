import React from 'react';

import { Button } from 'fgb-ui-components';
import { Text } from '../../components';

import { LoginTitle } from './components';
import { useLogin } from './hooks';

import css from './Login.module.css';

export const Login = () => {
  const [toggle, switchToggle, email, password, isValid, onSubmit] = useLogin();
  return (
    <div className={css.login}>
      <LoginTitle className={css.title} toggle={toggle} switchToggle={switchToggle} />
      <form onSubmit={onSubmit} className={css.form}>
        <div className={css.fields}>
          <Text label="Логин (почта)" name="email" {...email} />
          <Text label="Пароль" name="password" {...password} />
        </div>
        <Button color="blue" disabled={!isValid}>
          {toggle ? 'Войти' : 'Зарегистрироваться'}
        </Button>
      </form>
    </div>
  );
};