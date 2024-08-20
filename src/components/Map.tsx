import { useEffect, useState } from "react";
import { useKakaoMap } from "../hooks/useKakaoMap";
import { HOTSPOTS } from "../constants";
import styled from "styled-components";

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
    <StyledMap>
      <MapObject id="map" />
    </StyledMap>
  );
};

export default Map;

const StyledMap = styled.div`
  height: 500px;
`;

const MapObject = styled.div`
  height: 100%;
  border: 1px solid lightgray;
  border-radius: 15px;
`;