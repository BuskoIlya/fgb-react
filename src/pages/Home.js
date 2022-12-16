import React from "react";

import NewsCard from "../components/NewsCard";

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
            <NewsCard key = { item.date }
                      img = { imgPath + item.photo } title = { item.title } refto = { item.ref }
                      date = { item.date } address = { item.address } author = { item.author }/>
          )
        }
      </section>
  );
}

export default Home;