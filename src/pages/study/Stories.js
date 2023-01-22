import React from 'react';
import CardLayout from '../../components/layouts/CardLayout';
import FGBCard from '../../components/FGBCard/FGBCard';
import TitleLayout from '../../components/layouts/TitleLayout';

function Stories() {

  const url = process.env.REACT_APP_SERVER_URL + process.env.REACT_APP_API_STUDY_GO_STORIES;
  const imgPath = process.env.REACT_APP_IMG_STORIES_PATH;
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    fetch(url)
        .then(response => response.json())
        .then(data => setData(data))
        .catch(e =>  console.log(e));
  }, []);

  return (
    <TitleLayout title="Рассказы о Го">
      <CardLayout>
        {
          data.map(item =>
            <FGBCard
              key={item.title}
              size={32}
              color={item.color}
              img={imgPath + item.img}
              toRef={`/story/${item.id}`}
              title={item.title}
              author={item.author}
            />
          )
        }
      </CardLayout>
    </TitleLayout>
  );
}

export default Stories;