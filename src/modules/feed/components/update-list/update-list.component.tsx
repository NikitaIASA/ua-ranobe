import { FC } from "react";
import { Link } from "react-router-dom";
import { Update } from "../update/update.component";

import { data } from "./data";

import "./update-list.component.scss";

interface UpdateListProps {
  //   list: FeedArticle[];
}

export const UpdateList: FC<UpdateListProps> = () => {
  return (
    <>
      <h2 className="title">Оновлення глав</h2>
      <div className="update-list">
        {data.map((update) => (
          <Update key={update.id} {...update} />
        ))}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="909"
          height="2"
          viewBox="0 0 909 2"
          fill="none"
        >
          <path
            d="M908.5 1.5C908.776 1.5 909 1.27614 909 1C909 0.723858 908.776 0.5 908.5 0.5V1.5ZM0.5 1.5H908.5V0.5H0.5V1.5Z"
            fill="#8D8D8D"
          />
        </svg>
        <Link className="update-list__more" to="/">
          Переглянути більше
        </Link>
      </div>
    </>
  );
};
