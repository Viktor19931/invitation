import { FC } from "react";

import Slider from "./components/Slider";
import WeddingDaySection from "./components/WeddingDaySection";
import Footer from "./components/Footer";
import GlobalStyles from "./styles/GlobalStyles";

const App: FC = () => (
  <div>
    <GlobalStyles />
    <Slider />
    <WeddingDaySection />
    <Footer />
  </div>
);

export default App;
