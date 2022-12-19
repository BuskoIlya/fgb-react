import React from 'react';

import Country from '../../../components/Country';
import MainTitleLayout from '../../../components/blocks/MainTitleLayout';

function EuPersonal() {

  const url = process.env.REACT_APP_SERVER_URL + process.env.REACT_APP_API_EU_PERSONAL;
  const flagPath = process.env.REACT_APP_IMG_FLAG_MINI_PATH;
  const [data, setData] = React.useState([]);
  React.useEffect(() => {
    fetch(url)
        .then(response => response.json())
        .then(data => setData(data))
        .catch(e =>  console.log(e));
  }, []);

  return (
      <MainTitleLayout title = "Чемпионаты Европы. Индивидуальный зачёт">
        <table className = "table table_blue">
          <thead>
          <tr>
            <th className = "table__cell">Год</th>
            <th className = "table__cell">Место проведения</th>
            <th className = "table__cell">Победитель</th>
          </tr>
          </thead>
          <tbody>
          {
            data.map((item) =>
                <tr key = { item.year }>
                  <td>{ item.year }</td>
                  <td className = "table__cell table__cell_left">
                    <Country img = { flagPath + item.flag } imgTitle = { item.country } text = { item.city }/>
                  </td>
                  <td className = "table__cell table__cell_left">
                    <Country img = { flagPath + item.g_flag } imgTitle = { item.g_country } text = { item.g_name }/>
                  </td>
                </tr>
            )
          }
          </tbody>
        </table>
      </MainTitleLayout>
  );
}

export default EuPersonal;