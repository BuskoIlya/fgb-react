import React from 'react';
import CardLayout from '../../components/layouts/CardLayout';
import DropDownLayout from '../../components/layouts/DropDownLayout';
import FGBCard from '../../components/FGBCard/FGBCard';
import './News.css';

function News() {

  const imgNewsPath = process.env.REACT_APP_IMG_NEWS_PATH;
  const url = process.env.REACT_APP_SERVER_URL + process.env.REACT_APP_API_INFO_NEWS;
  const [data, setData] = React.useState([]);
  React.useEffect(() => {
    fetch(url)
      .then(response => response.json())
      .then(data => setData(data))
      .catch(e => console.log(e));
  });

  return (
    <section className="news">
      <p className="news__description">
        *Прошедшие турниры и другие события Го Беларуси по годам:
      </p>
      <div className="news__items">
        {
          data.map(year =>
            <DropDownLayout key={year.year} title={year.year}>
              <CardLayout>
                {
                  year.items.map(item =>
                    <FGBCard
                      key={item.date}
                      size={32}
                      color={item.color}
                      img={imgNewsPath + item.img}
                      toRef={item.ref}
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