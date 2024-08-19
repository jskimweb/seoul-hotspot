import type { Data } from "../types";
import { memo } from "react";
import "./Info.css";
import InfoCongest from "./InfoCongest";
import InfoAge from "./InfoAge";

const Info = ({ data }: { data: Data }) => {
  const {
    // FEMALE_PPLTN_RATE,
    // MALE_PPLTN_RATE,
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
    <div className="info">
      <InfoCongest data={data} />
      {/* <p>{`남녀 비율: ${MALE_PPLTN_RATE}%, ${FEMALE_PPLTN_RATE}%`}</p> */}
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
    </div>
  );
};

export default memo(Info);
