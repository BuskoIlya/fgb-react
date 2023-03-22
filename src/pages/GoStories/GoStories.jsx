import React from 'react';
import { Card, LayoutTitleWithNoData } from '../../components';
import { LayoutCard } from 'fgb-ui-components';

import { getStories } from '../../api';
import { useStaticPageData } from '../../hooks';

const imgPath = process.env.REACT_APP_IMG_STORIES_PATH;

export const GoStories = () => {
  const [data, isLoading, error] = useStaticPageData(getStories);
  return (
    <LayoutTitleWithNoData error={error} isLoading={isLoading} title="Рассказы о Го">
      <LayoutCard>
        {
          data?.map(x =>
            <Card key={x.title}
              author={x.author}
              color={x.color}
              img={imgPath + x.img}
              size={32}
              title={x.title}
              toRef={`/story/${x.id}`}
            />
          )
        }
      </LayoutCard>
    </LayoutTitleWithNoData>
  );
};