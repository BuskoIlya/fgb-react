import React from 'react';
import FGBCard from '../../components/FGBCard/FGBCard';
import MainTitleLayout from '../../components/blocks/MainTitleLayout';
import './GoStories.css';

function GoStories() {

  const url = process.env.REACT_APP_SERVER_URL + process.env.REACT_APP_API_GO_STUDY_STORIES;
  const imgPath = process.env.REACT_APP_IMG_STORIES_PATH;
  const [stories, setStories] = React.useState([]);
  React.useEffect(() => {
    fetch(url)
        .then(response => response.json())
        .then(data => setStories(data))
        .catch(e =>  console.log(e));
  }, []);

  return (
    <MainTitleLayout title = "Рассказы о Го">
      <section className = "go-stories">
        {
          stories.map(item =>
            <FGBCard
              key={item.title}
              size={32}
              img={imgPath + item.img}
              title={item.title}
              author={item.author}
            />
          )
        }
      </section>
    </MainTitleLayout>
  );
}

export default GoStories;