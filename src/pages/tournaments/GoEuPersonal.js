import React from 'react';

import Country from '../../components/Country';

import './GoEuPersonal.css';

function GoEuPersonal() {

  const goEuPersonalApiUrl = process.env.REACT_APP_SERVER_URL
      + process.env.REACT_APP_API_EU_PERSONAL;
  const [goEuPersonal, setGoEuPersonal] = React.useState([]);
  React.useEffect(() => {
    fetch(goEuPersonalApiUrl)
        .then(response => response.json())
        .then(data => setGoEuPersonal(data))
        .catch(e =>  console.log(e));
  }, []);

  return (
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
          goEuPersonal.map((item) =>
              <tr key = { item.year }>
                <td>{ item.year }</td>
                <td className = "table__cell table__cell_left">
                  <Country img = { process.env.REACT_APP_IMG_FLAG_MINI_PATH + item.flag }
                           imgTitle = { item.country } text = { item.city }/>
                </td>
                <td className = "table__cell table__cell_left">
                  <Country img = { process.env.REACT_APP_IMG_FLAG_MINI_PATH + item.g_flag }
                           imgTitle = { item.g_country } text = { item.g_name }/>
                </td>
              </tr>
          )
        }
        </tbody>
      </table>
  );
}

export default GoEuPersonal;