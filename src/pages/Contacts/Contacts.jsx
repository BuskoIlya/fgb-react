import React from 'react';
import { ContactsPhoneEmail } from './ContactsPhoneEmail';
import { Card, LayoutCardWithNoData } from '../../components';

import { getContacts } from '../../api';
import { useStaticPageData } from '../../hooks';

const imgPath = process.env.REACT_APP_IMG_CONTACTS_PATH;

export const Contacts = () => {
  const [data, isLoading, error] = useStaticPageData(getContacts);
  return (
    <LayoutCardWithNoData error={error} isLoading={isLoading}>
      {
        data?.map(x =>
          <Card key={x.fullName}
            color="green"
            description={x.description}
            img={imgPath + x.img}
            secondDescription={<ContactsPhoneEmail phone={x.phone} email={x.email} />}
            shortDescription={x.sportRank}
            size={18}
            title={x.fullName}
          />
        )
      }
    </LayoutCardWithNoData>
  );
};