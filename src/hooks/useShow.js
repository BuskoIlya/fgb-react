import { useState } from 'react';

export const useShow = (value) => {
  const [isShow, setIsShow] = useState(value);
  const handleShow = () => {setIsShow(!isShow)};
  return [isShow, handleShow];
};