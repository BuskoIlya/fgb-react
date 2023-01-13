import React from 'react';
import { useParams } from 'react-router-dom';
import GroupTable from './GroupTable';
import TitleLayout from '../../../components/layouts/TitleLayout';

function EuCommandGroupResults() {

  const params = useParams();
  const url =
    process.env.REACT_APP_SERVER_URL
    + process.env.REACT_APP_API_EU_COMMAND_GROUPS_YEAR
    + params.year;
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    fetch(url)
        .then(response => response.json())
        .then(data => setData(data))
        .catch(e =>  console.log(e))
  }, [params]);

  return (
    <TitleLayout title={`Командный Чемпионат Европы ${params.year}`}>
      <>
        {
          data.map((item, index) =>
            <GroupTable
              key={index + 1}
              title={`Группа ${item.group}`}
              refto={`/tournaments/eu-command-groups/${params.year}/${item.group}`}
              data={item.data}
            />
          )
        }
      </>
    </TitleLayout>
  );
}

export default EuCommandGroupResults;