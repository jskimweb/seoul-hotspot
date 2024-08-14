import "./App.css";
import Map from "./components/Map";
import Info from "./components/Info";
import { useFetchData } from "./hooks/useFetchData";

function App() {
  const { data, fetchData } = useFetchData();

  return (
    <>
      <Map fetchData={fetchData} />
      {data && <Info data={data} />}
    </>
  );
}

export default App;
