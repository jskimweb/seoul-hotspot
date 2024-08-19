import type { Data } from "../types";
import { memo } from "react";
import "./Info.css";
import InfoCongest from "./InfoCongest";
import InfoGender from "./InfoGender";
import InfoAge from "./InfoAge";

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
    <div className="info">
      <InfoCongest data={data} />
      <div className="gender-and-age">
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
      </div>
    </div>
  );
};

export default memo(Info);
