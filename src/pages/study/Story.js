import React from 'react';
import { useParams } from 'react-router-dom';
import TitleLayout from '../../components/layouts/TitleLayout';

function Story() {

  const params = useParams();
  const url =
    process.env.REACT_APP_SERVER_URL
    + process.env.REACT_APP_API_STUDY_STORY
    + params.id;
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    fetch(url)
      .then(response => response.json())
      .then(data => setData(data))
      .catch(e => console.error(e))
  }, []);

  return (
    <TitleLayout title={data.title}>
      {
        data.ref?.includes('http')
        ? <iframe width="720" height="480" frameBorder="0" allowFullScreen src={data.ref} />
        : <video src={data.ref} width="720" height="480" controls />
      }
    </TitleLayout>
  )
}

export default Story;