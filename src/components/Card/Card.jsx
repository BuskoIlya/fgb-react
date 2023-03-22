import React from 'react';
import { CardTitle } from 'fgb-ui-components';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import css from './Card.module.css';

export const Card = ({
  address, author, date, description, color, img, title, toRef,
  secondClass, size, secondDescription, shortDescription
}) => {

  const classes = [
    css.content,
    css[`size_${size}`],
    ...(color ? [css[color]] : []),
    secondClass
  ].join(' ');

  return (
    <article className={classes}>
      <Link to={toRef}>
        <img className={css.img} src={img} alt={title}/>
      </Link>
      <CardTitle color={color} Tag={Link} to={toRef}>{title}</CardTitle>
      <div className={css.info}>
        {date && <time>{date}</time>}
        {address && <address>{address}</address>}
        {author && <p className={css.author}>{author}</p>}
        {shortDescription && <p>{shortDescription}</p>}
        {description && <p>{description}</p>}
        {secondDescription && <div className={css.secondDescription}>{secondDescription}</div>}
      </div>
    </article>
  );
};

Card.propTypes = {
  color: PropTypes.oneOf(['blue', 'green', 'red']),
  img: PropTypes.string.isRequired,
  secondClass: PropTypes.string,
  size: PropTypes.oneOf([18, 24, 32]).isRequired,
  title: PropTypes.string.isRequired
};