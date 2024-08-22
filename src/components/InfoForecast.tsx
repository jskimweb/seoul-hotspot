import type { Data } from "../types";
import styled from "styled-components";
import InfoContainer from "./InfoContainer";

const InfoForecast = ({ data }: { data: Data }) => {
  const { FCST_PPLTN } = data;
  const levelClassName = (level: string) => {
    return level === "여유"
      ? "level-1"
      : level === "보통"
      ? "level-2"
      : level === "약간 붐빔"
      ? "level-3"
      : "level-4";
  };

  return (
    <InfoContainer title="인구 추이 및 전망">
      <ItemWrapper>
        {FCST_PPLTN.map((item) => {
          return (
            <Item key={item.FCST_TIME}>
              <Time>{item.FCST_TIME}</Time>
              <Level className={levelClassName(item.FCST_CONGEST_LVL)}>
                {item.FCST_CONGEST_LVL}
              </Level>
              <span>{`${item.FCST_PPLTN_MIN} ~ ${item.FCST_PPLTN_MAX} 명`}</span>
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
  grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
  gap: 3rem;
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
`;

const Level = styled.span`
  font-size: 1.8rem;
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
