import { useKakaoMap } from "../hooks/useKakaoMap";
import "./Map.css";

const Map = ({
  fetchData,
}: {
  fetchData: (location: string) => Promise<void>;
}) => {
  useKakaoMap(fetchData);

  return (
    <>
      <div id="map" />
    </>
  );
};

export default Map;
