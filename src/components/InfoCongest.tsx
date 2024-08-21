import type { Data } from "../types";
import styled from "styled-components";

const InfoCongest = ({ data }: { data: Data }) => {
  const {
    AREA_NM,
    AREA_CONGEST_LVL,
    AREA_CONGEST_MSG,
    AREA_PPLTN_MAX,
    AREA_PPLTN_MIN,
    PPLTN_TIME,
  } = data;
  const levelClassName =
    AREA_CONGEST_LVL === "여유"
      ? "level-1"
      : AREA_CONGEST_LVL === "보통"
      ? "level-2"
      : AREA_CONGEST_LVL === "약간 붐빔"
      ? "level-3"
      : "level-4";

  return (
    <StyledInfoCongest className={levelClassName}>
      <Time>{`${PPLTN_TIME} 기준`}</Time>
      <Spot>{`${AREA_NM}`}</Spot>
      <Level className={levelClassName}>{AREA_CONGEST_LVL}</Level>
      <span>{`${AREA_PPLTN_MIN} ~ ${AREA_PPLTN_MAX} 명`}</span>
      <span>{`"${AREA_CONGEST_MSG}"`}</span>
    </StyledInfoCongest>
  );
};

export default InfoCongest;

const StyledInfoCongest = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  margin-bottom: 30px;
  padding: 20px 30px 30px;
  border-radius: 15px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

  &.level-1 {
    border: 2px solid #28c21a;
  }

  &.level-2 {
    border: 2px solid #f9ca44;
  }

  &.level-3 {
    border: 2px solid #fb7625;
  }

  &.level-4 {
    border: 2px solid #ea0800;
  }
`;

const Time = styled.span`
  position: absolute;
  top: 15px;
  right: 15px;
  font-size: 13px;
  color: gray;
`;

const Spot = styled.h4`
  font-size: 18px;
`;

const Level = styled.span`
  font-size: 40px;
  font-weight: bold;

  &.level-1 {
    color: #28c21a;
  }

  &.level-2 {
    color: #f9ca44;
  }

  &.level-3 {
    color: #fb7625;
  }

  &.level-4 {
    color: #ea0800;
  }
`;
