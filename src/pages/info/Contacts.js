import React from 'react';

import CardContact from '../../components/CardContact';

import './Contacts.css';

function Contacts() {

  const apiContactsUrl = process.env.REACT_APP_SERVER_ADDRESS
      + ':' + process.env.REACT_APP_SERVER_PORT
      + process.env.REACT_APP_API_CONTACTS;
  const imgPath = process.env.REACT_APP_IMG_CONTACTS_PATH;

  const [contacts, setContacts] = React.useState([]);

  React.useEffect(() => {
    fetch(apiContactsUrl)
        .then(response => response.json())
        .then(data => setContacts(data))
        .catch(e =>  console.log(e));
  }, []);

  return (
      <section className = "contacts">
        { contacts.map(item => (
            <CardContact key = { item.name }
                  photo = { imgPath + item.photo } name = { item.name } rank = { item.rank }
                  description = { item.description } phone = { item.phone } email = { item.email }/>
        )) }
      </section>
  );
}

export default Contacts;