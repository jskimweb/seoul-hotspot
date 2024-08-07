import { useState, useEffect } from "react";
import "./App.css";
import { Data, Response, NormalResponse } from "./types";

function App() {
  const [data, setData] = useState<Data | undefined>();

  const fetchData = async () => {
    try {
      const response = await fetch(
        `http://openapi.seoul.go.kr:8088/${import.meta.env.VITE_SEOUL_API_KEY}/json/citydata_ppltn/1/2/신림역`
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
    fetchData();
  }, []);

  return <>{data ? data.AREA_CONGEST_MSG : ""}</>;
}

export default App;
