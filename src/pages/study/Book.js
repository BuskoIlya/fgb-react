import React from 'react';
import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import FGBLink from '../../components/FGBLink/FGBLink';
import './Book.css';

function Book() {

  const imgPath = process.env.REACT_APP_IMG_BOOKS_PATH;
  const downloadPath = process.env.REACT_APP_DOWNLOAD_BOOKS;
  const params = useParams();
  const url =
    process.env.REACT_APP_SERVER_URL
    + process.env.REACT_APP_API_BOOK
    + params.id;
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    fetch(url)
      .then(response => response.json())
      .then(data => setData(data))
      .catch(e =>  console.log(e));
  }, []);

  return (
    <div className="book">
      <div className="book__item">
        <img className="book__img" src={imgPath + data.img} alt={data.title} />
      </div>
      <div className="book__item">
        {data.author && <p className="book__author">{data.author}</p>}
        {data.category && <p className="book__category">{data.category}</p>}
        {data.description && <p className="book__description">{data.description}</p>}
        <FGBLink
          type="text-inner"
          href={downloadPath + data.download_ref}
          iconBefore={<FontAwesomeIcon icon={faDownload} />}
          download
        >
          Скачать
        </FGBLink>
      </div>
    </div>
  );
}

export default Book;