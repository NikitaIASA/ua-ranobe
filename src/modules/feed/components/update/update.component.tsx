import { FC } from "react";
import { Link } from "react-router-dom";

import "./update.component.scss";

interface UpdateProps {
  image: string;
  title: string;
  chapters: { title: string; date: string }[];
}

export const Update: FC<UpdateProps> = ({
  image,
  title,
  chapters,
}) => {
  return (
    <div className="update-block">
      <img className="update-block__image" src={image} alt="#" />
      <div className="update-block__description">
        <h3 className="update-block__title">{title}</h3>
        <ul className="update-block__chapters">
          {chapters.map((chapter, index) => (
            <li key={index} className="chapter">
              <Link className="chapter__title" to="/">
                {chapter.title}
              </Link>
              <p className="chapter__date">{chapter.date}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
