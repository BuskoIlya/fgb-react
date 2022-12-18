import React from 'react';

import Country from '../../components/Country';

import './GoEuCommand.css';

function GoEuCommand() {

  const goEuCommandApiUrl = process.env.REACT_APP_SERVER_URL
      + process.env.REACT_APP_API_EU_COMMAND;
  const [goEuCommand, setGoEuCommand] = React.useState([]);
  React.useEffect(() => {
    fetch(goEuCommandApiUrl)
        .then(response => response.json())
        .then(data => setGoEuCommand(data))
        .catch(e =>  console.log(e));
  }, []);

  return (
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
          goEuCommand.map((item) =>
              <tr key = { item.year }>
                <td>{ item.year }</td>
                <td className = "table__cell table__cell_left">
                  <Country img = { process.env.REACT_APP_IMG_FLAG_MINI_PATH + item.flag }
                           imgTitle = { item.country } text = { item.city }/>
                </td>
                <td className = "table__cell table__cell_left">
                  <Country img = { process.env.REACT_APP_IMG_FLAG_MINI_PATH + item.g_flag } text = { item.g_country }/>
                </td>
                <td className = "table__cell table__cell_left">
                  <Country img = { process.env.REACT_APP_IMG_FLAG_MINI_PATH + item.s_flag } text = { item.s_country }/>
                </td>
                <td className = "table__cell table__cell_left">
                  <Country img = { process.env.REACT_APP_IMG_FLAG_MINI_PATH + item.b_flag } text = { item.b_country }/>
                </td>
              </tr>
          )
        }
        </tbody>
      </table>
  );
}

export default GoEuCommand;