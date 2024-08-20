import { type LegacyRef, useEffect, useRef } from "react";
import Chart from "chart.js/auto";
import type { Data } from "../types";
import styled from "styled-components";

const InfoGender = ({ data }: { data: Data }) => {
  const { FEMALE_PPLTN_RATE, MALE_PPLTN_RATE } = data;

  const chartRef = useRef<HTMLCanvasElement>();

  useEffect(() => {
    const ctx = chartRef.current?.getContext("2d");

    if (!ctx) return;

    const chart = new Chart(ctx, {
      type: "bar",
      options: {
        plugins: {
          legend: {
            display: false,
          },
        },
      },
      data: {
        labels: ["남성", "여성"],
        datasets: [
          {
            data: [MALE_PPLTN_RATE, FEMALE_PPLTN_RATE],
            backgroundColor: [
              "rgba(54, 162, 235, 0.2)",
              "rgba(255, 99, 132, 0.2)",
            ],
            borderColor: ["rgb(54, 162, 235)", "rgb(255, 99, 132)"],
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
    <StyledInfoGender>
      <Title>성별 인구 비율</Title>
      <canvas ref={chartRef as LegacyRef<HTMLCanvasElement> | undefined} />
    </StyledInfoGender>
  );
};

export default InfoGender;

const StyledInfoGender = styled.div`
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
