import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare } from '@fortawesome/free-regular-svg-icons';
import { faCancel } from '@fortawesome/free-solid-svg-icons';

import { Button } from 'fgb-ui-components';

export const EditButton = ({ className, isEdit, switchEdit }) => {
  return (
    <Button
      className={className}
      color={!isEdit ? 'blue' : 'red'}
      iconBefore={
        !isEdit ? <FontAwesomeIcon icon={faPenToSquare}/> : (
          <FontAwesomeIcon icon={faCancel}/>
        )
      }
      onClick={switchEdit}
    >
      {!isEdit ? 'Изменить' : 'Отменить'}
    </Button>
  );
};