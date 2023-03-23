import React from 'react';
import { LayoutTitleWithNoData, TDCountry } from '../../components';

import { getEuCommandChamps } from '../../api';
import { useStaticPageData } from '../../hooks';

export const EuCommandChamps = () => {
  const [data, isLoading, error] = useStaticPageData(getEuCommandChamps);
  return (
    <LayoutTitleWithNoData
      error={error}
      isLoading={isLoading}
      title="Чемпионаты Европы. Командный зачёт"
    >
      <table className="table table_blue">
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
              <TDCountry label="Золото" img={x.flag1} value={x.country1} />
              <TDCountry label="Серебро" img={x.flag2} value={x.country2} />
              <TDCountry label="Бронза" img={x.flag3} value={x.country3} />
            </tr>
          )
        }
        </tbody>
      </table>
    </LayoutTitleWithNoData>
  );
};