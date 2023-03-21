import React from 'react';
import { LayoutTitleWithNoData } from '../../components';
import '../../css/table.css';

import { getPlayers } from '../../api';
import { useStaticPageData } from '../../hooks';

export const Players = () => {
  const [data, isLoading, error] = useStaticPageData(getPlayers);
  return (
    <LayoutTitleWithNoData error={error} isLoading={isLoading} title="Игроки Беларуси">
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
          data?.map((x, i) =>
            <tr key = {x.fullName}>
              <td className="table__cell">{i + 1}</td>
              <td className="table__cell table__cell_left">{x.fullName}</td>
              <td className="table__cell">{x.city}</td>
              <td className="table__cell">{x.sportRank}</td>
              <td className="table__cell">{x.score}</td>
            </tr>
          )
        }
        </tbody>
      </table>
    </LayoutTitleWithNoData>
  );
};