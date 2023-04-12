import React from 'react';
import { Label } from '../Label';
import { Text } from '../../../../components';

export const InfoField = ({ field, isEdit, label }) => {
  return (
    <>
      {
        !isEdit
          ?
          <Label title={label} value={field.value} />
          :
          <Text label={label} {...field} />
      }
    </>
  );
};