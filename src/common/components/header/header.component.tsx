import { FC } from "react";
import { Link, NavLink } from "react-router-dom";
import { Container } from "../container/container.component";

import "./header.component.scss";

interface HeaderProps {}

export const Header: FC<HeaderProps> = () => {
  return (
    <header className="header">
      <Container>
        <div className="header__inner">
          <Link className="header__logo" to="/">УкрРанобе</Link>
          <nav>
            <ul className="header__list">
              <li>
                <NavLink className="header__link" to="/">Каталог</NavLink>
              </li>
              <li className="">
                <NavLink className="header__link" to="/new">Оновлення глав</NavLink>
              </li>
              <li className="ml-4">
                <NavLink className="header__link" to="/news">Новини</NavLink>
              </li>
            </ul>
          </nav>
          <div className="header__right-menu right-menu">
            <input className="header__search" type="text" placeholder="Пошук" />
            <Link className="right-menu__link" to="/">Вхід</Link>
            <Link className="right-menu__link right-menu__registration" to="/">Реєстрація</Link>
          </div>
        </div>
      </Container>
    </header>
  );
};
