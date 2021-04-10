import { FC } from "react";

import Slider from "./components/Slider";
import WeddingDaySection from "./components/WeddingDaySection";
import Footer from "./components/Footer";
import Planning from "./components/Planning";
import GuestForm from "./components/GuestForm";
import VideoSection from "./components/VideoSection";
import GlobalStyles from "./styles/GlobalStyles";

const App: FC = () => (
  <main>
    <GlobalStyles />
    <Slider />
    <WeddingDaySection />
    <VideoSection />
    <Planning />
    <GuestForm />
    <Footer />
  </main>
);

export default App;
