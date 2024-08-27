import type { Data } from "../types";
import { memo } from "react";
import InfoCongest from "./InfoCongest";
import InfoForecast from "./InfoForecast";
import InfoGender from "./InfoGender";
import InfoAge from "./InfoAge";
import InfoResidence from "./InfoResidence";
import styled from "styled-components";

const Info = ({ data }: { data: Data }) => {
  const {
    PPLTN_RATE_0,
    PPLTN_RATE_10,
    PPLTN_RATE_20,
    PPLTN_RATE_30,
    PPLTN_RATE_40,
    PPLTN_RATE_50,
    PPLTN_RATE_60,
    PPLTN_RATE_70,
    PPLTN_TIME,
  } = data;

  return (
    <StyledInfo>
      <InfoCongest data={data} />
      <InfoRateContainer>
        <InfoForecast data={data} />
        <InfoGender data={data} />
        <InfoAge
          data={[
            PPLTN_RATE_0,
            PPLTN_RATE_10,
            PPLTN_RATE_20,
            PPLTN_RATE_30,
            PPLTN_RATE_40,
            PPLTN_RATE_50,
            PPLTN_RATE_60,
            PPLTN_RATE_70,
          ]}
          time={PPLTN_TIME}
        />
        <InfoResidence data={data} />
      </InfoRateContainer>
    </StyledInfo>
  );
};

export default memo(Info);

const StyledInfo = styled.div`
  padding-top: 2rem;

  @media screen and (min-width: 768px) {
    padding-top: 3rem;
  }
`;

const InfoRateContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;

  & > * {
    width: 100%;
  }

  @media screen and (min-width: 768px) {
    gap: 3rem;
  }

  @media screen and (min-width: 1440px) {
    & > *:not(:first-child) {
      width: calc(50% - 30px / 2);
    }
  }
`;
