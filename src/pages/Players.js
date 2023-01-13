import React from 'react';
import TitleLayout from '../components/layouts/TitleLayout';
import '../css/table.css';

function Players() {

  const url = process.env.REACT_APP_SERVER_URL + process.env.REACT_APP_API_PLAYERS;
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    fetch(url)
        .then(response => response.json())
        .then(data => setData(data))
        .catch(e =>  console.log(e));
  }, []);

  return (
    <TitleLayout title="Игроки Беларуси">
      <table className="table">
        <thead>
        <tr>
          <th className="table__cell">№</th>
          <th className="table__cell">ФИО</th>
          <th className="table__cell">Город</th>
          <th className="table__cell">Разряд</th>
          <th className="table__cell">Рейтинг</th>
        </tr>
        </thead>
        <tbody>
        {
          data.map((item, index) =>
            <tr key = {index + 1}>
              <td className="table__cell">{index + 1}</td>
              <td className="table__cell table__cell_left">{item.fio}</td>
              <td className="table__cell">{item.city}</td>
              <td className="table__cell">{item.sport_rank}</td>
              <td className="table__cell">{item.score}</td>
            </tr>
          )
        }
        </tbody>
      </table>
    </TitleLayout>
  );
}

export default Players;