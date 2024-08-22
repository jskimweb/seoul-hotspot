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
      <Number>{`${AREA_PPLTN_MIN} ~ ${AREA_PPLTN_MAX} 명`}</Number>
      <Message>{`"${AREA_CONGEST_MSG}"`}</Message>
    </StyledInfoCongest>
  );
};

export default InfoCongest;

const StyledInfoCongest = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  margin-bottom: 2rem;
  padding: 3rem 2rem 2rem;
  border-radius: 1.5rem;
  box-shadow: 0 0 1rem rgba(0, 0, 0, 0.1);

  &.level-1 {
    border: 0.2rem solid #28c21a;
  }

  &.level-2 {
    border: 0.2rem solid #f9ca44;
  }

  &.level-3 {
    border: 0.2rem solid #fb7625;
  }

  &.level-4 {
    border: 0.2rem solid #ea0800;
  }

  @media screen and (min-width: 768px) {
    margin-bottom: 3rem;
    padding: 2rem 3rem 3rem;
    padding: 3rem;
  }
`;

const Time = styled.span`
  position: absolute;
  top: 1rem;
  right: 1rem;
  font-size: 1rem;
  color: gray;

  @media screen and (min-width: 768px) {
    top: 1.5rem;
    right: 1.5rem;
    font-size: 1.3rem;
  }
`;

const Spot = styled.h4`
  font-size: 1.5rem;

  @media screen and (min-width: 768px) {
    font-size: 1.8rem;
  }
`;

const Level = styled.span`
  font-size: 3rem;
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

  @media screen and (min-width: 768px) {
    font-size: 4rem;
  }
`;

const Number = styled.span`
  font-size: 1.3rem;

  @media screen and (min-width: 768px) {
    font-size: 1.6rem;
  }
`;

const Message = styled.span`
  font-size: 1.3rem;
  line-height: 1.5;

  @media screen and (min-width: 768px) {
    font-size: 1.6rem;
  }
`;
