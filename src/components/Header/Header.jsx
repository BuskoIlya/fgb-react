import { UserMenu } from '../UserMenu';
import { Logo } from 'fgb-ui-components';
import css from './Header.module.css';

export const Header = () => {
  return (
    <header className={css.content}>
      <Logo
        className={css.logo}
        img={process.env.REACT_APP_IMG_FLAG_PATH + 'by-round.jpg'}
        title="Флаг Беларуси"
      />
      <h1 className={`title ${css.title}`}>Сообщество Го Беларуси</h1>
      <UserMenu className={css.userMenu} />
    </header>
  );
};