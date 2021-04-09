import { FC } from "react";

import Slider from "./components/Slider";
import WeddingDaySection from "./components/WeddingDaySection";
import Footer from "./components/Footer";
import GuestForm from "./components/GuestForm";
import GlobalStyles from "./styles/GlobalStyles";

const App: FC = () => (
  <div>
    <GlobalStyles />
    <Slider />
    <WeddingDaySection />
    <GuestForm />
    <Footer />
  </div>
);

export default App;
