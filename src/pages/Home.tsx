import GlobalLayout from "../components/GlobalLayout";
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
    <GlobalLayout>
      <Map spot={spot} setSpot={setSpot} />
      {isLoading && <InfoSkeleton />}
      {!isLoading && data && <Info data={data} />}
    </GlobalLayout>
  );
};

export default Home;
