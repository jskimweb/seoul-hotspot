import type { Data, Response, NormalResponse } from "../types";
import { useQuery } from "@tanstack/react-query";

const fetchSeoulPopulation = async (spot: string) => {
  const response = await fetch(
    `/api/seoul?location=${encodeURIComponent(spot)}`
  );
  const data: Response = await response.json();

  if ("CODE" in data.RESULT) {
    throw new Error(data.RESULT.MESSAGE);
  }

  return (data as NormalResponse)["SeoulRtd.citydata_ppltn"][0];
};

export const useSeoulPopulation = (spot: string) => {
  const { data, isLoading } = useQuery<Data>({
    queryKey: ["seoulPopulation", spot],
    queryFn: () => fetchSeoulPopulation(spot),
    enabled: !!spot,
  });

  return { data, isLoading };
};
