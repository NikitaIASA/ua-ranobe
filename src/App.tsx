import { FC } from "react";
import { Header } from "./common/components/header/header.component";
import { Banner } from "./common/components/banner/banner.components";
import { TrendList } from "./modules/feed/components/trend-list/trend-list.component";

interface AppProps {}

export const App: FC<AppProps> = () => {
  return (
    <div>
      <Header />
      <Banner />
      <TrendList />
    </div>
  );
};
