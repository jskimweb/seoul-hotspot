import { useState, useCallback } from "react";
import type { Data, Response, NormalResponse } from "../types";

export const useFetchData = () => {
  const [data, setData] = useState<Data>();

  const fetchData = useCallback(async (location: string) => {
    try {
      const response = await fetch(
        `/api/seoul?location=${encodeURIComponent(location)}`
      );
      const data: Response = await response.json();

      if ("CODE" in data.RESULT) {
        throw new Error(data.RESULT.MESSAGE);
      }

      setData((data as NormalResponse)["SeoulRtd.citydata_ppltn"][0]);
    } catch (error) {
      throw new Error(error as string);
    }
  }, []);

  return { data, fetchData };
};
