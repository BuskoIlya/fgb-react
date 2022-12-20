import React from 'react';
import { Link } from 'react-router-dom';

import Country from '../../../components/Country';

import './GroupTable.css';

function GroupTable({ title, refto, data = [] }) {

  const flagPath = process.env.REACT_APP_IMG_FLAG_MINI_PATH;

  return (
      <>
        <p><Link to = { refto }>{ title }</Link></p>
        <table className = "table group-table">
          <thead>
          <tr>
            <th className = "table__cell" title = "Место">№</th>
            <th className = "table__cell">Команда</th>
            <th className = "table__cell">Игры</th>
            <th className = "table__cell" title = "Выигранных партий">ВП</th>
            <th className = "table__cell" title = "Доска номер 1">Д. 1</th>
            <th className = "table__cell" title = "Доска номер 2">Д. 2</th>
            <th className = "table__cell" title = "Доска номер 3">Д. 3</th>
            <th className = "table__cell" title = "Доска номер 4">Д. 4</th>
            <th className = "table__cell" title = "Выигрыш">В</th>
            <th className = "table__cell" title = "Ничья">Н</th>
            <th className = "table__cell" title = "Поражение">П</th>
            <th className = "table__cell">Очки</th>
          </tr>
          </thead>
          <tbody>
          {
            data.map((item, index) =>
                <tr key = { index + 1 }>
                  <td>{ index + 1 }</td>
                  <td className = "table__cell table__cell_left">
                    <Country img = { flagPath + item.flag_country } text = { item.country }/>
                  </td>
                  <td>{ item.game_count }</td>
                  <td>{ item.board_total_win }</td>
                  <td>{ item.board_1_win }</td>
                  <td>{ item.board_2_win }</td>
                  <td>{ item.board_3_win }</td>
                  <td>{ item.board_4_win }</td>
                  <td>{ item.game_win }</td>
                  <td>{ item.game_draw }</td>
                  <td>{ item.game_loos }</td>
                  <td>{ item.game_lose }</td>
                </tr>
            )
          }
          </tbody>
        </table>
      </>
  )
}

export default GroupTable;