import React from 'react';
import { LayoutTitleWithNoData } from '../../components';
import '../../css/table.css';

import { getRanks } from '../../api';
import { useStaticPageData } from '../../hooks';

export const Ranks = () => {
  const [data, isLoading, error] = useStaticPageData(getRanks);
  return (
    <LayoutTitleWithNoData
      errorMessage={error}
      isLoading={isLoading}
      title="Система разрядов в Го"
    >
      <table className="table table_size-50">
        <thead>
        <tr>
          <th className="table__cell">Очки</th>
          <th className="table__cell">Разряды кю / дан</th>
        </tr>
        </thead>
        <tbody>
        {
          data?.map((item, index) =>
            <tr key={index + 1}>
              <td data-label="Очки" className="table__cell">{item.scores}</td>
              <td data-label="Разряды кю/дан" className="table__cell">{item.sport_rank}</td>
            </tr>
          )
        }
        </tbody>
      </table>
    </LayoutTitleWithNoData>
  );
};