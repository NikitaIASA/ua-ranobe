import { FC } from "react";
import { Container } from "../container/container.component";
import banner from "../../../assets/banner.jpg";

import "./banner.component.scss";

interface BannerProps {}

export const Banner: FC<BannerProps> = () => {
  return (
    <div className="banner">
      <Container>
        <div className="banner__inner">
          <img className="banner__image" src={banner} alt="#" />
          <h1 className="banner__title">Бердянськ....</h1>
        </div>
      </Container>
    </div>
  );
};
