import { Data } from "../types";
import { memo } from "react";
import "./Info.css";

const Info = ({ data }: { data: Data }) => {
  const {
    AREA_CONGEST_LVL,
    AREA_CONGEST_MSG,
    AREA_NM,
    AREA_PPLTN_MAX,
    AREA_PPLTN_MIN,
    FEMALE_PPLTN_RATE,
    MALE_PPLTN_RATE,
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

  const levelClassName =
    AREA_CONGEST_LVL === "여유"
      ? "level-1"
      : AREA_CONGEST_LVL === "보통"
      ? "level-2"
      : AREA_CONGEST_LVL === "약간 붐빔"
      ? "level-3"
      : "level-4";

  return (
    <div className="info">
      <div className={`congest-container ${levelClassName}`}>
        <h4 className="congest-spot">{AREA_NM}</h4>
        <span className={`congest-level ${levelClassName}`}>
          {AREA_CONGEST_LVL}
        </span>
        <span className="congest-message">{AREA_CONGEST_MSG}</span>
      </div>
      <p>{`인구 지표: ${AREA_PPLTN_MIN} ~ ${AREA_PPLTN_MAX}`}</p>
      <p>{`남녀 비율: ${MALE_PPLTN_RATE}%, ${FEMALE_PPLTN_RATE}%`}</p>
      <p>{`0~10대 비율: ${PPLTN_RATE_0}%`}</p>
      <p>{`10대 비율: ${PPLTN_RATE_10}%`}</p>
      <p>{`20대 비율: ${PPLTN_RATE_20}%`}</p>
      <p>{`30대 비율: ${PPLTN_RATE_30}%`}</p>
      <p>{`40대 비율: ${PPLTN_RATE_40}%`}</p>
      <p>{`50대 비율: ${PPLTN_RATE_50}%`}</p>
      <p>{`60대 비율: ${PPLTN_RATE_60}%`}</p>
      <p>{`70대 비율: ${PPLTN_RATE_70}%`}</p>
      <p>{`${PPLTN_TIME} 기준`}</p>
    </div>
  );
};

export default memo(Info);
