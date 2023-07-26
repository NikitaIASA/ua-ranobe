import { FC } from "react";
import { Link } from "react-router-dom";
import { TrendCard } from "../trend-card/trend-card.component";
import { Container } from "../../../../common/components/container/container.component";

import "./trend-list.component.scss";

import { data } from "./data";

interface TrendListProps {}

export const TrendList: FC<TrendListProps> = () => {
  return (
    <div className="trend-list">
      <Container>
        <div className="trend-list__top">
          <h2 className="trend-list__title">Трендові</h2>
          <Link className="trend-list__link" to="/">
            Переглянути більше
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="17"
              height="16"
              viewBox="0 0 17 16"
              fill="none"
            >
              <path
                d="M10.1202 3.95312L14.1668 7.99979L10.1202 12.0465M2.8335 7.99979H14.0535"
                stroke="#8D8D8D"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </Link>
        </div>
        <div className="trend-list__inner">
          {data.map((item) => (
            <TrendCard key={item.id} {...item} />
          ))}
        </div>
      </Container>
    </div>
  );
};
