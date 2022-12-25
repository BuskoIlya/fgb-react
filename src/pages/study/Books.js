import React from 'react';
import CardLayout from '../../components/blocks/CardLayout';
import FGBCard from '../../components/FGBCard/FGBCard';
import TitleLayout from '../../components/blocks/TitleLayout';

function Books() {

  const url = process.env.REACT_APP_SERVER_URL + process.env.REACT_APP_API_GO_STUDY_BOOKS;
  const imgPath = process.env.REACT_APP_IMG_BOOKS_PATH;
  const [books, setBooks] = React.useState([]);
  React.useEffect(() => {
    fetch(url)
        .then(response => response.json())
        .then(data => setBooks(data))
        .catch(e =>  console.log(e));
  }, []);

  return (
    <TitleLayout title="Книги по Го">
      <CardLayout>
        {
          books.map(item =>
            <FGBCard
              key={item.title}
              size={24}
              color="green"
              img={imgPath + item.img}
              title={item.title}
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