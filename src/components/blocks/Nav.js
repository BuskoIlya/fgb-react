import React from 'react';
import { NavLink } from 'react-router-dom';

import './Nav.css';

const setClass = ({ isActive }) => isActive ? "nav__item nav__item_active" : "nav__item";

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
          <li><NavLink className = { setClass } to = "/">Главная</NavLink></li>
          <li><NavLink className = { setClass } to = "/photos">Фото</NavLink></li>
          <li className = "nav__li">
            <NavLink className = { setClass } to = "/info">Информация</NavLink>
            <ul className = "nav__sub-ul">
              <li><NavLink className = "nav__sub-item" to = "/info/contacts">Контакты</NavLink></li>
              <li><NavLink className = "nav__sub-item" to = "/info/ranks">Разряды</NavLink></li>
              <li><NavLink className = "nav__sub-item" to = "/info/info-board">Доска информации</NavLink></li>
              <li><NavLink className = "nav__sub-item" to = "/info/news">Новости</NavLink></li>
            </ul>
          </li>
          <li><NavLink className = { setClass } to = "/players">Игроки</NavLink></li>
          <li className = "nav__li">
            <NavLink className = { setClass }  to = "/tournaments">Турниры</NavLink>
            <ul className = "nav__sub-ul">
              <li><NavLink className = "nav__sub-item" to = "/tournaments/by-tournaments">Наши турниры</NavLink></li>
              <li><NavLink className = "nav__sub-item" to = "/tournaments/world-championships">Чемпионаты мира</NavLink></li>
              <li><NavLink className = "nav__sub-item" to = "/tournaments/euro-championships">Чемпионаты европы</NavLink></li>
              <li><NavLink className = "nav__sub-item" to = "/tournaments/eu-2019-2020">Командный ЧЕ 2019-2020</NavLink></li>
              <li><NavLink className = "nav__sub-item" to = "/tournaments/eu-2019-2020">Командный ЧЕ 2020-2021</NavLink></li>
            </ul>
          </li>
          <li className = "nav__li">
            <NavLink className = { setClass } to = "/study">Обучение</NavLink>
            <ul className = "nav__sub-ul">
              <li><NavLink className = "nav__sub-item" to = "/study/go-schools">Школы Го</NavLink></li>
              <li><NavLink className = "nav__sub-item" to = "/study/go-books">Книги по Го</NavLink></li>
              <li><NavLink className = "nav__sub-item" to = "/study/go-courses">Обучающие курсы</NavLink></li>
              <li><NavLink className = "nav__sub-item" to = "/study/go-stories">Рассказы о Го</NavLink></li>
              <li><NavLink className = "nav__sub-item" to = "/study/go-wiki">Справочник Го</NavLink></li>
            </ul>
          </li>
          <li className = "nav__li">
            <NavLink className = { setClass } to = "/belarus">Беларусь</NavLink>
            <ul className = "nav__sub-ul">
              <li><NavLink className = "nav__sub-item" to = "/belarus/minsk">Минск</NavLink></li>
              <li><NavLink className = "nav__sub-item" to = "/belarus/brest">Брест</NavLink></li>
              <li><NavLink className = "nav__sub-item" to = "/belarus/vitebsk">Витебск</NavLink></li>
              <li><NavLink className = "nav__sub-item" to = "/belarus/gomel">Гомель</NavLink></li>
              <li><NavLink className = "nav__sub-item" to = "/belarus/grodno">Гродно</NavLink></li>
              <li><NavLink className = "nav__sub-item" to = "/belarus/mogilev">Могилёв</NavLink></li>
            </ul>
          </li>
        </ul>
      </nav>
  );
}

export default Nav;