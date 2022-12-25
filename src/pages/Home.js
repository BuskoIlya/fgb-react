import React from "react";
import FGBCard from '../components/FGBCard/FGBCard';
import "./Home.css";

function Home() {

  const homeTournamentsApiUrl = process.env.REACT_APP_SERVER_URL
    + process.env.REACT_APP_API_HOME_TOURNAMENTS;
  const imgPath = process.env.REACT_APP_IMG_NEWS_PATH;
  const [homeTournaments, setHomeTournaments] = React.useState([]);
  React.useEffect(() => {
    fetch(homeTournamentsApiUrl)
        .then(response => response.json())
        .then(data => setHomeTournaments(data))
        .catch(e =>  console.log(e));
  }, []);

  return (
    <section className = "home">
      {
        homeTournaments.map(item =>
          <FGBCard
            key={item.date}
            size={32}
            color="green"
            img={imgPath + item.photo}
            title={item.title}
            date={item.date}
            address={item.address}
            author={item.author}
          />
        )
      }
    </section>
  );
}

export default Home;