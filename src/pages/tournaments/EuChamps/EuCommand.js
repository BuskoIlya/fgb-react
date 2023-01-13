import React from 'react';
import FGBCountry from '../../../components/FGBCountry/FGBCountry';
import TitleLayout from '../../../components/layouts/TitleLayout';

function EuCommand() {

  const url = process.env.REACT_APP_SERVER_URL + process.env.REACT_APP_API_EU_COMMAND;
  const flagPath = process.env.REACT_APP_IMG_FLAG_MINI_PATH;
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    fetch(url)
        .then(response => response.json())
        .then(data => setData(data))
        .catch(e =>  console.log(e));
  }, []);

  return (
    <TitleLayout title="Чемпионаты Европы. Командный зачёт">
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
            <tr key={item.year}>
              <td>{item.year}</td>
              <td className="table__cell">
                <FGBCountry img={flagPath + item.flag} imgTitle={item.country} text={item.city} />
              </td>
              <td className="table__cell">
                <FGBCountry img={flagPath + item.g_flag} text={item.g_country} />
              </td>
              <td className="table__cell">
                <FGBCountry img={flagPath + item.s_flag} text={item.s_country} />
              </td>
              <td className="table__cell">
                <FGBCountry img={flagPath + item.b_flag} text={item.b_country} />
              </td>
            </tr>
          )
        }
        </tbody>
      </table>
    </TitleLayout>
  );
}

export default EuCommand;