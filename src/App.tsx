import { useCallback, useState } from "react";
import "./App.css";
import { Data, Response, NormalResponse } from "./types";
import Info from "./components/Info";
import Map from "./components/Map";

function App() {
  const [data, setData] = useState<Data>();

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

  const memoizedFetchData = useCallback(fetchData, []);

  return (
    <>
      {data && <Info data={data} />}
      <Map fetchData={memoizedFetchData} />
    </>
  );
}

export default App;
