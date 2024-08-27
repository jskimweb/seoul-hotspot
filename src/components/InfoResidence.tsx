import Chart from "chart.js/auto";
import { type LegacyRef, useEffect, useRef } from "react";
import type { Data } from "../types";
import InfoContainer from "./InfoContainer";

const InfoResidence = ({ data }: { data: Data }) => {
  const { NON_RESNT_PPLTN_RATE, RESNT_PPLTN_RATE, PPLTN_TIME } = data;

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
  }, [NON_RESNT_PPLTN_RATE, RESNT_PPLTN_RATE, data]);

  return (
    <InfoContainer title="상주/비상주 비율" time={PPLTN_TIME}>
      <canvas ref={chartRef as LegacyRef<HTMLCanvasElement> | undefined} />
    </InfoContainer>
  );
};

export default InfoResidence;
