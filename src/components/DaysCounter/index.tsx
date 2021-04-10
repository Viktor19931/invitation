import { FC } from "react";

import Wrapper from "./Wrapper";
import TimeCell from "./TimeCell";
import { useTime } from "./hooks";

const DaysCounter: FC = () => {
  const [days, hours, minutes, seconds] = useTime();

  return (
    <Wrapper>
      <TimeCell title="днів" value={days} />
      <TimeCell title="годин" value={hours} />
      <TimeCell title="хвилин" value={minutes} />
      <TimeCell title="секунд" value={seconds} />
    </Wrapper>
  );
};

export default DaysCounter;
