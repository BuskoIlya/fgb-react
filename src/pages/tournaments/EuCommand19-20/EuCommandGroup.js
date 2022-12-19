import React from 'react';
import { useParams } from "react-router-dom";

import GroupTable from './GroupTable';
import MainTitleLayout from '../../../components/blocks/MainTitleLayout';

function EuCommandGroup() {

  const params = useParams();
  const url = process.env.REACT_APP_SERVER_URL + process.env.REACT_APP_API_EU_COMMAND_19_20_GROUP + params.id;
  const [group, setData] = React.useState([]);

  React.useEffect(() => {
    fetch(url)
        .then(response => response.json())
        .then(data => setData(data))
        .catch(e =>  console.log(e))
  }, [params]);

  return (
      <MainTitleLayout title = { "Командный Чемпионат Европы 2019-2020. Группа " + params.id }>
        <GroupTable data = { group }/>
      </MainTitleLayout>
  );
}

export default EuCommandGroup;