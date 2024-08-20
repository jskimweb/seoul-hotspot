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
              "rgba(255, 99, 132, 0.2)",
              "rgba(255, 159, 64, 0.2)",
              "rgba(255, 205, 86, 0.2)",
              "rgba(75, 192, 192, 0.2)",
              "rgba(54, 162, 235, 0.2)",
              "rgba(153, 102, 255, 0.2)",
              "rgba(201, 203, 207, 0.2)",
              "rgba(201, 203, 207, 0.2)",
            ],
            borderColor: [
              "rgb(255, 99, 132)",
              "rgb(255, 159, 64)",
              "rgb(255, 205, 86)",
              "rgb(75, 192, 192)",
              "rgb(54, 162, 235)",
              "rgb(153, 102, 255)",
              "rgb(201, 203, 207)",
              "rgb(201, 203, 207)",
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
  width: 50%;
  border: 1px solid lightgray;
  border-radius: 15px;
  padding: 20px;
`;

const Title = styled.h4`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 20px;
`;
