import React from 'react';
import { Card, LayoutCardWithNoData } from '../../components';

import { getHome } from '../../api';
import { useStaticPageData } from '../../hooks';

const imgPath = process.env.REACT_APP_IMG_NEWS_PATH;

export const Home = () => {
  const [data, isLoading, error] = useStaticPageData(getHome);
  return (
    <LayoutCardWithNoData>
      {
        data?.map(x =>
          <Card key={x.date}
            address={x.shortAddress}
            author={x.author}
            color={x.color}
            date={x.date}
            img={imgPath + x.img}
            size={32}
            title={x.title}
            toRef={`/tournament/${x.id}`}
          />
        )
      }
    </LayoutCardWithNoData>
  );
};