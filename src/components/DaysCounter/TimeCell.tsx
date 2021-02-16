import { FC } from "react";

import { CellWrapper, TimeTitle, TimeSubtitle } from "./Wrapper";

type TimeCellProps = {
  title: string;
  value: string;
};

const TimeCell: FC<TimeCellProps> = ({ title, value }) => {
  return (
    <CellWrapper>
      <TimeTitle>{value}</TimeTitle>
      <TimeSubtitle>{title}</TimeSubtitle>
    </CellWrapper>
  );
};

export default TimeCell;
