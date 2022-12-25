import React from 'react';
import DropDownLayout from '../../components/blocks/DropDownLayout';
import FGBCard from '../../components/FGBCard/FGBCard';
import './News.css';
import CardLayout from '../../components/blocks/CardLayout';

function News() {

  const newsApiUrl = process.env.REACT_APP_SERVER_URL
      + process.env.REACT_APP_API_NEWS;
  const imgPath = process.env.REACT_APP_IMG_NEWS_PATH;
  const [news, setNews] = React.useState([]);
  React.useEffect(() => {
    fetch(newsApiUrl)
        .then(response => response.json())
        .then(data => setNews(data))
        .catch(e =>  console.log(e));
  }, []);

  return (
    <section className="news">
      <p className="news__description">
        *Прошедшие турниры и другие события Го Беларуси по годам:
      </p>
      <div className="news__items">
        {
          news.map(year =>
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

export default News;