import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import FGBCountry from '../../../components/FGBCountry/FGBCountry';
import FGBLink from '../../../components/FGBLink/FGBLink';
import TitleLayout from '../../../components/layouts/TitleLayout';
import '../../../css/align.css';
import '../../../css/flex.css';
import './NationalTeamGame.css';

function NationalTeamGame() {

  const citiesPath = process.env.REACT_APP_IMG_LOGOS_PATH;
  const flagsPath = process.env.REACT_APP_IMG_FLAGS_NORMAL_PATH;
  const playersPath = process.env.REACT_APP_IMG_PLAYERS;
  const gamesPath = process.env.REACT_APP_DOWNLOAD_GAMES;
  const params = useParams();
  const url =
    process.env.REACT_APP_SERVER_URL
    + process.env.REACT_APP_API_TOURNAMENTS_NATIONAL_TEAM_GAME
    + params.id;
  console.log(url);
  const [data, setData] = React.useState();

  useEffect(() => {
    fetch(url)
      .then(response => response.json())
      .then(data => setData(data))
      .catch(e => console.error(e));
  }, []);

  if (data) {
    return (
      <TitleLayout title={data.round_title}>
        <div className="flex-column flex_gap-32 team-game">
          <div className="flex-column flex_gap-16">
            <header className="flex-row flex_gap-32">
              <img className="logo team-game__city-logo" src={citiesPath + data.city_img} alt={data.short_address}/>
              <div className="align__text_left">
                <time>{data.game_date}</time>
                <address>{data.long_address}</address>
                <p className="team-game__author">{data.author}</p>
              </div>
            </header>
            <div className="flex-column flex_gap-8">
              <FGBLink href={data.game_ref}>Ссылка на сайт матча {data.game_title}</FGBLink>
              <FGBLink type="text-inner" href={data.group_ref}>Страница лиги {data.group_name}</FGBLink>
            </div>
          </div>
          <div className="flex-row">
            <div className="flex-column flex-column_center flex_gap-16 flex-column_width-50">
              <img className="team-game__flag" src={flagsPath + data.team1_flag} alt=""/>
              <p>{data.team1_name}</p>
              <p>{data.team1_score}</p>
            </div>
            <div className="flex-column flex-column_center flex_gap-16 flex-column_width-50">
              <img className="team-game__flag" src={flagsPath + data.team2_flag} alt=""/>
              <p>{data.team2_name}</p>
              <p>{data.team2_score}</p>
            </div>
          </div>
          <div className="flex-row">
            <div className="flex-column flex-column_center flex-column_width-50">
              <div className="flex-column flex_gap-16">
                {
                  data.team1Players.map(item =>
                    <div className="flex-row flex_gap-32" key={item.name}>
                      <img className="logo team-game__player-logo" src={playersPath + item.img} alt=""/>
                      <p>{item.name}</p>
                      <p className="align__block_right">{item.score}</p>
                    </div>
                  )
                }
              </div>
            </div>
            <div className="flex-column flex-column_center flex-column_width-50">
              <div className="flex-column flex_gap-16">
                {
                  data.team2Players.map(item =>
                    <div className="flex-row flex_gap-32" key={item.name}>
                      <p>{item.score}</p>
                      <img className="logo team-game__player-logo" src={playersPath + item.img} alt=""/>
                      <p>{item.name}</p>
                    </div>
                  )
                }
              </div>
            </div>
          </div>
          <table className="table team-game__table">
            <thead>
            <tr>
              <th className="table__cell">№</th>
              <th className="table__cell">Игрок чёрными</th>
              <th className="table__cell">Игрок белыми</th>
              <th className="table__cell">Результат</th>
              <th className="table__cell">Скачать</th>
            </tr>
            </thead>
            <tbody>
            {
              data.playerGames.map((item, index) =>
                <tr key={index + 1}>
                  <td className="table__cell">{index + 1}</td>
                  <td className="table__cell table__cell_left">
                    <div className="flex-row">
                      <span className="team-game__black-stone">&#9679;</span>
                      <FGBCountry img={flagsPath + item.black_flag} text={item.black_player}/>
                    </div>
                  </td>
                  <td className="table__cell table__cell_left">
                    <div className="flex-row">
                      <span>&#9675;</span>
                      <FGBCountry img={flagsPath + item.white_flag} text={item.white_player}/>
                    </div>
                  </td>
                  <td className="table__cell">
                    <div className="flex-row flex_gap-8">
                      {
                        item.winner === 'b'
                          ? <span className="team-game__black-stone">&#9679;</span>
                          : <span>&#9675;</span>
                      }
                      {item.result}
                    </div>
                  </td>
                  <td className="table__cell">
                    <FGBLink
                      type="text-inner"
                      extraClasses="align__block_center"
                      href={gamesPath + item.game_ref}
                      iconBefore={<FontAwesomeIcon icon={faDownload}/>}
                      download
                    />
                  </td>
                </tr>
              )
            }
            </tbody>
          </table>
        </div>
      </TitleLayout>
    )
  } else {
    return <></>
  }
}

export default NationalTeamGame;