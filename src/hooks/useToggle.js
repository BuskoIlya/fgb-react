import { useState } from 'react';

export const useToggle = (initialValue) => {
  const [toggle, setToggle] = useState(initialValue);
  const switchToggle = () => { setToggle(prevState => !prevState) };
  return [toggle, switchToggle];
};