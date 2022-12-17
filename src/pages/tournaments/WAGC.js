import React from 'react';

import Country from '../../components/Country';
import MainLayout from '../../components/blocks/MainLayout';

import '../../css/table.css';
import './WAGC.css';

function WAGC() {

  const worldChampionshipsApiUrl = process.env.REACT_APP_SERVER_URL
      + process.env.REACT_APP_API_WORLD_CHAMPIONSHIPS;
  const [worldChampionships, setWorldChampionships] = React.useState([]);
  React.useEffect(() => {
    fetch(worldChampionshipsApiUrl)
        .then(response => response.json())
        .then(data => setWorldChampionships(data))
        .catch(e =>  console.log(e));
  }, []);

  return (
      <MainLayout title = "Чемпионаты мира">
        <section className = "wagc">
          <p className = "wagc__description">
          </p>
          <table className = "table table_blue">
            <thead>
            <tr>
              <th className = "table__cell">Год</th>
              <th className = "table__cell">Место проведения</th>
              <th className = "table__cell">Золото</th>
              <th className = "table__cell">Серебро</th>
              <th className = "table__cell">Бронза</th>
            </tr>
            </thead>
            <tbody>
            {
              worldChampionships.map((item) =>
                  <tr key = {item.year}>
                    <td>{item.year}</td>
                    <td className = "table__cell table__cell_left">
                      <Country img = {process.env.REACT_APP_IMG_FLAG_MINI_PATH + item.flag_country}
                               imgTitle = {item.country} text = {item.city}/>
                    </td>
                    <td className = "table__cell table__cell_left">
                      <Country img = {process.env.REACT_APP_IMG_FLAG_MINI_PATH + item.g_flag_country}
                               imgTitle = {item.g_country} text = {item.g_name}/>
                    </td>
                    <td className = "table__cell table__cell_left">
                      <Country img = {process.env.REACT_APP_IMG_FLAG_MINI_PATH + item.s_flag_country}
                               imgTitle = {item.s_country} text = {item.s_name}/>
                    </td>
                    <td className = "table__cell table__cell_left-left">
                      <Country img = {process.env.REACT_APP_IMG_FLAG_MINI_PATH + item.b_flag_country}
                               imgTitle = {item.b_country} text = {item.b_name}/>
                    </td>
                  </tr>
              )
            }
            </tbody>
          </table>
        </section>
      </MainLayout>
  );
}

export default WAGC;