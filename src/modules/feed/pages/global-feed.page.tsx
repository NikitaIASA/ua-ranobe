import { FC } from "react";
import { Container } from "../../../common/components/container/container.component";
import { Banner } from "../../../common/components/banner/banner.components";
import { UpdateList } from "../components/update-list/update-list.component";
import { TrendList } from "../components/trend-list/trend-list.component";

import "./global-feed.page.scss";

interface GlobalFeedPageProps {}

export const GlobalFeedPage: FC<GlobalFeedPageProps> = () => {
  return (
    <>
      <Container>
        <Banner />
        <TrendList/>
        <div className="flex">
          <div className="w-65">
            <UpdateList/>
          </div>
          <div className="w-28">
           
          </div>
        </div>
      </Container>
    </>
  );
};
