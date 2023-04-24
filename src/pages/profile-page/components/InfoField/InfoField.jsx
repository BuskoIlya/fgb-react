import React from 'react';
import { TextInput } from 'fgb-ui-components';
import { Label } from '../Label';

export const InfoField = ({ field, isEdit, label }) => {
  return (
    <>
      {
        !isEdit
          ?
          <Label title={label} value={field.value} />
          :
          <TextInput label={label} {...field} />
      }
    </>
  );
};