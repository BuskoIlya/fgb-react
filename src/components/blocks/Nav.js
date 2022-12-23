import React from 'react';
import { NavLink } from 'react-router-dom';
import FGBLink from '../FGBLink/FGBLink';

import './Nav.css';

function Nav() {

  const [navUlDisplay, setNavUlDisplay] = React.useState({ display: "" });

  window.matchMedia('(max-width: 900px)').onchange = (e) => {
    if (e.matches) {
      setNavUlDisplay({ display: "none" });
    } else {
      setNavUlDisplay({ display: "flex" });
    }
  }

  function dropDownMobil() {
    if (navUlDisplay.display === "none") {
      setNavUlDisplay({ display: "flex" });
    } else {
      setNavUlDisplay({ display: "none" });
    }
  }

  return (
      <nav className = "nav">
        <div className = "nav__mobile" onClick = { dropDownMobil }>Меню</div>
        <ul className = "nav__ul" style = { navUlDisplay }>
          <li><FGBLink type="menu-item" to="/">Главная</FGBLink></li>
          <li><FGBLink type="menu-item" to="/photos">Фото</FGBLink></li>
          <li className = "nav__li">
            <FGBLink type="menu-item" to="/info">Информация</FGBLink>
            <ul className = "nav__sub-ul">
              <li><FGBLink type="menu-sub-item" to = "/info/contacts">Контакты</FGBLink></li>
              <li><FGBLink type="menu-sub-item" to = "/info/ranks">Разряды</FGBLink></li>
              <li><FGBLink type="menu-sub-item" to = "/info/info-board">Доска информации</FGBLink></li>
              <li><FGBLink type="menu-sub-item" to = "/info/news">Новости</FGBLink></li>
            </ul>
          </li>
          <li><FGBLink type="menu-item" to="/players">Игроки</FGBLink></li>
          <li className = "nav__li">
            <FGBLink type="menu-item" to="/tournaments">Турниры</FGBLink>
            <ul className = "nav__sub-ul">
              <li><FGBLink type="menu-sub-item" to = "/tournaments/by-tournaments">Наши турниры</FGBLink></li>
              <li><FGBLink type="menu-sub-item" to = "/tournaments/world-champs">Чемпионаты мира</FGBLink></li>
              <li className = "nav__li">
                <FGBLink type="menu-sub-item" to = "/tournaments/euro-champs">Чемпионаты европы</FGBLink>
                <ul className = "nav__sub-ul nav__sub-sub-ul">
                  <li><FGBLink type="menu-sub-item" to = "/tournaments/euro-champs/personal">Индивидуальный</FGBLink></li>
                  <li><FGBLink type="menu-sub-item" to = "/tournaments/euro-champs/command">Командный</FGBLink></li>
                </ul>
              </li>
              <li className = "nav__li">
                <FGBLink type="menu-sub-item" to = "/tournaments/eu-2019-2020">Командный ЧЕ 2019-2020</FGBLink>
                <ul className = "nav__sub-ul nav__sub-sub-ul">
                  <li><FGBLink type="menu-sub-item" to = "/tournaments/eu-2019-2020/group/A">Группа А</FGBLink></li>
                  <li><FGBLink type="menu-sub-item" to = "/tournaments/eu-2019-2020/group/B">Группа B</FGBLink></li>
                  <li><FGBLink type="menu-sub-item" to = "/tournaments/eu-2019-2020/group/C">Группа C</FGBLink></li>
                  <li><FGBLink type="menu-sub-item" to = "/tournaments/eu-2019-2020/group/D">Группа D</FGBLink></li>
                </ul>
              </li>
              <li className = "nav__li">
                <FGBLink type="menu-sub-item" to = "/tournaments/eu-2020-2021">Командный ЧЕ 2020-2021</FGBLink>
                <ul className = "nav__sub-ul nav__sub-sub-ul">
                  <li><FGBLink type="menu-sub-item" to = "/tournaments/eu-2020-2021/group/A">Группа А</FGBLink></li>
                  <li><FGBLink type="menu-sub-item" to = "/tournaments/eu-2020-2021/group/B">Группа B</FGBLink></li>
                  <li><FGBLink type="menu-sub-item" to = "/tournaments/eu-2020-2021/group/C">Группа C</FGBLink></li>
                  <li><FGBLink type="menu-sub-item" to = "/tournaments/eu-2020-2021/group/D">Группа D</FGBLink></li>
                </ul>
              </li>
            </ul>
          </li>
          <li className = "nav__li">
            <FGBLink type="menu-item" to="/study">Обучение</FGBLink>
            <ul className = "nav__sub-ul">
              <li><FGBLink type="menu-sub-item" to = "/study/go-books">Книги по Го</FGBLink></li>
              <li className = "nav__li">
                <FGBLink type="menu-sub-item" to = "/study/go-courses">Обучающие курсы</FGBLink>
                <ul className = "nav__sub-ul nav__sub-sub-ul">
                  <li><FGBLink type="menu-sub-item" to = "/study/go-courses/welcome-to-go">Знакомство с игрой Го</FGBLink></li>
                </ul>
              </li>
              <li><FGBLink type="menu-sub-item" to = "/study/go-stories">Рассказы о Го</FGBLink></li>
              <li><FGBLink type="menu-sub-item" to = "/study/go-wiki">Справочник Го</FGBLink></li>
            </ul>
          </li>
          <li className = "nav__li">
            <FGBLink type="menu-item" to="/belarus">Беларусь</FGBLink>
            <ul className = "nav__sub-ul">
              <li><FGBLink type="menu-sub-item" to = "/belarus/minsk">Минск</FGBLink></li>
              <li><FGBLink type="menu-sub-item" to = "/belarus/brest">Брест</FGBLink></li>
              <li><FGBLink type="menu-sub-item" to = "/belarus/vitebsk">Витебск</FGBLink></li>
              <li><FGBLink type="menu-sub-item" to = "/belarus/gomel">Гомель</FGBLink></li>
              <li><FGBLink type="menu-sub-item" to = "/belarus/grodno">Гродно</FGBLink></li>
              <li><FGBLink type="menu-sub-item" to = "/belarus/mogilev">Могилёв</FGBLink></li>
            </ul>
          </li>
        </ul>
      </nav>
  );
}

export default Nav;