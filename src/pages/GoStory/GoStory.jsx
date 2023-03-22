import React from 'react';
import { useParams } from 'react-router-dom';
import { LayoutTitleWithNoData } from '../../components';

import { getGoStory } from '../../api';
import { useStaticPageData } from '../../hooks';

export const GoStory = () => {
  const params = useParams();
  const [data, isLoading, error] = useStaticPageData(() => getGoStory(params.id));
  return (
    <LayoutTitleWithNoData error={error} isLoading={isLoading} title={data?.title}>
      {
        data?.ref?.includes('http') ?
          <iframe width="720" height="480" frameBorder="0" allowFullScreen src={data?.ref} /> :
          <video src={data?.ref} width="720" height="480" controls />
      }
    </LayoutTitleWithNoData>
  )
};