import React from 'react';
import CardLayout from '../../components/layouts/CardLayout';
import FGBCard from '../../components/FGBCard/FGBCard';

function Contacts() {

  const url = process.env.REACT_APP_SERVER_URL + process.env.REACT_APP_API_CONTACTS;
  const imgPath = process.env.REACT_APP_IMG_CONTACTS_PATH;
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    fetch(url)
        .then(response => response.json())
        .then(data => setData(data))
        .catch(e =>  console.log(e));
  }, []);

  return (
    <CardLayout>
      {
        data.map(item => {
          const secondDescription = (
            <>
              <p>{item.phone}</p>
              <p>{item.email}</p>
            </>
          );
          return  <FGBCard
            key={item.name}
            size={18}
            color="green"
            img={imgPath + item.img}
            title={item.name}
            shortDescription={item.sport_rank}
            description={item.description}
            secondDescription={secondDescription}
            />
          }
        )
      }
    </CardLayout>
  );
}

export default Contacts;