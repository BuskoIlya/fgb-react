import React from 'react';
import { Card, LayoutTitleWithNoData } from '../../components';
import { LayoutCard } from 'fgb-ui-components';

import { getBooks } from '../../api';
import { useStaticPageData } from '../../hooks';

const imgPath = process.env.REACT_APP_IMG_BOOKS_PATH;

export const Books = () => {
  const [data, isLoading, error] = useStaticPageData(getBooks);
  return (
    <LayoutTitleWithNoData error={error} isLoading={isLoading} title="Книги по Го">
      <LayoutCard>
        {
          data?.map(x =>
            <Card key={x.id}
              author={x.author}
              color={x.color}
              img={imgPath + x.img}
              secondDescription={x.category}
              size={24}
              title={x.title}
              toRef={`/book/${x.id}`}
            />
          )
        }
      </LayoutCard>
    </LayoutTitleWithNoData>
  );
};