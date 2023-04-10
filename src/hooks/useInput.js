import { useEffect, useState } from 'react';
import { useValidation } from '../modules/validation';

export const useInput = (initialValue, validations) => {
  const [value, setValue] = useState(initialValue);
  const [status, setStatus] = useState('default');
  const [isValid, message] = useValidation(value, validations);
  const [focus, setFocus] = useState(false);

  const onChange = e => { setValue(e.target.value) };
  const onFocus = () => { setFocus(true) };

  useEffect(() => {
    if (!focus || !validations) {
      return;
    }
    if (isValid) {
      setStatus('valid');
    } else {
      setStatus('error');
    }
  }, [focus, isValid]);

  return { isValid, message, status, value, onChange, onFocus };
};