import React from 'react';

import '../../css/table.css';
import './Ranks.css';

function Ranks() {

  const apiRanksUrl = process.env.REACT_APP_SERVER_ADDRESS
      + ':' + process.env.REACT_APP_SERVER_PORT
      + process.env.REACT_APP_API_RANKS;

  const [ranks, setRanks] = React.useState([]);

  React.useEffect(() => {
    fetch(apiRanksUrl)
        .then(response => response.json())
        .then(data => setRanks(data))
        .catch(e =>  console.log(e));
  }, []);

  return (
      <section className = "ranks">
        <table className = "table-blue">
          <thead>
          <tr>
            <th>Очки</th>
            <th>Разряды кю / дан</th>
          </tr>
          </thead>
          <tbody>
          { ranks.map((item, index) => (
              <tr key = { index + 1 }>
                <td>{ item.scores }</td>
                <td>{ item.rank }</td>
              </tr>
          )) }
          </tbody>
        </table>
      </section>
  );
}

export default Ranks;