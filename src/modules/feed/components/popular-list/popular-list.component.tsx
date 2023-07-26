import { FC } from "react";
import { Link } from "react-router-dom";
import { Popular } from "../popular/popular.component";

import { data } from "./data";

import "./popular-list.component.scss";

interface PopularListProps {}

export const PopularList: FC<PopularListProps> = () => {
  return (
    <>
      <h2 className="popular-list__title">Популярні</h2>
      <div className="popular-list">
        {data.map((popular) => (
          <Popular key={popular.id} {...popular} />
        ))}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="406"
          height="2"
          viewBox="0 0 406 2"
          fill="none"
        >
          <path
            d="M405.5 1.5C405.776 1.5 406 1.27614 406 1C406 0.723858 405.776 0.5 405.5 0.5V1.5ZM0.5 1.5H405.5V0.5H0.5V1.5Z"
            fill="#8D8D8D"
          />
        </svg>
        <Link className="popular-list__more" to="/">
          Переглянути більше
        </Link>
      </div>
    </>
  );
};
