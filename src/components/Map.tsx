import { useKakaoMap } from "../hooks/useKakaoMap";

const Map = ({
  fetchData,
}: {
  fetchData: (location: string) => Promise<void>;
}) => {
  useKakaoMap(fetchData);

  return (
    <>
      <div id="map" style={{ width: "500px", height: "400px" }}></div>
    </>
  );
};

export default Map;
