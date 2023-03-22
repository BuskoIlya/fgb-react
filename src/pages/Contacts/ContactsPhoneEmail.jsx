import React from 'react';

export const ContactsPhoneEmail = ({ phone, email }) => {
  return (
    <>
      <p>{phone}</p>
      <p>{email}</p>
    </>
  );
};