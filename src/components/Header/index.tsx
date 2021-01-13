import { useEffect, useState, FC } from "react";

import Wrapper, { BackgroundImage, BackgroundOverlay } from "./Wrapper";

const bgs = [
  "https://templatekit.hellokuro.com/kunikaa/wp-content/uploads/2020/10/bg-header-2-wedding-rings-PKSEZUT.jpg",
  "https://templatekit.hellokuro.com/kunikaa/wp-content/uploads/2020/10/bg-header-1-happy-newly-married-couple-with-boho-style-bouquet-N26JKP7.jpg",
  "https://templatekit.hellokuro.com/kunikaa/wp-content/uploads/2020/10/bg-header-3-wedding-couple-at-destination-wedding-ceremony-BKX4KXJ.jpg",
];

const SLIDE_INTERVAL = 5000;

const Header: FC = () => {
  const [activeIndex, setIndex] = useState(0);

  useEffect(() => {
    console.log(activeIndex);
  }, [activeIndex]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex((p) => (p === 2 ? 0 : p + 1));
    }, SLIDE_INTERVAL);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <Wrapper>
      <BackgroundOverlay />
      <Background activeIndex={activeIndex} />
    </Wrapper>
  );
};

type BackgroundProps = {
  activeIndex: number;
};

const Background: FC<BackgroundProps> = ({ activeIndex }) => {
  const [canAnimate, setCanAnimate] = useState(false);

  useEffect(() => {
    setTimeout(() => setCanAnimate(true), 0);

    return () => {
      setCanAnimate(false);
      setTimeout(() => {}, 0);
    };
  }, [activeIndex]);

  return (
    <BackgroundImage
      src={bgs[activeIndex]}
      {...{ canAnimate }}
      alt="header image"
    />
  );
};

export default Header;
