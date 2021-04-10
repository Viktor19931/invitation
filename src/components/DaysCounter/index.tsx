import { FC } from "react";

import Wrapper from "./Wrapper";
import TimeCell from "./TimeCell";
import { useTime } from "./hooks";

const DaysCounter: FC = () => {
  const [days, hours, minutes, seconds] = useTime();

  return (
    <Wrapper>
      <TimeCell title="days" value={`${days}`.padStart(2, "0")} />
      <TimeCell title="hours" value={`${hours}`.padStart(2, "0")} />
      <TimeCell title="minutes" value={`${minutes}`.padStart(2, "0")} />
      <TimeCell title="seconds" value={`${seconds}`.padStart(2, "0")} />
    </Wrapper>
  );
};

export default DaysCounter;
