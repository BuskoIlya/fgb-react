import React from 'react';
import { LayoutTitleWithNoData, TDCountry } from '../../components';
import '../../css/table.css';

import { getWAGC } from '../../api';
import { useStaticPageData } from '../../hooks';

export const WAGC = () => {
  const [data, isLoading, error] = useStaticPageData(getWAGC);
  return (
    <LayoutTitleWithNoData error={error} isLoading={isLoading} title="Чемпионаты мира">
      <table className="table">
        <thead>
        <tr>
          <th className="table__cell">Год</th>
          <th className="table__cell">Место проведения</th>
          <th className="table__cell">Золото</th>
          <th className="table__cell">Серебро</th>
          <th className="table__cell">Бронза</th>
        </tr>
        </thead>
        <tbody>
        {
          data?.map(x =>
            <tr key={x.year}>
              <td data-label="Год">{x.year}</td>
              <TDCountry label="Место проведения" img={x.flag} tooltip={x.country} value={x.city} />
              <TDCountry label="Золото" img={x.flag1} tooltip={x.country1} value={x.name1} />
              <TDCountry label="Серебро" img={x.flag2} tooltip={x.country2} value={x.name2} />
              <TDCountry label="Бронза" img={x.flag3} tooltip={x.country3} value={x.name3} />
            </tr>
          )
        }
        </tbody>
      </table>
    </LayoutTitleWithNoData>
  );
};