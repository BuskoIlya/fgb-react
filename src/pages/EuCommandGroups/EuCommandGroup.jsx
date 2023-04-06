import React from 'react';
import { useParams } from "react-router-dom";
import { GroupTable, LayoutTitleWithNoData } from '../../components';
import { RoundTable } from './RoundTable';

import { getEuCommandGroup } from '../../api';
import { useStaticPageData } from '../../hooks';

export const EuCommandGroup = () => {
  const params = useParams();
  const [data, isLoading, error] =
    useStaticPageData(() => getEuCommandGroup(params.year, params.group), [params.group]);
  return (
    <LayoutTitleWithNoData
      error={error}
      isLoading={isLoading}
      title={`Командный Чемпионат Европы ${params.year}. Группа ${params.group}`}
    >
      <GroupTable data={data?.table}/>
      {
        data?.rounds?.map(item =>
          <RoundTable key={item.name} name={item.name} date={item.date} games={item.games}/>
        )
      }
    </LayoutTitleWithNoData>
  );
};