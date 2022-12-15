import { Link } from 'react-router-dom';

import './NewsCard.css';

function NewsCard({ img, title, refto, date, address, author }) {
  return (
      <article className = "news-card">
        <Link className = "news-card__ref">
          <img className = "news-card__img" src = { img } alt = { title }/>
        </Link>
        <Link className = "news-card__ref">
          <h4 className = "news-card__title">{ title }</h4>
        </Link>
        <div className = "news-card__description">
          <time className = "news-card__date">{ date }</time>
          <address className = "news-card__address">{ address }</address>
          <p className = "news-card__author">{ author }</p>
        </div>
      </article>
  );
}

export default NewsCard;