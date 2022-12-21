import { Link } from 'react-router-dom';

import './StoryCard.css';

function StoryCard({ img, title, refto, author, keyWords }) {

  const imgPath = process.env.REACT_APP_IMG_STORIES_PATH + img;

  return (
      <article className = "story-card">
        <Link className = "story-card__ref">
          <img className = "story-card__img" src = { imgPath } alt = { title }/>
        </Link>
        <Link className = "story-card__ref">
          <h4 className = "story-card__title">{ title }</h4>
        </Link>
        <p className="story-card__author">{ author }</p>
        <div className="story-card__description">
          {
            keyWords.map(item => <p className = "story-card__key-word" key = { item }>{ item }</p>)
          }
        </div>
      </article>
  );
}

export default StoryCard;