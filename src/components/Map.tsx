import { useEffect, useState } from "react";
import { useKakaoMap } from "../hooks/useKakaoMap";
import "./Map.css";
import { HOTSPOTS } from "../constants";

const Map = ({ fetchData }: { fetchData: (spot: string) => Promise<void> }) => {
  const [spot, setSpot] = useState<string>();
  const { panTo } = useKakaoMap({ setSpot });

  useEffect(() => {
    if (!spot) {
      setSpot(HOTSPOTS[0].name);
      return;
    }

    const hotspot = HOTSPOTS.find((hotspot) => spot === hotspot.name);

    if (hotspot) {
      fetchData(hotspot.name);
      panTo(hotspot.latlng);
    }
  }, [spot, fetchData, panTo]);

  return (
    <div className="map">
      <div id="map" />
    </div>
  );
};

export default Map;
