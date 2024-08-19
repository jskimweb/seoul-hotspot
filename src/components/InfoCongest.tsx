import type { Data } from "../types";
import "./InfoCongest.css";

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
    <div className={`info-congest ${levelClassName}`}>
      <span className="time">{`${PPLTN_TIME} 기준`}</span>
      <h4 className="spot">{`${AREA_NM}`}</h4>
      <span className={`level`}>{AREA_CONGEST_LVL}</span>
      <span className="number">{`${AREA_PPLTN_MIN} ~ ${AREA_PPLTN_MAX} 명`}</span>
      <span className="message">{`"${AREA_CONGEST_MSG}"`}</span>
    </div>
  );
};

export default InfoCongest;
