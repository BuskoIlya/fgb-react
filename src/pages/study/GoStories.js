import React from 'react';
import MainTitleLayout from '../../components/blocks/MainTitleLayout';
import StoryCard from '../../components/StoryCard';

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
              <StoryCard key = { item.title }
                  img = { item.img } title = { item.title } author = { item.author } keyWords = { item.key_words }/>
          )
        }
      </section>
    </MainTitleLayout>
  );
}

export default GoStories;