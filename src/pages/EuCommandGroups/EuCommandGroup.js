import React from 'react';
import { useParams } from "react-router-dom";
import GroupTable from './GroupTable';
import RoundTable from './RoundTable';
import TitleLayout from '../../components/layouts/TitleLayout';

function EuCommandGroup() {

  const params = useParams();
  const url =
    process.env.REACT_APP_SERVER_URL
    + process.env.REACT_APP_API_TOURNAMENTS_EU_COMMAND_GROUPS_BY_YEAR
    + params.year + '/' + params.group;
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    fetch(url)
      .then(response => response.json())
      .then(data => setData(data))
      .catch(e =>  console.log(e))
  }, [params]);

  return (
    <TitleLayout title={`Командный Чемпионат Европы ${params.year}. Группа ${params.group}`}>
      <GroupTable data={data.table}/>
      {
        data.rounds?.map(item =>
          <RoundTable key={item.name} name={item.name} date={item.date} games={item.games}/>
        )
      }
    </TitleLayout>
  );
}

export default EuCommandGroup;