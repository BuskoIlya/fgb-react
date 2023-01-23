import './FGBCountry.css';

function FGBCountry({ img, imgTitle, text }) {
  const countryClass = text ? 'country' : 'country country__empty-text';
  return (
      <div className={countryClass}>
        <img className="country__img" src={img} alt="" title={imgTitle} />
        {text && <span>{text}</span>}
      </div>
  );
}

export default FGBCountry;