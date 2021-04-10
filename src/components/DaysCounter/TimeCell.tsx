import { FC } from "react";

import { CellWrapper, TimeTitle, TimeSubtitle } from "./Wrapper";

type TimeCellProps = {
  title: string;
  value: number;
};

const TimeCell: FC<TimeCellProps> = ({ title, value }) => {
  return (
    <CellWrapper>
      <TimeTitle>{`${value}`.padStart(2, "0")}</TimeTitle>
      <TimeSubtitle>{title}</TimeSubtitle>
    </CellWrapper>
  );
};

export default TimeCell;
