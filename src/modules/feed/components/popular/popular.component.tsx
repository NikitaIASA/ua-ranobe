import { FC } from "react";

import "./popular.component.scss";

interface PopularProps {
  image: string;
  title: string;
  author: string;
  rating: number;
  views: number;
}

export const Popular: FC<PopularProps> = ({
  image,
  title,
  author,
  rating,
  views,
}) => {
  return (
    <div className="popular-block">
      <img className="popular-block__image" src={image} alt="#" />
      <div className="popular-block__description">
        <p className="popular-block__title">{title}</p>
        <p className="popular-block__author">{author}</p>
        <div className="popular-block__statistics statistics">
          <p className="statistics__item">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="17"
              height="17"
              viewBox="0 0 17 17"
              fill="none"
            >
              <path
                d="M9.65327 2.83977L10.8266 5.18643C10.9866 5.5131 11.4133 5.82643 11.7733 5.88643L13.8999 6.23977C15.2599 6.46643 15.5799 7.4531 14.5999 8.42643L12.9466 10.0798C12.6666 10.3598 12.5133 10.8998 12.5999 11.2864L13.0733 13.3331C13.4466 14.9531 12.5866 15.5798 11.1533 14.7331L9.15994 13.5531C8.79994 13.3398 8.20661 13.3398 7.83994 13.5531L5.84661 14.7331C4.41994 15.5798 3.55327 14.9464 3.92661 13.3331L4.39994 11.2864C4.48661 10.8998 4.33327 10.3598 4.05327 10.0798L2.39994 8.42643C1.42661 7.4531 1.73994 6.46643 3.09994 6.23977L5.22661 5.88643C5.57994 5.82643 6.00661 5.5131 6.16661 5.18643L7.33994 2.83977C7.97994 1.56643 9.01994 1.56643 9.65327 2.83977Z"
                fill="#FB9649"
              />
            </svg>
            {rating}
          </p>
          <p className="statistics__item">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="17"
              height="17"
              viewBox="0 0 17 17"
              fill="none"
            >
              <path
                d="M10.8866 8.49995C10.8866 9.81995 9.81995 10.8866 8.49995 10.8866C7.17995 10.8866 6.11328 9.81995 6.11328 8.49995C6.11328 7.17995 7.17995 6.11328 8.49995 6.11328C9.81995 6.11328 10.8866 7.17995 10.8866 8.49995Z"
                fill="#FB9649"
                stroke="black"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M8.4999 14.0138C10.8532 14.0138 13.0466 12.6271 14.5732 10.2271C15.1732 9.28713 15.1732 7.70713 14.5732 6.76713C13.0466 4.36713 10.8532 2.98047 8.4999 2.98047C6.14656 2.98047 3.95323 4.36713 2.42656 6.76713C1.82656 7.70713 1.82656 9.28713 2.42656 10.2271C3.95323 12.6271 6.14656 14.0138 8.4999 14.0138Z"
                stroke="black"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            {views}
          </p>
        </div>
      </div>
    </div>
  );
};
