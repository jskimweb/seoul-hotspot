# 서울 핫스팟
![image](https://github.com/user-attachments/assets/aeb2f259-84b6-4a51-b0c3-24d846e57699)  
https://seoul-hotspot.vercel.app

## 소개

이 웹사이트는 서울시의 실시간 인구데이터를 기반으로, 서울시 내 주요 명소들의 실시간 인구 혼잡도와 최대 12시간 이후까지의 예측 혼잡도를 제공하는 React 웹 애플리케이션입니다. 사용자는 명소별 현재 인구의 성별 비율, 연령 비율, 그리고 상주/비상주 비율을 시각화된 차트로 확인할 수 있습니다.

## 주요 기능

- **실시간 인구 혼잡도**: 서울시의 주요 명소 실시간 인구 혼잡도를 확인할 수 있습니다.
- **혼잡도 예측**: 최대 12시간 이후까지의 인구 혼잡도를 예측하여 사용자에게 제공합니다.
- **성별 비율**: 현재 명소의 실시간 인구 성별 비율을 막대차트로 시각화합니다.
- **연령 비율**: 현재 명소의 실시간 인구 연령 비율을 막대차트로 시각화합니다.
- **상주/비상주 비율**: 명소에 있는 인구 중 상주 인구와 비상주 인구의 비율을 막대차트로 시각화합니다.
- **반응형 웹 디자인**: 다양한 기기에서 원활하게 사용할 수 있도록 반응형으로 설계되었습니다.
- **명소 변경**:
  - **카카오맵 마커 클릭**: 카카오맵 상의 마커를 클릭하여 명소를 변경할 수 있습니다.
  - **검색 기능**: '/search' 페이지로 이동하여 원하는 명소를 검색할 수 있습니다.
  - **명소 리스트 선택**: 명소 리스트 중 하나를 선택하여 해당 명소로 변경할 수 있습니다.

## 기술 스택

- **Frontend**: React, Typescript
- **Data Fetching**: React Query, axios
- **Charting**: Chart.js
- **Deployment**: Vercel
- **CSS** : Styled Components

## 스크린샷
| '/' | '/search' |
| -- | -- |
| ![seoul-hotspot vercel app_](https://github.com/user-attachments/assets/6802298a-428b-487e-ae7b-4b38133e4c75) | ![seoul-hotspot vercel app_ (1)](https://github.com/user-attachments/assets/65a49930-320f-4197-aa8d-ee018545a763) |
