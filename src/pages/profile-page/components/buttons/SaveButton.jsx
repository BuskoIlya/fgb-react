import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFloppyDisk } from '@fortawesome/free-regular-svg-icons';

import { Button } from 'fgb-ui-components';

export const SaveButton = ({ className, isActive }) => {
  return (
    <Button
      className={className}
      color="green"
      disabled={!isActive}
      iconBefore={<FontAwesomeIcon icon={faFloppyDisk}/>}
    >
      Сохранить
    </Button>
  );
};