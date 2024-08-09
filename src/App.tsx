import { useState, useEffect } from "react";
import "./App.css";
import { Data, Response, NormalResponse } from "./types";

function App() {
  const [data, setData] = useState<Data | undefined>();

  const fetchData = async (location: string) => {
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
  };

  useEffect(() => {
    fetchData("강남 MICE 관광특구");
  }, []);

  return (
    <>
      <button onClick={() => fetchData("강남 MICE 관광특구")}>
        강남 MICE 관광특구
      </button>
      <button onClick={() => fetchData("동대문 관광특구")}>
        동대문 관광특구
      </button>
      <p>{data ? data.AREA_CONGEST_MSG : ""}</p>
    </>
  );
}

export default App;
