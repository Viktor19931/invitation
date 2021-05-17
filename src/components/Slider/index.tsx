import { useEffect, useState, FC } from "react";

import Wrapper, {
  BackgroundImage,
  BackgroundOverlay,
  Title,
  Content,
  Subtitle,
} from "./Wrapper";
import { useActiveSlide } from "./hooks";
import isMobile from "../../helpers/isMobile";

import bg1_mob from "../../static/images/bg1-mob.png";
import bg2_mob from "../../static/images/bg2-mob.png";
import bg3_mob from "../../static/images/bg3-mob.png";
import bg1_des from "../../static/images/bg1-des.jpg";
import bg2_des from "../../static/images/bg2-des.jpg";
import bg3_des from "../../static/images/bg3-des.jpg";

const bgs_mob = [bg2_mob, bg3_mob, bg1_mob];
const bgs_des = [bg1_des, bg2_des, bg3_des];

const bgs = isMobile() ? bgs_mob : bgs_des;

const Slider: FC = () => {
  const activeIndex = useActiveSlide();

  return (
    <Wrapper>
      <BackgroundOverlay />
      <Background {...{ activeIndex }} />
      <Content>
        <Subtitle>Запрошуємо на весілля</Subtitle>
        <Title as="h1">Віктора & Мар'яни</Title>
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
