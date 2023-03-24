import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import {
  BlackStone,
  LinkDownload,
  TitleCountryWithStone,
  WhiteStone
} from 'fgb-ui-components';
import css from './ResultTable.module.css';

const flagsPath = process.env.REACT_APP_IMG_FLAGS_NORMAL_PATH;
const gamesPath = process.env.REACT_APP_DOWNLOAD_GAMES;

export const ResultTable = ({ games }) => {
  return (
    <table className={`table ${css.content}`}>
      <thead>
      <tr>
        <th className="table__cell">№</th>
        <th className="table__cell">Игрок чёрными</th>
        <th className="table__cell">Игрок белыми</th>
        <th className="table__cell">Результат</th>
        <th className="table__cell">Скачать</th>
      </tr>
      </thead>
      <tbody>
      {
        games.map((x, i) =>
          <tr key={i + 1}>
            <td data-label="№" className="table__cell">{i + 1}</td>
            <td className="table__cell">
              <TitleCountryWithStone black img={flagsPath + x.black_flag} value={x.black_player} />
            </td>
            <td className="table__cell">
              <TitleCountryWithStone img={flagsPath + x.white_flag} value={x.white_player} />
            </td>
            <td data-label="Результат" className="table__cell">
              <div className={css.gameResult}>
                {x.winner === 'b' ? <BlackStone /> : <WhiteStone />}
                {x.result}
              </div>
            </td>
            <td data-label="Скачать" className="table__cell">
              <LinkDownload
                href={gamesPath + x.game_ref}
                iconBefore={<FontAwesomeIcon icon={faDownload}/>}
              />
            </td>
          </tr>
        )
      }
      </tbody>
    </table>
  );
};