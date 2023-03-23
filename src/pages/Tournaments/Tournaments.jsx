import React from 'react';
import { LayoutCard } from 'fgb-ui-components';
import { Card, LayoutDropDown, LayoutWithNoData } from '../../components';
import css from './Tournaments.module.css';

import { getTournaments } from '../../api';
import { useStaticPageData } from '../../hooks';

const imgPath = process.env.REACT_APP_IMG_NEWS_PATH;

export const Tournaments = () => {
  const [data, isLoading, error] = useStaticPageData(getTournaments);
  return (
    <section className={css.content}>
      <p className={css.description}>
        *Прошедшие турниры с участием наших игроков по годам:
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
                      color={x.color}
                      date={x.date}
                      img={imgPath + x.img}
                      size={32}
                      title={x.title}
                      toRef={x.toref ? `/tournament/${x.toref}` : `/tournament/${x.id}`}
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