import React from 'react';
import { Link, useParams } from 'react-router-dom';
import FGBTournamentTable from '../../components/FGBTournamentTable/FGBTournamentTable';
import TitleLayout from '../../components/layouts/TitleLayout';
import './Tournament.css';

function Tournament({type = ''}) {

  const cityPath = process.env.REACT_APP_IMG_LOGOS_PATH;
  const params = useParams();
  const url =
    process.env.REACT_APP_SERVER_URL
    + process.env.REACT_APP_API_TOURNAMENT
    + type + params.id;
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    fetch(url)
      .then(response => response.json())
      .then(data => setData(data))
      .catch(e =>  console.log(e));
  }, []);

  return (
    <TitleLayout title={data.title}>
      <div className="tournament">
        <header className="tournament__header">
          <img className="logo tournament__city-logo" src={cityPath + data.city_img} alt={data.short_address} />
          <div className="tournament__info">
            <time>{data.date}</time>
            <address>{data.long_address}</address>
            <p className="tournament__author">{data.author}</p>
          </div>
        </header>
        <>
          {
            data.tables?.map((table, index) =>
              <FGBTournamentTable key={index + 1} table={table} title={table.info.title}/>
            )
          }
        </>
      </div>
    </TitleLayout>
  );
}

export default Tournament;