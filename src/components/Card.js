import { Link } from 'react-router-dom';

import './Card.css';

function Card({ photo, title, refto, date, address, author }) {
  return (
      <article className = "card">
        <Link className = "card__ref" to = { refto }>
          <img className = "card__photo" src = { photo } alt = { title }/>
        </Link>
        <Link className = "card__ref" to = { refto }>
          <h4 className = "card__title">{ title }</h4>
        </Link>
        <div className = "card__description">
          <time className = "card__date">{ date }</time>
          <address className = "card__address">{ address }</address>
          <p className = "card__author">{ author }</p>
        </div>
      </article>
  );
}

export default Card;