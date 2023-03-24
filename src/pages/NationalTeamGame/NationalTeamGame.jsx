import React from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { LinkExternal, LinkInner } from 'fgb-ui-components';

import { LayoutTitleWithNoData, Logo } from '../../components';
import { ResultTable } from './ResultTable';
import css from './NationalTeamGame.module.css';

import { getNationalTeamGame } from '../../api';
import { useStaticPageData } from '../../hooks';

const citiesPath = process.env.REACT_APP_IMG_LOGOS_PATH;
const flagsPath = process.env.REACT_APP_IMG_FLAGS_NORMAL_PATH;
const playersPath = process.env.REACT_APP_IMG_PLAYERS;

export const NationalTeamGame = () => {
  const params = useParams();
  const [data, isLoading, error] = useStaticPageData(() => getNationalTeamGame(params.id));
  return (
    <LayoutTitleWithNoData
      error={error}
      isLoading={isLoading}
      title={data?.round || ''}
    >
      { data &&
        <div className={css.content}>

          <div className={css.description}>
            <header className={css.description__header}>
              <Logo className={css.logo} img={citiesPath + data.cityImg} title={data.shortAddress} />
              <div className={css.description__info}>
                <time>{data.date}</time>
                <address>{data.longAddress}</address>
                <p className={css.author}>{data.author}</p>
              </div>
            </header>
            <div className={css.description__links}>
              <LinkExternal href={data.gameRef}>Ссылка на сайт матча {data.gameTitle}</LinkExternal>
              <LinkInner Tag={Link} to={data.groupRef}>Страница лиги {data.groupName}</LinkInner>
            </div>
          </div>

          <div className={css.scoreSection}>
            <div className={css.scoreSection__item}>
              <img className={css.flag} src={flagsPath + data.team1Flag} alt="" />
              <p>{data.team1Name}</p>
              <p>{data.score1}</p>
            </div>
            <div className={css.scoreSection__item}>
              <img className={css.flag} src={flagsPath + data.team2Flag} alt="" />
              <p>{data.team2Name}</p>
              <p>{data.score2}</p>
            </div>
          </div>

          <div className={css.playersSection}>
            <div className={css.playersSection__item}>
              <div className={css.players}>
                {
                  data.team1Players.map(x =>
                    <div className={css.playerInfo} key={x.name}>
                      <Logo className={css.logo} img={playersPath + x.img} alt="" />
                      <p>{x.name}</p>
                      <p className={css.team1Score}>{x.score}</p>
                    </div>
                  )
                }
              </div>
            </div>
            <div className={css.playersSection__item}>
              <div className={css.players}>
                {
                  data.team2Players.map(x =>
                    <div className={css.playerInfo} key={x.name}>
                      <p>{x.score}</p>
                      <Logo className={css.logo} img={playersPath + x.img} alt="" />
                      <p>{x.name}</p>
                    </div>
                  )
                }
              </div>
            </div>
          </div>

          <ResultTable games={data.playerGames} />
        </div>
      }
    </LayoutTitleWithNoData>
  );
};