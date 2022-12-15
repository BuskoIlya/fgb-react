import './ContactCard.css';

function ContactCard({ photo, name, rank, description, phone, email }) {
  return (
      <article className = "contact-card">
        <img className = "contact-card__photo" src = { photo } alt = { name }/>
        <h4 className = "contact-card__name">{ name }</h4>
        <div className = "contact-card__info">
          <p className = "contact-card__rank">{ rank }</p>
          <p className = "contact-card__description">{ description }</p>
          <p className = "contact-card__phone">{ phone }</p>
          <p className = "contact-card__email">{ email }</p>
        </div>
      </article>
  );
}

export default ContactCard;