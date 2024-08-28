import Header from "../components/layouts/Header";
import Body from "../components/layouts/Body";
import Map from "../components/Map";
import Info from "../components/Info";
import { useSeoulPopulation } from "../hooks/useSeoulPopulation";
import InfoSkeleton from "../components/InfoSkeleton";

const Home = ({
  spot,
  setSpot,
}: {
  spot: string;
  setSpot: (spot: string) => void;
}) => {
  const { data, isLoading } = useSeoulPopulation(spot);

  return (
    <>
      <Header />
      <Body>
        <Map spot={spot} setSpot={setSpot} />
        {isLoading && <InfoSkeleton />}
        {!isLoading && data && <Info data={data} />}
      </Body>
    </>
  );
};

export default Home;