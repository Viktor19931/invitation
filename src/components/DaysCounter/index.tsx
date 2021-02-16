import { FC, useEffect, useState } from "react";

import Wrapper from "./Wrapper";
import TimeCell from "./TimeCell";

const WEDDING_DAY = "2021/07/26";

const ONE_SECOND = 1000;
const ONE_MINUTE = ONE_SECOND * 60;
const ONE_HOUR = ONE_MINUTE * 60;
const ONE_DAY = ONE_HOUR * 24;

const useTime = (time: number) => {
  const dateStartWedding = new Date(WEDDING_DAY).getTime();

  const diffDates = dateStartWedding - time;
  const days = ~~(diffDates / ONE_DAY);
  const hours = ~~((diffDates % ONE_DAY) / ONE_HOUR);
  const minutes = ~~((diffDates % ONE_HOUR) / ONE_MINUTE);
  const seconds = ~~((diffDates % ONE_MINUTE) / ONE_SECOND);

  console.log("WWW diffDates ", [days, hours, minutes, seconds]);

  return [days, hours, minutes, seconds] as const;
};

const DaysCounter: FC = () => {
  const [now, setNow] = useState(Date.now());
  useEffect(() => {
    const timeId = setInterval(() => {
      setNow(Date.now());
    }, 1000);

    return () => {
      clearInterval(timeId);
    };
  }, []);

  const [days, hours, minutes, seconds] = useTime(now);

  return (
    <Wrapper>
      <TimeCell title="days" value={`${days}`.padStart(2, '0')} />
      <TimeCell title="hours" value={`${hours}`.padStart(2, '0')} />
      <TimeCell title="minutes" value={`${minutes}`.padStart(2, '0')} />
      <TimeCell title="seconds" value={`${seconds}`.padStart(2, '0')} />
    </Wrapper>
  );
};

export default DaysCounter;
