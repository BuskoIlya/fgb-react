import { LinkExternal } from 'fgb-ui-components';
import css from './InfoBoardItem.module.css';

export const InfoBoardItem = ({ href, joke, important, text }) => {
  return (
    <p className={css.content}>
      <LinkExternal href={href}>{text}</LinkExternal>
      {joke && <small>{joke}</small>}
      {important && <small><i>{important}</i></small>}
    </p>
  );
};