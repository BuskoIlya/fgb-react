import React from 'react';

import '../../css/table.css';
import './Ranks.css';
import TitleLayout from '../../components/blocks/TitleLayout';

function Ranks() {

  const apiRanksUrl = process.env.REACT_APP_SERVER_URL
      + process.env.REACT_APP_API_RANKS;
  const [ranks, setRanks] = React.useState([]);
  React.useEffect(() => {
    fetch(apiRanksUrl)
        .then(response => response.json())
        .then(data => setRanks(data))
        .catch(e =>  console.log(e));
  }, []);

  return (
      <TitleLayout title = "Система разрядов в Го">
        <section className = "ranks">
          <table className = "table table_blue table_size-50">
            <thead>
            <tr>
              <th className = "table__cell">Очки</th>
              <th className = "table__cell">Разряды кю / дан</th>
            </tr>
            </thead>
            <tbody>
            {
              ranks.map((item, index) =>
                  <tr key = {index + 1}>
                    <td className = "table__cell">{item.scores}</td>
                    <td className = "table__cell">{item.rank}</td>
                  </tr>
              )
            }
            </tbody>
          </table>
        </section>
      </TitleLayout>
  );
}

export default Ranks;