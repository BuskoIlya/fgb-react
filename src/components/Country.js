import './Country.css';

function Country({ img, imgTitle, text }) {
  return (
      <div className = "country">
        <img className = "country__img" src = { img } alt = "" title = { imgTitle }/>
        <span className="country__text">{ text }</span>
      </div>
  );
}

export default Country;