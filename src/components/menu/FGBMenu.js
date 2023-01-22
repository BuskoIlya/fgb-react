import React from 'react';
import FGBMenuItem from './FGBMenuItem';
import FGBMenuSubItem from './FGBMenuSubItem';
import './FGBMenu.css';

function FGBMenu() {

  const [desktopDisplay, setDesktopDisplay] = React.useState({display: ""});

  window.matchMedia('(max-width: 900px)').onchange = (e) => {
    if (e.matches) {
      setDesktopDisplay({display: "none"});
    } else {
      setDesktopDisplay({display: "flex"});
    }
  }

  function onClickMobile() {
    if (desktopDisplay.display === "none") {
      setDesktopDisplay({display: "flex"});
    } else {
      setDesktopDisplay({display: "none"});
    }
  }

  return (
    <nav className="fgb-menu">
      <div className="fgb-menu__mobile" onClick={onClickMobile}>Меню</div>
      <ul className="fgb-menu__desktop" style={desktopDisplay}>
        <FGBMenuItem to="/" name="Главная" />
        <FGBMenuItem to="/info" name="Информация">
          <FGBMenuSubItem to="/info/contacts" name="Контакты" />
          <FGBMenuSubItem to="/info/ranks" name="Разряды" />
          <FGBMenuSubItem to="/info/info-board" name="Доска информации" />
          <FGBMenuSubItem to="/info/news" name="Новости" />
        </FGBMenuItem>
        <FGBMenuItem to="/players" name="Игроки" />
        <FGBMenuItem to="/tournaments" name="Турниры">
          <FGBMenuSubItem to="/tournaments/by-tournaments" name="Наши турниры" />
          <FGBMenuSubItem to="/tournaments/world-champs" name="Чемпионаты мира" />
          <FGBMenuSubItem to="/tournaments/euro-champs" name="Чемпионаты европы">
            <FGBMenuSubItem to="/tournaments/euro-champs/personal" name="Индивидуальный" />
            <FGBMenuSubItem to="/tournaments/euro-champs/command" name="Командный" />
          </FGBMenuSubItem>
          <FGBMenuSubItem to="/tournaments/eu-command-groups/2019-2020" name="Командный ЧЕ 2019-2020">
            <FGBMenuSubItem to="/tournaments/eu-command-groups/2019-2020/A" name="Группа А" />
            <FGBMenuSubItem to="/tournaments/eu-command-groups/2019-2020/B" name="Группа B" />
            <FGBMenuSubItem to="/tournaments/eu-command-groups/2019-2020/C" name="Группа C" />
            <FGBMenuSubItem to="/tournaments/eu-command-groups/2019-2020/D" name="Группа D" />
          </FGBMenuSubItem>
          <FGBMenuSubItem to="/tournaments/eu-command-groups/2020-2021" name="Командный ЧЕ 2020-2021">
            <FGBMenuSubItem to="/tournaments/eu-command-groups/2020-2021/A" name="Группа А" />
            <FGBMenuSubItem to="/tournaments/eu-command-groups/2020-2021/B" name="Группа B" />
            <FGBMenuSubItem to="/tournaments/eu-command-groups/2020-2021/C" name="Группа C" />
            <FGBMenuSubItem to="/tournaments/eu-command-groups/2020-2021/D" name="Группа D" />
          </FGBMenuSubItem>
        </FGBMenuItem>
        <FGBMenuItem to="/study" name="Обучение">
          <FGBMenuSubItem to="/study/go-books" name="Книги по Го" />
          <FGBMenuSubItem to="/study/go-courses" name="Обучающие курсы">
            <FGBMenuSubItem to="/study/go-courses/welcome-to-go" name="Знакомство с игрой Го" />
          </FGBMenuSubItem>
          <FGBMenuSubItem to="/study/go-stories" name="Рассказы о Го" />
        </FGBMenuItem>
      </ul>
    </nav>
  );
}

export default FGBMenu;