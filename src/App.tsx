import Header from "./components/Header";
import Map from "./components/Map";
import Info from "./components/Info";
import { useFetchData } from "./hooks/useFetchData";
import styled from "styled-components";

function App() {
  const { data, fetchData } = useFetchData();

  return (
    <>
      <Header />
      <Body>
        <Map fetchData={fetchData} />
        {data && <Info data={data} />}
      </Body>
    </>
  );
}

export default App;

const Body = styled.div`
  width: 1160px;
  margin: 0 auto;
  padding: 20px 0;
`;