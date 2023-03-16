import React from 'react';
import { TitleCountry } from 'fgb-ui-components';
import TitleLayout from '../../../components/layouts/TitleLayout';

function EuCommand() {

  const url = process.env.REACT_APP_SERVER_URL + process.env.REACT_APP_API_TOURNAMENTS_EU_COMMAND;
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
              <td data-label="Год">{item.year}</td>
              <td data-label="Место проведения" className="table__cell">
                <TitleCountry flagImg={flagPath + item.flag} flagTitle={item.country} name={item.city} />
              </td>
              <td data-label="Золото" className="table__cell">
                <TitleCountry flagImg={flagPath + item.g_flag} name={item.g_country} />
              </td>
              <td data-label="Серебро" className="table__cell">
                <TitleCountry flagImg={flagPath + item.s_flag} name={item.s_country} />
              </td>
              <td data-label="Бронза" className="table__cell">
                <TitleCountry flagImg={flagPath + item.b_flag} name={item.b_country} />
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