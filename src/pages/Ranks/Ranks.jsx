import React from 'react';
import { getRanks } from '../../api';
import { LayoutTitle } from 'fgb-ui-components';
import '../../css/table.css';

export const Ranks = () => {
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    getRanks().then(res => setData(res.data)).catch(e => console.log(e));
  }, []);

  return (
    <LayoutTitle title="Система разрядов в Го">
      {
        data?.length ?
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
                  <td data-label="Очки" className="table__cell">{item.scores}</td>
                  <td data-label="Разряды кю/дан" className="table__cell">{item.sport_rank}</td>
                </tr>
              )
            }
            </tbody>
          </table>
          : <div>Данные не удалось загрузить</div>
      }
    </LayoutTitle>
  );
}