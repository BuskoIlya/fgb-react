import React from 'react';
import DropDownLayout from '../../components/blocks/DropDownLayout';
import FGBCard from '../../components/FGBCard/FGBCard';
import './BelarusTournaments.css';
import CardLayout from '../../components/blocks/CardLayout';

function BelarusTournaments() {

  const apiTournamentsUrl = process.env.REACT_APP_SERVER_URL
      + process.env.REACT_APP_API_NEWS;
  const imgPath = process.env.REACT_APP_IMG_NEWS_PATH;
  const [tournaments, setTournaments] = React.useState([]);
  React.useEffect(() => {
    fetch(apiTournamentsUrl)
        .then(response => response.json())
        .then(data => setTournaments(data))
        .catch(e =>  console.log(e));
  }, []);

  return (
    <section className="by-tournaments">
      <p className="by-tournaments__description">
        *Прошедшие турниры с участием наших игроков по годам:
      </p>
      <div className="by-tournaments__items">
        {
          tournaments.map(year =>
            <DropDownLayout key={year.year} title={year.year}>
              <CardLayout>
                {
                  year.items.map(item =>
                    <FGBCard
                      key={item.date}
                      size={32}
                      color={'green'}
                      img={imgPath + item.photo}
                      title={item.title}
                      date={item.date}
                      address={item.address}
                      author={item.author}
                    />
                  )
                }
              </CardLayout>
            </DropDownLayout>
          )
        }
      </div>
    </section>
  );
}

export default BelarusTournaments;