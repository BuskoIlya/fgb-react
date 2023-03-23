import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { Button } from 'fgb-ui-components';
import { useShow } from '../../hooks';
import css from './LayoutDropDown.module.css';

export const LayoutDropDown = ({ title, children }) => {
  const [isShow, setIsShow] = useShow(false);
  return (
    <div className={css.content}>
      <Button
        color="yellow"
        iconAfter={<FontAwesomeIcon icon={faChevronDown} />}
        onClick={setIsShow}
        className={css.title}
      >
        {title}
      </Button>
      { isShow && children }
    </div>
  );
};