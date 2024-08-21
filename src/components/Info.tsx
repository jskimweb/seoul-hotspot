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
        />
        <InfoResidence data={data} />
      </InfoRateContainer>
    </StyledInfo>
  );
};

export default memo(Info);

const StyledInfo = styled.div`
  padding-top: 30px;
`;

const InfoRateContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 30px;

  & > *:first-child {
    grid-area: 1 / 1 / 2 / 3;
  }
`;
