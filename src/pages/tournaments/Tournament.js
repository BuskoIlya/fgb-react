import React from 'react';
import { Link, useParams } from 'react-router-dom';
import TitleLayout from '../../components/blocks/TitleLayout';
import './Tournament.css';
import FGBTournamentTable from '../../components/FGBTournamentTable/FGBTournamentTable';

function Tournament() {
  const cityPath = process.env.REACT_APP_IMG_LOGO_PATH;
  const params = useParams();
  const url =
    process.env.REACT_APP_SERVER_URL
    + process.env.REACT_APP_API_TOURNAMENT
    + params.id;
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
          <img className="logo tournament__city-logo" src={cityPath + data.placeImg} alt={data.place} />
          <div className="tournament__info">
            <time>{data.date}</time>
            <address>{data.address}</address>
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