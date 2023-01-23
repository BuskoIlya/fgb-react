import React from 'react';
import FGBCountry from '../../components/FGBCountry/FGBCountry';
import TitleLayout from '../../components/layouts/TitleLayout';
import '../../css/table.css';

function WAGC() {

  const flagPath = process.env.REACT_APP_IMG_FLAG_MINI_PATH;
  const url =
    process.env.REACT_APP_SERVER_URL + process.env.REACT_APP_API_TOURNAMENTS_WORLD_CHAMPS;
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    fetch(url)
        .then(response => response.json())
        .then(data => setData(data))
        .catch(e =>  console.log(e));
  }, []);

  return (
    <TitleLayout title="Чемпионаты мира">
      <table className="table">
        <thead>
        <tr>
          <th className="table__cell">Год</th>
          <th className="table__cell">Место проведения</th>
          <th className="table__cell">Золото</th>
          <th className="table__cell">Серебро</th>
          <th className="table__cell">Бронза</th>
        </tr>
        </thead>
        <tbody>
        {
          data?.map((item) =>
            <tr key= {item.year}>
              <td data-label="Год">{item.year}</td>
              <td data-label="Место проведения" className="table__cell">
                <FGBCountry img={flagPath + item.flag_country} imgTitle={item.country} text={item.city} />
              </td>
              <td data-label="Золото" className="table__cell">
                <FGBCountry img={flagPath + item.g_flag_country} imgTitle={item.g_country} text={item.g_name} />
              </td>
              <td data-label="Серебро" className="table__cell">
                <FGBCountry img={flagPath + item.s_flag_country} imgTitle={item.s_country} text={item.s_name} />
              </td>
              <td data-label="Бронза" className="table__cell">
                <FGBCountry img={flagPath + item.b_flag_country} imgTitle={item.b_country} text={item.b_name} />
              </td>
            </tr>
          )
        }
        </tbody>
      </table>
    </TitleLayout>
  );
}

export default WAGC;