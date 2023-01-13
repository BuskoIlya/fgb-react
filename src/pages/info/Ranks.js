import React from 'react';
import TitleLayout from '../../components/layouts/TitleLayout';
import '../../css/table.css';

function Ranks() {

  const url = process.env.REACT_APP_SERVER_URL + process.env.REACT_APP_API_RANKS;
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    fetch(url)
        .then(response => response.json())
        .then(data => setData(data))
        .catch(e =>  console.log(e));
  }, []);

  return (
    <TitleLayout title="Система разрядов в Го">
      <table className="table table_size-50">
        <thead>
        <tr>
          <th className="table__cell">Очки</th>
          <th className="table__cell">Разряды кю / дан</th>
        </tr>
        </thead>
        <tbody>
        {
          data.map((item, index) =>
            <tr key={index + 1}>
              <td className="table__cell">{item.scores}</td>
              <td className="table__cell">{item.sport_rank}</td>
            </tr>
          )
        }
        </tbody>
      </table>
    </TitleLayout>
  );
}

export default Ranks;