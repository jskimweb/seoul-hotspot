import "./App.css";
import Info from "./components/Info";
import Map from "./components/Map";
import { useFetchData } from "./hooks/useFetchData";

function App() {
  const { data, fetchData } = useFetchData();

  return (
    <>
      {data && <Info data={data} />}
      <Map fetchData={fetchData} />
    </>
  );
}

export default App;
