import { FC } from "react";
import { NewItem } from "../news-item/news-item.component";

import { data } from "./data";

import "./newst-list.component.scss";

interface NewsListProps {}

export const NewsList: FC<NewsListProps> = () => {
  return (
    <>
      <h3 className="news-list__title">Новини і оновлення сайту</h3>
      <div className="news-list">
        {data.map((item) => (
          <NewItem key={item.id} {...item} />
        ))}
      </div>
    </>
  );
};
