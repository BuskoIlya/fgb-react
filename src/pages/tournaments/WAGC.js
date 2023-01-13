import React from 'react';
import FGBCountry from '../../components/FGBCountry/FGBCountry';
import TitleLayout from '../../components/layouts/TitleLayout';
import '../../css/table.css';
import './WAGC.css';

function WAGC() {

  const url = process.env.REACT_APP_SERVER_URL + process.env.REACT_APP_API_WORLD_CHAMPIONSHIPS;
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    fetch(url)
        .then(response => response.json())
        .then(data => setData(data))
        .catch(e =>  console.log(e));
  }, []);

  return (
    <TitleLayout title="Чемпионаты мира">
      <section className="wagc">
        <p className="wagc__description">
        </p>
        <table className="table table_blue">
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
            data.map((item) =>
              <tr key= {item.year}>
                <td>{item.year}</td>
                <td className="table__cell">
                  <FGBCountry img={process.env.REACT_APP_IMG_FLAG_MINI_PATH + item.flag_country}
                              imgTitle={item.country} text={item.city} />
                </td>
                <td className="table__cell">
                  <FGBCountry img={process.env.REACT_APP_IMG_FLAG_MINI_PATH + item.g_flag_country}
                              imgTitle={item.g_country} text={item.g_name} />
                </td>
                <td className="table__cell">
                  <FGBCountry img={process.env.REACT_APP_IMG_FLAG_MINI_PATH + item.s_flag_country}
                              imgTitle={item.s_country} text={item.s_name} />
                </td>
                <td className="table__cell">
                  <FGBCountry img={process.env.REACT_APP_IMG_FLAG_MINI_PATH + item.b_flag_country}
                              imgTitle={item.b_country} text={item.b_name} />
                </td>
              </tr>
            )
          }
          </tbody>
        </table>
      </section>
    </TitleLayout>
  );
}

export default WAGC;