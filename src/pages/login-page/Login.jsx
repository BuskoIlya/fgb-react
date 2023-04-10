import React from 'react';

import { Button } from 'fgb-ui-components';
import { Text } from '../../components';

import { LoginTitle } from './components';
import { useLogin } from './hooks';

import css from './Login.module.css';

export const Login = () => {
  const [toggle, switchToggle, email, password, isValid, onSubmit] = useLogin();
  const { isValid: isValidEmail , ...emailData } = email;
  const { isValid: isValidPassword , ...passwordData } = password;
  return (
    <div className={css.wrapper}>
      <LoginTitle className={css.title} toggle={toggle} switchToggle={switchToggle} />
      <form onSubmit={onSubmit} className={css.form}>
        <div className={css.fields}>
          <Text label="Логин (почта)" name="email" {...emailData} />
          <Text label="Пароль" name="password" {...passwordData} />
        </div>
        <Button color="blue" disabled={!isValid}>
          {toggle ? 'Войти' : 'Зарегистрироваться'}
        </Button>
      </form>
    </div>
  );
};