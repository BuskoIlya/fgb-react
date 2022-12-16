import React from 'react';

import '../css/table.css';
import './Players.css';

function Players() {

  const apiPlayers = process.env.REACT_APP_SERVER_URL
      + process.env.REACT_APP_API_PLAYERS;
  const [players, setPlayers] = React.useState([]);
  React.useEffect(() => {
    fetch(apiPlayers)
        .then(response => response.json())
        .then(data => setPlayers(data))
        .catch(e =>  console.log(e));
  }, []);

  return (
      <section className = "players">
        <table className = "table-blue players__table">
          <thead>
          <tr>
            <th>№</th>
            <th>ФИО</th>
            <th>Город</th>
            <th>Разряд</th>
            <th>Рейтинг</th>
          </tr>
          </thead>
          <tbody>
          {
            players.map((item, index) =>
              <tr key = { index + 1 }>
                <td>{ index + 1 }</td>
                <td className = "players__col_left-align">{ item.name }</td>
                <td>{ item.city }</td>
                <td>{ item.rank }</td>
                <td>{ item.score }</td>
              </tr>
            )
          }
          </tbody>
        </table>
      </section>
  );
}

export default Players;