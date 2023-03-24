import React from 'react';
import { TitleCountry } from 'fgb-ui-components';
import '../../css/table.css';
import css from './RoundTable.module.css';

const flagPath = process.env.REACT_APP_IMG_FLAG_MINI_PATH;

export const RoundTable = ({name, date, games = []}) => {
  return (
    <table className={`table table_blue ${css.roundTable}`}>
      <caption className={css.caption}>
        <span className={css.name}>{name}</span>
        <span className={css.date}>{date}</span>
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
        games.map((x, i) =>
          <tr key={i + 1}>
            <td data-label="Команда 1" className="table__cell table__cell_left">
              <TitleCountry img={flagPath + x.cmd_1_flag} value={x.cmd_1}/>
            </td>
            <td data-label="Команда 2" className="table__cell table__cell_left">
              <TitleCountry img={flagPath + x.cmd_2_flag} value={x.cmd_2}/>
            </td>
            <td data-label="Результат" className="table__cell">{x.result}</td>
          </tr>
        )
      }
      </tbody>
    </table>
  );
};