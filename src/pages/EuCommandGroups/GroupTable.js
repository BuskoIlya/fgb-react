import React from 'react';
import { Link } from 'react-router-dom';
import { LinkInner } from 'fgb-ui-components';
import { TitleCountry } from 'fgb-ui-components';
import '../../css/table.css';
import './GroupTable.css';

function GroupTable({title, refto, data = []}) {

  const flagPath = process.env.REACT_APP_IMG_FLAG_MINI_PATH;

  return (
    <div className="group-table">
      {refto && <LinkInner Tag={Link} to={refto}>{title}</LinkInner>}
      <table className="table">
        <thead>
        <tr>
          <th className="table__cell" title="Место">№</th>
          <th className="table__cell">Команда</th>
          <th className="table__cell">Игры</th>
          <th className="table__cell" title="Выигранных партий">ВП</th>
          <th className="table__cell" title="Доска номер 1">Д. 1</th>
          <th className="table__cell" title="Доска номер 2">Д. 2</th>
          <th className="table__cell" title="Доска номер 3">Д. 3</th>
          <th className="table__cell" title="Доска номер 4">Д. 4</th>
          <th className="table__cell" title="Выигрыш">В</th>
          <th className="table__cell" title="Ничья">Н</th>
          <th className="table__cell" title="Поражение">П</th>
          <th className="table__cell">Очки</th>
        </tr>
        </thead>
        <tbody>
        {
          data.map((item, index) =>
            <tr key = {index + 1}>
              <td data-label="Место">{index + 1}</td>
              <td data-label="Команда" className="table__cell table__cell_left">
                <TitleCountry flagImg={flagPath + item.flag_country} text={item.country}/>
              </td>
              <td data-label="Игры">{item.games}</td>
              <td data-label="Выигранных партий">{item.bw}</td>
              <td data-label="Доска номер 1">{item.b1}</td>
              <td data-label="Доска номер 2">{item.b2}</td>
              <td data-label="Доска номер 3">{item.b3}</td>
              <td data-label="Доска номер 4">{item.b4}</td>
              <td data-label="Выигрыш">{item.w}</td>
              <td data-label="Ничья">{item.d}</td>
              <td data-label="Поражение">{item.l}</td>
              <td data-label="Очки">{item.score}</td>
            </tr>
          )
        }
        </tbody>
      </table>
    </div>
  )
}

export default GroupTable;