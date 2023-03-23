import React from 'react';
import { LayoutCard } from 'fgb-ui-components';
import { Card, LayoutDropDown, LayoutWithNoData } from '../../components';
import css from './News.module.css';

import { getNews } from '../../api';
import { useStaticPageData } from '../../hooks';

const imgNewsPath = process.env.REACT_APP_IMG_NEWS_PATH;

export const News = () => {
  const [data, isLoading, error] = useStaticPageData(getNews);
  return (
    <section className={css.content}>
      <p className={css.description}>
        *Прошедшие турниры и другие события Го Беларуси по годам:
      </p>
      <LayoutWithNoData className={css.data} error={error} isLoading={isLoading}>
        {
          data?.map(year =>
            <LayoutDropDown key={year.year} title={year.year}>
              <LayoutCard>
                {
                  year.items.map(x =>
                    <Card key={x.date}
                      address={x.shortAddress}
                      author={x.author}
                      date={x.date}
                      color={x.color}
                      img={imgNewsPath + x.img}
                      size={32}
                      toRef={x.ref}
                      title={x.title}
                    />
                  )
                }
              </LayoutCard>
            </LayoutDropDown>
          )
        }
      </LayoutWithNoData>
    </section>
  );
};