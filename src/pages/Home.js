import React from "react";
import CardLayout from '../components/blocks/CardLayout';
import FGBCard from '../components/FGBCard/FGBCard';

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
    <CardLayout>
      {
        homeTournaments.map(item =>
          <FGBCard
            key={item.date}
            size={32}
            color="green"
            img={imgPath + item.photo}
            toRef={item.ref}
            title={item.title}
            date={item.date}
            address={item.address}
            author={item.author}
          />
        )
      }
    </CardLayout>
  );
}

export default Home;