import { type LegacyRef, useEffect, useRef } from "react";
import Chart from "chart.js/auto";
import styled from "styled-components";

const InfoAge = ({ data }: { data: string[] }) => {
  const chartRef = useRef<HTMLCanvasElement>();

  useEffect(() => {
    const ctx = chartRef.current?.getContext("2d");

    if (!ctx) return;

    const chart = new Chart(ctx, {
      type: "bar",
      options: {
        indexAxis: "y",
        plugins: {
          legend: {
            display: false,
          },
        },
      },
      data: {
        labels: [
          "10대 미만",
          "10대",
          "20대",
          "30대",
          "40대",
          "50대",
          "60대",
          "70대 이상",
        ],
        datasets: [
          {
            data,
            backgroundColor: [
              "rgba(102, 204, 255, 0.2)",
              "rgba(0, 153, 204, 0.2)",
              "rgba(51, 204, 51, 0.2)",
              "rgba(0, 153, 51, 0.2)",
              "rgba(255, 204, 51, 0.2)",
              "rgba(255, 153, 51, 0.2)",
              "rgba(255, 102, 102, 0.2)",
              "rgba(204, 51, 51, 0.2)",
            ],
            borderColor: [
              "rgb(102, 204, 255)",
              "rgb(0, 153, 204)",
              "rgb(51, 204, 51)",
              "rgb(0, 153, 51)",
              "rgb(255, 204, 51)",
              "rgb(255, 153, 51)",
              "rgb(255, 102, 102)",
              "rgb(204, 51, 51)",
            ],
            borderWidth: 2,
          },
        ],
      },
    });

    return () => {
      chart.destroy();
    };
  }, [data]);

  return (
    <StyledInfoAge>
      <Title>연령대별 인구 비율</Title>
      <canvas ref={chartRef as LegacyRef<HTMLCanvasElement> | undefined} />
    </StyledInfoAge>
  );
};

export default InfoAge;

const StyledInfoAge = styled.div`
  border: 1px solid lightgray;
  border-radius: 15px;
  padding: 20px;
`;

const Title = styled.h4`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 20px;
`;
