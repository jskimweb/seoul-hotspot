import type { Data } from "../types";
import styled from "styled-components";
import { CircleHelp } from "lucide-react";
import { useState } from "react";
import CongestionModal from "./CongestionModal";
import { CONGESTIONS } from "../constants";

const InfoCongest = ({ data }: { data: Data }) => {
  const [isModalOpened, setIsModalOpened] = useState(false);

  const {
    AREA_NM,
    AREA_CONGEST_LVL,
    AREA_CONGEST_MSG,
    AREA_PPLTN_MAX,
    AREA_PPLTN_MIN,
    PPLTN_TIME,
  } = data;

  const color = CONGESTIONS.find(
    ({ level }) => level === AREA_CONGEST_LVL
  )?.color;

  const openModal = () => {
    setIsModalOpened(true);
  };
  const closeModal = () => {
    setIsModalOpened(false);
  };

  return (
    <StyledInfoCongest color={color}>
      <Time>{`${PPLTN_TIME} 기준`}</Time>
      <Spot>{`${AREA_NM}`}</Spot>
      <LevelWrapper>
        <Level color={color}>{AREA_CONGEST_LVL}</Level>
        <QuestionButton onClick={openModal}>
          <CircleHelp size={24} />
        </QuestionButton>
      </LevelWrapper>
      <Number>{`${AREA_PPLTN_MIN} ~ ${AREA_PPLTN_MAX} 명`}</Number>
      <Message>{`"${AREA_CONGEST_MSG}"`}</Message>
      <CongestionModal isModalOpened={isModalOpened} closeModal={closeModal} />
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
  border: 0.2rem solid ${({ color }) => color};

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

const LevelWrapper = styled.div`
  position: relative;
`;

const Level = styled.span`
  font-size: 3rem;
  font-weight: bold;
  color: ${({ color }) => color};

  @media screen and (min-width: 768px) {
    font-size: 4rem;
  }
`;

const QuestionButton = styled.button`
  position: absolute;
  right: -3.5rem;
  top: 50%;
  transform: translateY(-50%);
  color: gray;
  padding: 0.3rem;
  border-radius: 0.5rem;

  &:hover {
    background: rgba(0, 0, 0, 0.1);
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
  text-align: center;
  word-break: keep-all;

  @media screen and (min-width: 768px) {
    font-size: 1.6rem;
  }
`;
