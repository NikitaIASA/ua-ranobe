import { FC } from "react";
import { Header } from "./common/components/header/header.component";
import { Footer } from "./common/components/footer/footer.component";
import { GlobalFeedPage } from "./modules/feed/pages/global-feed.page";
interface AppProps {}

export const App: FC<AppProps> = () => {
  return (
    <div>
      <Header />
      <GlobalFeedPage />
      <Footer />
    </div>
  );
};
