import { useEffect, useState } from 'react';
import { useInput } from './useInput';
import { useValidation } from '../modules/validation';

export const useValidatedInput = (initialValue, validations) => {
  const input = useInput(initialValue);

  const [status, setStatus] = useState('default');
  const [isValid, message] = useValidation(input.value, validations);
  const [focus, setFocus] = useState(false);
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

  return { isValid, message, status, onFocus, ...input };
};