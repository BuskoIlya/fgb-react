import React from 'react';
import FGBCard from '../../components/FGBCard/FGBCard';
import './Contacts.css';

function Contacts() {

  const apiContactsUrl = process.env.REACT_APP_SERVER_URL
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
    <section className="contacts">
      {
        contacts.map(item => {
          const secondDescription = (
            <>
              <p>{item.phone}</p>
              <p>{item.email}</p>
            </>
          );
          return  <FGBCard
              key={item.name}
              size={18}
              img={imgPath + item.photo}
              title={item.name}
              shortDescription={item.rank}
              description={item.description}
              secondDescription={secondDescription}
            />
          }
        )
      }
    </section>
  );
}

export default Contacts;