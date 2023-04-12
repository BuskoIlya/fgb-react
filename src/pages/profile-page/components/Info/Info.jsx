import React from 'react';

import { EditButton, SaveButton } from '../buttons';
import { InfoField } from '../InfoField';

import css from './Info.module.css';

import { useInfo } from '../../hooks';
import { FullNameField } from '../FullNameField';

export const Info = ({ className }) => {

  const { edit, family, name, father, email, password, city, onSubmit } = useInfo();
  const fullName = { family, name, father };

  return (
    <div className={`${css.wrapper} ${className}`}>
      <EditButton className={css.menuButton} {...edit} />
      <form className={css.form} onSubmit={onSubmit}>
        <FullNameField isEdit={edit.isEdit} {...fullName} />
        <InfoField field={email} isEdit={edit.isEdit} label="Почта:" />
        <InfoField field={password} isEdit={edit.isEdit} label="Пароль:" />
        <InfoField field={city} isEdit={edit.isEdit} label="Город:" />
        <SaveButton className={css.menuButton} isActive={edit.isEdit} />
      </form>
    </div>
  );
};