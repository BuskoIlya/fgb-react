import PropTypes from 'prop-types';
import classNames from 'classnames';
import FGBLink from '../FGBLink/FGBLink';
import './FGBCard.css';

const FGBCard = ({size, color, secondClass, img, toRef, title, date, address, author,
                  shortDescription, description, secondDescription}) => {

  const cardClass = classNames(
    'fgb-card',
    `fgb-card_size_${size}`,
    {[`fgb-card_${color}`]: color},
    secondClass
  );

  return (
    <article className={cardClass}>
      <FGBLink type="img" to={toRef}>
        <img className="fgb-card__img" src={img} alt={title}/>
      </FGBLink>
      <FGBLink type="title" to={toRef}>
        <h4 className="fgb-card__title">{title}</h4>
      </FGBLink>
      <div className="fgb-card__info">
        {date && <time>{date}</time>}
        {address && <address>{address}</address>}
        {author && <p className="fgb-card__author">{author}</p>}
        {shortDescription && <p className="fgb-card__short-description">{shortDescription}</p>}
        {description && <p className="fgb-card__description">{description}</p>}
        {secondDescription && <div className="fgb-card__second-description">{secondDescription}</div>}
      </div>
    </article>
  );
}

FGBCard.propTypes = {
  color: PropTypes.oneOf(['blue', 'green', 'red']),
  img: PropTypes.string.isRequired,
  secondClass: PropTypes.string,
  size: PropTypes.oneOf([18, 24, 32]).isRequired,
  title: PropTypes.string.isRequired
}

export default FGBCard;