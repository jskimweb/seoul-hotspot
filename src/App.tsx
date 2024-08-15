import "./App.css";
import Header from "./components/Header";
import Map from "./components/Map";
import Info from "./components/Info";
import { useFetchData } from "./hooks/useFetchData";

function App() {
  const { data, fetchData } = useFetchData();

  return (
    <div className="app">
      <Header />
      <Map fetchData={fetchData} />
      {data && <Info data={data} />}
    </div>
  );
}

export default App;
