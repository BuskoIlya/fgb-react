import React from 'react';
import CardLayout from '../../components/layouts/CardLayout';
import { LayoutDropDown } from '../../components';
import FGBCard from '../../components/FGBCard/FGBCard';
import './ByTournaments.css';

function ByTournaments() {

  const url = process.env.REACT_APP_SERVER_URL + process.env.REACT_APP_API_TOURNAMENTS;
  const imgPath = process.env.REACT_APP_IMG_NEWS_PATH;
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    fetch(url)
        .then(response => response.json())
        .then(data => setData(data))
        .catch(e =>  console.log(e));
  }, []);

  return (
    <section className="by-tournaments">
      <p className="by-tournaments__description">
        *Прошедшие турниры с участием наших игроков по годам:
      </p>
      <div className="by-tournaments__items">
        {
          data.map(year =>
            <LayoutDropDown key={year.year} title={year.year}>
              <CardLayout>
                {
                  year.items.map(item =>
                    <FGBCard
                      key={item.date}
                      size={32}
                      color={item.color}
                      img={imgPath + item.img}
                      toRef={item.toref ? `/tournament/${item.toref}` : `/tournament/${item.id}`}
                      title={item.title}
                      date={item.date}
                      address={item.short_address}
                      author={item.author}
                    />
                  )
                }
              </CardLayout>
            </LayoutDropDown>
          )
        }
      </div>
    </section>
  );
}

export default ByTournaments;