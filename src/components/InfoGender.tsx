import { type LegacyRef, useEffect, useRef } from "react";
import Chart from "chart.js/auto";
import type { Data } from "../types";
import InfoContainer from "./InfoContainer";

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
  }, [FEMALE_PPLTN_RATE, MALE_PPLTN_RATE, data]);

  return (
    <InfoContainer title="성별 비율">
      <canvas ref={chartRef as LegacyRef<HTMLCanvasElement> | undefined} />
    </InfoContainer>
  );
};

export default InfoGender;
