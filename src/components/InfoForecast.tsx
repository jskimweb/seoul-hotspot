import type { Data } from "../types";
import styled from "styled-components";

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
    <StyledInfoForecast>
      <Title>인구 추이 및 전망</Title>
      <ItemWrapper>
        {FCST_PPLTN.map((item) => {
          return (
            <Item>
              <Time>{item.FCST_TIME}</Time>
              <Level className={levelClassName(item.FCST_CONGEST_LVL)}>
                {item.FCST_CONGEST_LVL}
              </Level>
              <span>{`${item.FCST_PPLTN_MIN} ~ ${item.FCST_PPLTN_MAX} 명`}</span>
            </Item>
          );
        })}
      </ItemWrapper>
    </StyledInfoForecast>
  );
};

export default InfoForecast;

const StyledInfoForecast = styled.div`
  margin-bottom: 20px;
`;

const Title = styled.h4`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 20px;
`;

const ItemWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
`;

const Item = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  padding: 20px;
  border: 1px solid lightgray;
  border-radius: 15px;
`;

const Time = styled.span`
  font-size: 13px;
  color: gray;
`;

const Level = styled.span`
  font-size: 18px;
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
