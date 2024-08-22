import Header from "../components/Header";
import Map from "../components/Map";
import Info from "../components/Info";
import { useFetchData } from "../hooks/useFetchData";
import styled from "styled-components";

const Home = ({
  spot,
  setSpot,
}: {
  spot: string;
  setSpot: (spot: string) => void;
}) => {
  const { data, fetchData } = useFetchData();

  return (
    <>
      <Header />
      <Body>
        <Map spot={spot} setSpot={setSpot} fetchData={fetchData} />
        {data && <Info data={data} />}
      </Body>
    </>
  );
};

export default Home;

const Body = styled.div`
  margin: 0 auto;
  padding: 2rem;

  @media screen and (min-width: 768px) {
    padding: 3rem;
  }

  @media screen and (min-width: 1440px) {
    width: 116rem;
    padding: 3rem 0;
  }
`;
