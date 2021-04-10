import { FC, useRef } from "react";

import Wrapper, { PlayerContainer } from "./Wrapper";

const VideoSection: FC = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  return (
    <Wrapper>
      <PlayerContainer {...{ ref }}>
        <div
          {...{ ref }}
          className="wave_embed"
          data-id="6071e15946e0fb000127ae77"
        />
      </PlayerContainer>
    </Wrapper>
  );
};

export default VideoSection;
