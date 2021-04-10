import { useEffect, useState } from "react";

const WEDDING_DAY = "2021/06/26";

const ONE_SECOND = 1000;
const ONE_MINUTE = ONE_SECOND * 60;
const ONE_HOUR = ONE_MINUTE * 60;
const ONE_DAY = ONE_HOUR * 24;

export const useTime = () => {
  const [time, setTime] = useState(Date.now());

  useEffect(() => {
    const timeId = setInterval(() => {
      setTime(Date.now());
    }, 1000);

    return () => {
      clearInterval(timeId);
    };
  }, []);

  const dateStartWedding = new Date(WEDDING_DAY).getTime();

  const diffDates = dateStartWedding - time;
  const days = ~~(diffDates / ONE_DAY);
  const hours = ~~((diffDates % ONE_DAY) / ONE_HOUR);
  const minutes = ~~((diffDates % ONE_HOUR) / ONE_MINUTE);
  const seconds = ~~((diffDates % ONE_MINUTE) / ONE_SECOND);

  return [days, hours, minutes, seconds] as const;
};
