import React from 'react';

import { Button, TextInput } from 'fgb-ui-components';

import { LoginTitle } from './components';
import { useLogin } from './hooks';

import css from './Login.module.css';

export const Login = () => {
  const { toggle, switchToggle, email, password, isValid, onSubmit } = useLogin();
  return (
    <div className={css.wrapper}>
      <LoginTitle className={css.title} toggle={toggle} switchToggle={switchToggle} />
      <form onSubmit={onSubmit} className={css.form}>
        <div className={css.fields}>
          <TextInput variant="vertical" label="Логин (почта) :" name="email" {...email} />
          <TextInput variant="vertical" label="Пароль :" name="password" {...password} />
        </div>
        <Button color="blue" disabled={!isValid}>
          {toggle ? 'Войти' : 'Зарегистрироваться'}
        </Button>
      </form>
    </div>
  );
};