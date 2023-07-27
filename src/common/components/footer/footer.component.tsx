import { FC } from "react";
import { Link } from "react-router-dom";
import { Container } from "../container/container.component";

import "./footer.component.scss";

interface FooterProps {}

export const Footer: FC<FooterProps> = () => {
  return (
    <footer className="footer">
      <Container>
        <div className="footer__inner">
          <h2 className="footer__logo">УкрРанобе</h2>
          <div className="footer__col">
            <h3 className="footer__title">Навігація</h3>
            <ul className="footer__list">
              <li>
                <Link className="footer__link" to="/">
                  Каталог
                </Link>
              </li>
              <li>
                <Link className="footer__link" to="/">
                  Оновлення глав
                </Link>
              </li>
              <li>
                <Link className="footer__link" to="/">
                  Новини сайту
                </Link>
              </li>
            </ul>
          </div>
          <div className="footer__col">
            <h3 className="footer__title">Допомога</h3>
            <ul className="footer__list">
              <li>
                <Link className="footer__link" to="/">
                  Правила
                </Link>
              </li>
              <li>
                <Link className="footer__link" to="/">
                  Журнал модерації
                </Link>
              </li>
            </ul>
          </div>
          <div className="footer__col">
            <h3 className="footer__title">Контакти</h3>
            <ul className="footer__list">
              <li>
                <Link className="footer__link" to="/">
                  ukrranobe220@gmail.com
                </Link>
              </li>
              <li>
                <Link className="footer__link" to="/">
                  +38 066 228 14 88
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </footer>
  );
};
