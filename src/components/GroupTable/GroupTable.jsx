import React from 'react';
import { Link } from 'react-router-dom';
import { LinkInner, TitleCountry } from 'fgb-ui-components';
import '../../css/table.css';
import css from './GroupTable.module.css';

const flagPath = process.env.REACT_APP_IMG_FLAG_MINI_PATH;

export const GroupTable = ({title, refto, data = []}) => {
  return (
    <div className={css.content}>
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
          data.map((x, i) =>
            <tr key = {i + 1}>
              <td data-label="Место">{i + 1}</td>
              <td data-label="Команда" className="table__cell table__cell_left">
                <TitleCountry img={flagPath + x.flag_country} value={x.country}/>
              </td>
              <td data-label="Игры">{x.games}</td>
              <td data-label="Выигранных партий">{x.bw}</td>
              <td data-label="Доска номер 1">{x.b1}</td>
              <td data-label="Доска номер 2">{x.b2}</td>
              <td data-label="Доска номер 3">{x.b3}</td>
              <td data-label="Доска номер 4">{x.b4}</td>
              <td data-label="Выигрыш">{x.w}</td>
              <td data-label="Ничья">{x.d}</td>
              <td data-label="Поражение">{x.l}</td>
              <td data-label="Очки">{x.score}</td>
            </tr>
          )
        }
        </tbody>
      </table>
    </div>
  );
};