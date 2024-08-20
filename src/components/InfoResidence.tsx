import Chart from "chart.js/auto";
import { type LegacyRef, useEffect, useRef } from "react";
import styled from "styled-components";
import type { Data } from "../types";

const InfoResidence = ({ data }: { data: Data }) => {
  const { NON_RESNT_PPLTN_RATE, RESNT_PPLTN_RATE } = data;

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
        labels: ["상주", "비상주"],
        datasets: [
          {
            data: [RESNT_PPLTN_RATE, NON_RESNT_PPLTN_RATE],
            backgroundColor: ["rgba(172,61,160, 0.2)", "rgba(80,170,174, 0.2)"],
            borderColor: ["rgb(172,61,160)", "rgb(80,170,174)"],
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
    <StyledInfoResidence>
      <Title>상주/비상주 인구 비율</Title>
      <canvas ref={chartRef as LegacyRef<HTMLCanvasElement> | undefined} />
    </StyledInfoResidence>
  );
};

export default InfoResidence;

const StyledInfoResidence = styled.div`
  border: 1px solid lightgray;
  border-radius: 15px;
  padding: 20px;
`;

const Title = styled.h4`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 20px;
`;
