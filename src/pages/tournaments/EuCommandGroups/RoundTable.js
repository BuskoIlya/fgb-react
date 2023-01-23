import React from 'react';
import FGBCountry from '../../../components/FGBCountry/FGBCountry';
import '../../../css/table.css';
import './RoundTable.css';

function RoundTable({name, date, games = []}) {

  const flagPath = process.env.REACT_APP_IMG_FLAG_MINI_PATH;

  return (
    <table className="table table_blue round-table">
      <caption className="round-table__caption">
        <span className="round-table__name">{name}</span>
        <span className="round-table__date">{date}</span>
      </caption>
      <thead>
      <tr>
        <th className="table__cell">Команда 1</th>
        <th className="table__cell">Команда 2</th>
        <th className="table__cell">Результат</th>
      </tr>
      </thead>
      <tbody>
      {
        games.map((item, index) =>
          <tr key={index + 1}>
            <td data-label="Команда 1" className="table__cell table__cell_left">
              <FGBCountry img={flagPath + item.cmd_1_flag} text={item.cmd_1}/>
            </td>
            <td data-label="Команда 2" className="table__cell table__cell_left">
              <FGBCountry img={flagPath + item.cmd_2_flag} text={item.cmd_2}/>
            </td>
            <td data-label="Результат" className="table__cell">{item.result}</td>
          </tr>
        )
      }
      </tbody>
    </table>
  )
}

export default RoundTable;