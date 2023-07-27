import { FC } from "react";
import { Link } from "react-router-dom";
 
import "./news-item.component.scss";

interface NewItemProps {
  date: string;
  title: string;
  description: string;
}


export const NewItem: FC<NewItemProps> = ({ date, title, description }) => {
  return (
    <div className="news-item">
      <p className="news-item__date">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="17"
          height="17"
          viewBox="0 0 17 17"
          fill="none"
        >
          <path
            d="M5.83333 1.83301V3.83301M11.1667 1.83301V3.83301M2.83333 6.55967H14.1667M14.5 6.16634V11.833C14.5 13.833 13.5 15.1663 11.1667 15.1663H5.83333C3.5 15.1663 2.5 13.833 2.5 11.833V6.16634C2.5 4.16634 3.5 2.83301 5.83333 2.83301H11.1667C13.5 2.83301 14.5 4.16634 14.5 6.16634Z"
            stroke="#8D8D8D"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M10.9633 9.63379H10.9693M10.9633 11.6338H10.9693M8.49663 9.63379H8.5033M8.49663 11.6338H8.5033M6.0293 9.63379H6.03596M6.0293 11.6338H6.03596"
            stroke="#8D8D8D"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        {date}
      </p>
      <Link className="news-item__information" to="/">
        <p className="news-items__title">{title}</p>
        <p className="news-item__description">{description}</p>
      </Link>
    </div>
  );
};
