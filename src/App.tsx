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
      <div className="body">
        <Map fetchData={fetchData} />
        {data && <Info data={data} />}
      </div>
    </div>
  );
}

export default App;
