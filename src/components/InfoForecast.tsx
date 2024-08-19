import type { Data } from "../types";
import "./InfoForecast.css";

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
    <div className="info-forecast">
      <h4 className="title">인구 추이 및 전망</h4>
      <div className="item-wrapper">
        {FCST_PPLTN.map((item) => {
          return (
            <div className="item">
              <span className="time">{item.FCST_TIME}</span>
              <span
                className={`level ${levelClassName(item.FCST_CONGEST_LVL)}`}
              >
                {item.FCST_CONGEST_LVL}
              </span>
              <span className="number">{`${item.FCST_PPLTN_MIN} ~ ${item.FCST_PPLTN_MAX} 명`}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default InfoForecast;
