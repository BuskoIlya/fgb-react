import React from 'react';
import { useParams } from 'react-router-dom';
import { Logo } from 'fgb-ui-components';

import { LayoutTitleWithNoData, TournamentTable } from '../../components';
import css from './Tournament.module.css';

import { getTournament } from '../../api';
import { useStaticPageData } from '../../hooks';

const cityPath = process.env.REACT_APP_IMG_LOGOS_PATH;

export const Tournament = ({type = ''}) => {
  const params = useParams();
  const [data, isLoading, error] = useStaticPageData(() => getTournament(type, params.id));
  return (
    <LayoutTitleWithNoData error={error} isLoading={isLoading} title={data?.title || ''}>
      { data &&
        <div className={css.content}>
          <header className={css.header}>
            <Logo className={css.cityLogo} img={cityPath + data.cityImg} title={data.shortAddress} />
            <div className={css.info}>
              <time>{data.date}</time>
              <address>{data.longAddress}</address>
              <p className={css.author}>{data.author}</p>
            </div>
          </header>
          <>
            {
              data?.tables?.map(table =>
                <TournamentTable key={table.info.title} table={table} title={table.info.title} />
              )
            }
          </>
        </div>
      }
    </LayoutTitleWithNoData>
  );
};