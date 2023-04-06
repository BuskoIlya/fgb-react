import React from 'react';
import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import { LinkDownload } from 'fgb-ui-components';
import { LayoutWithNoData } from '../../components';
import css from './Book.module.css';

import { getBook } from '../../api';
import { useStaticPageData } from '../../hooks';

const imgPath = process.env.REACT_APP_IMG_BOOKS_PATH;
const downloadPath = process.env.REACT_APP_DOWNLOAD_BOOKS;

export const Book = () => {
  const params = useParams();
  const [data, isLoading, error] = useStaticPageData(() => getBook(params.id));
  return (
    <LayoutWithNoData error={error} isLoading={isLoading}>
      { data &&
        <div className={css.content}>
          <div className={css.content__item}>
            {data.img && <img className={css.img} src={imgPath + data.img} alt={data.title}/>}
          </div>
          <div className={css.content__item}>
            {data.author && <p className={css.author}>{data.author}</p>}
            {data.category && <p>{data.category}</p>}
            {data.description && <p>{data.description}</p>}
            <LinkDownload
              href={downloadPath + data.ref}
              iconBefore={<FontAwesomeIcon icon={faDownload}/>}
            >
              Скачать
            </LinkDownload>
          </div>
        </div>
      }
    </LayoutWithNoData>
  );
};