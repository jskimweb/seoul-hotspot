import type { Data } from "../types";
import { memo } from "react";
import InfoCongest from "./InfoCongest";
import InfoForecast from "./InfoForecast";
import InfoGender from "./InfoGender";
import InfoAge from "./InfoAge";
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
      <InfoForecast data={data} />
      <GenderAndAge>
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
      </GenderAndAge>
    </StyledInfo>
  );
};

export default memo(Info);

const StyledInfo = styled.div`
  padding-top: 20px;
`;

const GenderAndAge = styled.div`
  display: flex;
  gap: 20px;
`;