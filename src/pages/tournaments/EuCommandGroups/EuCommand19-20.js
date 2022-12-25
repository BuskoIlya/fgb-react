import GroupTable from './GroupTable';
import TitleLayout from '../../../components/blocks/TitleLayout';

import React from 'react';

function EuCommand1920() {

  const urlA = process.env.REACT_APP_SERVER_URL + process.env.REACT_APP_API_EU_COMMAND_19_20_A;
  const urlB = process.env.REACT_APP_SERVER_URL + process.env.REACT_APP_API_EU_COMMAND_19_20_B;
  const urlC = process.env.REACT_APP_SERVER_URL + process.env.REACT_APP_API_EU_COMMAND_19_20_C;
  const urlD = process.env.REACT_APP_SERVER_URL + process.env.REACT_APP_API_EU_COMMAND_19_20_D;
  const [groupA, setGroupA] = React.useState([]);
  const [groupB, setGroupB] = React.useState([]);
  const [groupC, setGroupC] = React.useState([]);
  const [groupD, setGroupD] = React.useState([]);
  const tables = [
    { url: urlA, group: groupA, func: setGroupA },
    { url: urlB, group: groupB, func: setGroupB },
    { url: urlC, group: groupC, func: setGroupC },
    { url: urlD, group: groupD, func: setGroupD }
  ];

  React.useEffect(() => {
    tables.forEach(item =>
          fetch(item.url)
              .then(response => response.json())
              .then(data => item.func(data.table))
              .catch(e =>  console.log(e))
    );
  }, []);

  return (
      <TitleLayout title = "Командный Чемпионат Европы 2019-2020">
        <GroupTable title = "Группа А" refto = "/tournaments/eu-2019-2020/group/A" data = { groupA }/>
        <GroupTable title = "Группа B" refto = "/tournaments/eu-2019-2020/group/B" data = { groupB }/>
        <GroupTable title = "Группа C" refto = "/tournaments/eu-2019-2020/group/C" data = { groupC }/>
        <GroupTable title = "Группа D" refto = "/tournaments/eu-2019-2020/group/D" data = { groupD }/>
      </TitleLayout>
  );
}

export default EuCommand1920;