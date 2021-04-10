import { useEffect, useState, FC } from "react";

import Wrapper, {
  BackgroundImage,
  BackgroundOverlay,
  Title,
  Content,
  Subtitle,
} from "./Wrapper";

const bgs = [
  "https://templatekit.hellokuro.com/kunikaa/wp-content/uploads/2020/10/bg-header-2-wedding-rings-PKSEZUT.jpg",
  "https://templatekit.hellokuro.com/kunikaa/wp-content/uploads/2020/10/bg-header-1-happy-newly-married-couple-with-boho-style-bouquet-N26JKP7.jpg",
  "https://templatekit.hellokuro.com/kunikaa/wp-content/uploads/2020/10/bg-header-3-wedding-couple-at-destination-wedding-ceremony-BKX4KXJ.jpg",
];

const SLIDE_INTERVAL = 5000;

const Slider: FC = () => {
  const [activeIndex, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex((prevState) => (prevState === 2 ? 0 : prevState + 1));
    }, SLIDE_INTERVAL);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <Wrapper>
      <BackgroundOverlay />
      <Background {...{ activeIndex }} />
      <Content>
        <Subtitle>the wedding of</Subtitle>
        <Title as="h1">Viktor &Mariana</Title>
      </Content>
    </Wrapper>
  );
};

type BackgroundProps = {
  activeIndex: number;
};

const Background: FC<BackgroundProps> = ({ activeIndex }) => {
  const [canAnimate, setCanAnimate] = useState(false);

  useEffect(() => {
    setTimeout(() => setCanAnimate(true), 10);

    return () => {
      setTimeout(() => setCanAnimate(false), 0);
    };
  }, [activeIndex]);

  return (
    <BackgroundImage alt="rings" {...{ canAnimate }} src={bgs[activeIndex]} />
  );
};

export default Slider;
