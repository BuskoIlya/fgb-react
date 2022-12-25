import React from 'react';
import FGBCard from '../../components/FGBCard/FGBCard';
import MainTitleLayout from '../../components/blocks/MainTitleLayout';
import './Books.css';

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
    <MainTitleLayout title = "Книги по Го">
      <section className = "books">
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
      </section>
    </MainTitleLayout>
  );
}

export default Books;