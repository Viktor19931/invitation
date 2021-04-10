import { useEffect, useState } from "react";

const SLIDE_INTERVAL = 5000;

export const useActiveSlide = () => {
  const [activeIndex, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex((prevState) => (prevState === 2 ? 0 : prevState + 1));
    }, SLIDE_INTERVAL);

    return () => clearInterval(intervalId);
  }, []);

  return activeIndex;
};
