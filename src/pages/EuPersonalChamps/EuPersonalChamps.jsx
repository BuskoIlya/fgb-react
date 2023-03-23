import React from 'react';
import { LayoutTitleWithNoData, TDCountry } from '../../components';

import { getEuPersonalChamps } from '../../api';
import { useStaticPageData } from '../../hooks';

export const EuPersonalChamps = () => {
  const [data, isLoading, error] = useStaticPageData(getEuPersonalChamps);
  return (
    <LayoutTitleWithNoData
      error={error}
      isLoading={isLoading}
      title="Чемпионаты Европы. Индивидуальный зачёт"
    >
      <table className="table table_blue">
        <thead>
        <tr>
          <th className="table__cell">Год</th>
          <th className="table__cell">Место проведения</th>
          <th className="table__cell">Победитель</th>
        </tr>
        </thead>
        <tbody>
        {
          data?.map(x =>
            <tr key={x.year}>
              <td data-label="Год">{x.year}</td>
              <TDCountry label="Место проведения" img={x.flag} tooltip={x.country} value={x.city}/>
              <TDCountry label="Победитель" img={x.flag1} tooltip={x.country1} value={x.name1}/>
            </tr>
          )
        }
        </tbody>
      </table>
    </LayoutTitleWithNoData>
  );
};