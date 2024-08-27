import type { Data } from "../types";
import styled from "styled-components";
import InfoContainer from "./InfoContainer";
import { CONGESTIONS } from "../constants/index";

const InfoForecast = ({ data }: { data: Data }) => {
  const { FCST_PPLTN } = data;

  return (
    <InfoContainer title="예측 혼잡도">
      <ItemWrapper>
        {FCST_PPLTN.map((item) => {
          return (
            <Item key={item.FCST_TIME}>
              <Time>{item.FCST_TIME}</Time>
              <Level
                color={
                  CONGESTIONS.find(
                    ({ level }) => level === item.FCST_CONGEST_LVL
                  )?.color
                }
              >
                {item.FCST_CONGEST_LVL}
              </Level>
              <Number>{`${item.FCST_PPLTN_MIN} ~ ${item.FCST_PPLTN_MAX} 명`}</Number>
            </Item>
          );
        })}
      </ItemWrapper>
    </InfoContainer>
  );
};

export default InfoForecast;

const ItemWrapper = styled.div`
  display: grid;
  gap: 2rem;

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(30rem, 1fr));
    gap: 3rem;
  }

  @media screen and (min-width: 1024px) {
    grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
  }
`;

const Item = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  padding: 1.5rem;
  border-radius: 1.5rem;
  box-shadow: 0 0 1rem rgba(0, 0, 0, 0.1);
`;

const Time = styled.span`
  font-size: 1.3rem;
  color: gray;

  @media screen and (min-width: 768px) {
    font-size: 1.5rem;
  }
`;

const Level = styled.span`
  font-size: 1.8rem;
  font-weight: bold;
  color: ${({ color }) => color};
`;

const Number = styled.span`
  font-size: 1.3rem;

  @media screen and (min-width: 768px) {
    font-size: 1.5rem;
  }
`;
