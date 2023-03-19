import React from 'react';
import { getPlayers } from '../../api';
import { LayoutTitle } from 'fgb-ui-components';
import '../../css/table.css';

export const Players = () => {
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    getPlayers().then(res => setData(res.data)).catch(e => console.log(e));
  }, []);

  return (
    <LayoutTitle title="Игроки Беларуси">
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
    </LayoutTitle>
  );
}