import { Link } from 'react-router-dom';

import './BookCard.css';

function BookCard({ img, title, refto, category }) {

  const imgPath = process.env.REACT_APP_IMG_BOOKS_PATH + img;

  return (
      <article className = "book-card">
        <Link className = "book-card__ref">
          <img className = "book-card__img" src = { imgPath } alt = { title }/>
        </Link>
        <Link className = "book-card__ref">
          <h4 className = "book-card__title">{ title }</h4>
        </Link>
        <p className = "book-card__category">{ category }</p>
      </article>
  );
}

export default BookCard;