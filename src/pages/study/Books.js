import React from 'react';
import CardLayout from '../../components/blocks/CardLayout';
import FGBCard from '../../components/FGBCard/FGBCard';
import TitleLayout from '../../components/blocks/TitleLayout';

function Books() {
  const url = process.env.REACT_APP_SERVER_URL + process.env.REACT_APP_API_STUDY_GO_BOOKS;
  const imgPath = process.env.REACT_APP_IMG_BOOKS_PATH;
  const [data, setData] = React.useState([]);
  React.useEffect(() => {
    fetch(url)
        .then(response => response.json())
        .then(data => setData(data))
        .catch(e =>  console.log(e));
  }, []);

  return (
    <TitleLayout title="Книги по Го">
      <CardLayout>
        {
          data.map(item =>
            <FGBCard
              key={item.id}
              size={24}
              color={item.color}
              img={imgPath + item.img}
              title={item.title}
              toRef={`/book/${item.id}`}
              author={item.author}
              secondDescription={item.category}
            />
          )
        }
      </CardLayout>
    </TitleLayout>
  );
}

export default Books;