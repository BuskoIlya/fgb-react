import React from "react";

import NewsCard from "../components/NewsCard";

import "./Home.css";

function Home() {

  const apiTournamentsUrl = process.env.REACT_APP_SERVER_ADDRESS
    + ':' + process.env.REACT_APP_SERVER_PORT
    + process.env.REACT_APP_API_TOURNAMENTS;
  const imgPath = process.env.REACT_APP_IMG_NEWS_PATH;

  const [tournaments, setTournaments] = React.useState([]);

  React.useEffect(() => {
    fetch(apiTournamentsUrl)
        .then(response => response.json())
        .then(data => setTournaments(data))
        .catch(e =>  console.log(e));
  }, []);

  return (
      <section className = "home">
        { tournaments.map(item => (
            <NewsCard key = { item.date }
                      img = { imgPath + item.photo } title = { item.title } refto = { item.ref }
                      date = { item.date } address = { item.address } author = { item.author }/>
        )) }
      </section>
  );
}

export default Home;