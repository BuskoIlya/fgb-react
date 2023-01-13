import React from "react";
import CardLayout from '../components/layouts/CardLayout';
import FGBCard from '../components/FGBCard/FGBCard';

function Home() {

  const url =
    process.env.REACT_APP_SERVER_URL + process.env.REACT_APP_API_TOURNAMENTS_BY_YEAR + '2022';
  const imgPath = process.env.REACT_APP_IMG_NEWS_PATH;
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    fetch(url)
        .then(response => response.json())
        .then(data => setData(data))
        .catch(e =>  console.log(e));
  }, []);

  return (
    <CardLayout>
      {
        data.map(item =>
          <FGBCard
            key={item.date}
            size={32}
            color={item.color}
            img={imgPath + item.img}
            toRef={`/tournament/${item.id}`}
            title={item.title}
            date={item.date}
            address={item.short_address}
            author={item.author}
          />
        )
      }
    </CardLayout>
  );
}

export default Home;