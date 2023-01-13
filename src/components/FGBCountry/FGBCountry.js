import './FGBCountry.css';

function FGBCountry({ img, imgTitle, text }) {
  return (
      <div className="country">
        <img className="country__img" src={img} alt="" title={imgTitle} />
        {text && <span className="country__text">{text}</span>}
      </div>
  );
}

export default FGBCountry;