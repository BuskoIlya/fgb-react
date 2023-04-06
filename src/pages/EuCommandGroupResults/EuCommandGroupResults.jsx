import React from 'react';
import { useParams } from 'react-router-dom';
import { GroupTable, LayoutTitleWithNoData } from '../../components';

import { getEuCommandGroupResults } from '../../api';
import { useStaticPageData } from '../../hooks';

export const EuCommandGroupResults = () => {
  const params = useParams();
  const [data, isLoading, error] =
    useStaticPageData(() => getEuCommandGroupResults(params.year), [params.year]);
  return (
    <LayoutTitleWithNoData
      error={error}
      isLoading={isLoading}
      title={`Командный Чемпионат Европы ${params.year}`}
    >
      <>
        {
          data?.map(x =>
            <GroupTable key={x.group}
              data={x.data}
              refto={`/tournaments/eu-command-groups/${params.year}/${x.group}`}
              title={`Группа ${x.group}`}
            />
          )
        }
      </>
    </LayoutTitleWithNoData>
  );
};