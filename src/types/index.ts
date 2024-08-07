export interface NormalResponse {
  RESULT: { "RESULT.CODE": "INFO-000" | "INFO-200"; "RESULT.MESSAGE": string };
  "SeoulRtd.citydata_ppltn": [Data];
}

interface ErrorResponse {
  RESULT: { CODE: string; MESSAGE: string };
}

export type Response = NormalResponse | ErrorResponse;

export interface Data {
  AREA_CD: string; // 핫스팟 코드명
  AREA_CONGEST_LVL: string; // 장소 혼잡도 지표
  AREA_CONGEST_MSG: string; // 장소 혼합도 지표 관련 메세지
  AREA_NM: string; // 핫스팟 장소명
  AREA_PPLTN_MAX: string; // 실시간 인구 지표 최대값
  AREA_PPLTN_MIN: string; // 실시간 인구 지표 최소값
  FCST_PPLTN: {
    FCST_CONGEST_LVL: string; // 장소 예측 혼합도 지표
    FCST_PPLTN_MAX: string; // 예측 실시간 인구 지표 최대값
    FCST_PPLTN_MIN: string; // 예측 실시간 인구 지표 최소값
    FCST_TIME: string; // 인구 예측시점
  }[]; // 예측 인구 오브젝트
  FCST_YN: "Y" | "N"; // 예측값 제공 여부
  FEMALE_PPLTN_RATE: string; // 여성 인구 비율
  MALE_PPLTN_RATE: string; // 남성 인구 비율
  NON_RESNT_PPLTN_RATE: string; // 비상주 인구 비율
  PPLTN_RATE_0: string; // 0~10대 인구 비율
  PPLTN_RATE_10: string; // 10대 인구 비율
  PPLTN_RATE_20: string; // 20대 인구 비율
  PPLTN_RATE_30: string; // 30대 인구 비율
  PPLTN_RATE_40: string; // 40대 인구 비율
  PPLTN_RATE_50: string; // 50대 인구 비율
  PPLTN_RATE_60: string; // 60대 인구 비율
  PPLTN_RATE_70: string; // 70대 인구 비율
  PPLTN_TIME: string; // 실시간 인구 데이터 업데이트 시간
  REPLACE_YN: "Y" | "N"; // 대체 데이터 여부
  RESNT_PPLTN_RATE: string; // 상주 인구 비율
}
