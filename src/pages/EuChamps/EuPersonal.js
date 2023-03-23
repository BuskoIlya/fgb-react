import React from 'react';
import { TitleCountry } from 'fgb-ui-components';
import TitleLayout from '../../components/layouts/TitleLayout';

function EuPersonal() {

  const url = process.env.REACT_APP_SERVER_URL + process.env.REACT_APP_API_TOURNAMENTS_EU_PERSONAL;
  const flagPath = process.env.REACT_APP_IMG_FLAG_MINI_PATH;
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    fetch(url)
        .then(response => response.json())
        .then(data => setData(data))
        .catch(e =>  console.log(e));
  }, []);

  return (
    <TitleLayout title="Чемпионаты Европы. Индивидуальный зачёт">
      <table className="table table_blue">
        <thead>
        <tr>
          <th className="table__cell">Год</th>
          <th className="table__cell">Место проведения</th>
          <th className="table__cell">Победитель</th>
        </tr>
        </thead>
        <tbody>
        {
          data.map((item) =>
            <tr key={item.year}>
              <td data-label="Год">{item.year}</td>
              <td data-label="Место проведения" className="table__cell table__cell_left">
                <TitleCountry flagImg={flagPath + item.flag} flagTitle={item.country} text={item.city} />
              </td>
              <td data-label="Победитель" className="table__cell table__cell_left">
                <TitleCountry flagImg={flagPath + item.g_flag} flagTitle={item.g_country} text={item.g_name} />
              </td>
            </tr>
          )
        }
        </tbody>
      </table>
    </TitleLayout>
  );
}

export default EuPersonal;