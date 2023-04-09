import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../../store';
import { useInput, useToggle } from '../../../hooks';
import { Validations } from '../../../modules/validation';

export const useLogin = () => {
  const { userStore } = useContext(UserContext);
  const [toggle, switchToggle] = useToggle(true);
  const email = useInput('');
  const password = useInput('', new Validations().setMinLength(6).isRequired());
  const navigate = useNavigate();
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    setIsValid(email.isValid && password.isValid);
  }, [email.isValid, password.isValid]);

  const onSubmit = async e => {
    e.preventDefault();
    if (toggle) {
      await userStore.login(email.value, password.value);
    } else {
      await userStore.register(email.value, password.value);
    }
    if (userStore.isAuth) {
      navigate(`/profile`);
    } else {
      navigate('/');
    }
  };

  return [toggle, switchToggle, email, password, isValid, onSubmit];
};