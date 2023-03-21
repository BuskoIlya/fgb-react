import React from 'react';
import { LayoutTitleWithNoData } from '../../components';
import '../../css/table.css';

import { getPlayers } from '../../api';
import { useStaticPageData } from '../../hooks';

export const Players = () => {
  const [data, isLoading, error] = useStaticPageData(getPlayers);
  return (
    <LayoutTitleWithNoData
      errorMessage={error}
      isLoading={isLoading}
      title="Игроки Беларуси"
    >
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
          data?.map((item, index) =>
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
    </LayoutTitleWithNoData>
  );
};