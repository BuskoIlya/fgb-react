import { useEffect, useState } from 'react';
import { Validations } from '../types';

export const useValidation = (value, validations) => {
  const [isEmpty, setIsEmpty] = useState(false);
  const [isMinLength, setIsMinLength] = useState(false);
  const [isValid, setIsValid] = useState(true);
  const [message, setMessage] = useState('');

  useEffect(() => {
    for (const x in validations) {
      switch (x) {
        case Validations.MIN_LENGTH:
          value.length < validations[x] ? setIsMinLength(true) : setIsMinLength(false);
          setMessage(`Минимальная длина поля должна быть ${validations[x]} символов`);
          break;
        case Validations.REQUIRED:
          value ? setIsEmpty(false) : setIsEmpty(true);
          setMessage(`Поле является обязательным`);
          break;
        default:
          setMessage('');
          break;
      }
    }
  }, [value]);

  useEffect(() => {
    if (isEmpty || isMinLength) {
      setIsValid(false);
    } else {
      setIsValid(true);
    }
  }, [isEmpty, isMinLength]);

  return [isValid, message];
};