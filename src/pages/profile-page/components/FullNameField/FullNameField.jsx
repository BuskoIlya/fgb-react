import React from 'react';
import { Text } from '../../../../components';
import css from './FullNameField.module.css';

export const FullNameField = ({ isEdit, family, name, father }) => {
  const fullName = [family.value, name.value, father.value].join(' ');
  return (
    <>
      {
        !isEdit ? <p className={css.text}>{fullName}</p> : (
          <div className={css.container}>
            <Text {...family} />
            <Text {...name} />
            <Text {...father} />
          </div>
        )
      }
    </>
  );
};