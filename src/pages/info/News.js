import React from 'react';
import CardLayout from '../../components/blocks/CardLayout';
import DropDownLayout from '../../components/blocks/DropDownLayout';
import FGBCard from '../../components/FGBCard/FGBCard';
import './News.css';

function News() {

  const urlTournaments = process.env.REACT_APP_SERVER_URL
      + process.env.REACT_APP_API_TOURNAMENTS_ALL;
  const imgPath = process.env.REACT_APP_IMG_NEWS_PATH;
  const [tournaments, setTournaments] = React.useState([]);
  React.useEffect(() => {
    fetch(urlTournaments)
        .then(response => response.json())
        .then(data => setTournaments(data))
        .catch(e =>  console.log(e));
  }, []);

  return (
    <section className="news">
      <p className="news__description">
        *Прошедшие турниры и другие события Го Беларуси по годам:
      </p>
      <div className="news__items">
        {
          tournaments.map(year =>
            <DropDownLayout key={year.year} title={year.year}>
              <CardLayout>
                {
                  year.items.map(item =>
                    <FGBCard
                      key={item.date}
                      size={32}
                      color={item.color}
                      img={imgPath + item.img}
                      toRef={`/tournament/${item.id}`}
                      title={item.title}
                      date={item.date}
                      address={item.short_address}
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

export default News;