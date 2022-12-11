import './CardContact.css';

function CardContact({ photo, name, rank, description, phone, email }) {
  return (
      <article className = "card-contact">
        <img className = "card-contact__photo" src = { photo } alt = { name }/>
        <h4 className = "card-contact__name">{ name }</h4>
        <div className = "card-contact__info">
          <p className = "card-contact__rank">{ rank }</p>
          <p className = "card-contact__description">{ description }</p>
          <p className = "card-contact__phone">{ phone }</p>
          <p className = "card-contact__email">{ email }</p>
        </div>
      </article>
  );
}

export default CardContact;