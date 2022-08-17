import styled, { keyframes } from "styled-components";

import { ReactComponent as WaveSVG } from "../assets/wave.svg";

import Fill from "./Fill";

const waveFront = keyframes`
100% {
    transform: translate(-50%, 0);
}
`;

const waveBack = keyframes`
100% {
    transform: translate(50%, 0);
}
`;

const Wave = styled(WaveSVG)`
  width: 200%;
  position: absolute;
  bottom: 100%;
  margin: -1px;
  &.front {
    fill: ${({ frontfill }) => frontfill};
    left: 0;
    animation: ${waveFront} 3s infinite linear;
  }
  &.back {
    fill: ${({ backfill }) => backfill};
    right: 0;
    animation: ${waveBack} 1.5s infinite linear;
  }
`;

const OffSet = styled(Fill)`
  transform: translate(
    0,
    ${({ percent }) => `${percent === 100 ? 110 : percent}%`}
  );
`;

const Liquid = ({ percent, bg, opacity, frontfill, backfill }) => {
  return (
    <OffSet percent={percent} bg={bg} opacity={opacity}>
      <Wave className="front" frontfill={frontfill}></Wave>
      <Wave className="back" backfill={backfill}></Wave>
    </OffSet>
  );
};

export default Liquid;
