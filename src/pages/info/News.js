import React from 'react';

import DropDownPanel from '../../components/DropDownPanel';
import NewsCard from '../../components/NewsCard';

import './News.css';

function News() {

  const apiNewsUrl = process.env.REACT_APP_SERVER_ADDRESS
      + ':' + process.env.REACT_APP_SERVER_PORT
      + process.env.REACT_APP_API_NEWS;
  const imgPath = process.env.REACT_APP_IMG_NEWS_PATH;

  const [news, setNews] = React.useState([]);

  React.useEffect(() => {
    fetch(apiNewsUrl)
        .then(response => response.json())
        .then(data => setNews(data))
        .catch(e =>  console.log(e));
  }, []);

  return (
      <section className = "news">
        <p className = "news__description">*Прошедшие турниры и все остальные события Го Беларуси по годам:</p>
        <div className = "news__items">{
          news.map(year =>
              <DropDownPanel key = {year.year} title = {year.year}>
                {
                  year.items.map(item => {
                    let result = [];
                    for (let i = 0; i < 10; i++) {
                      result.push(
                          <NewsCard key = {item.date}
                                    img = {imgPath + item.photo} title = {item.title} refto = {item.ref}
                                    date = {item.date} address = {item.address} author = {item.author}/>);
                    }
                    return result;
                  })
                }
              </DropDownPanel>
          )
        }
        </div>
      </section>
  );
}

export default News;