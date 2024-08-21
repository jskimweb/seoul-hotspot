import { useEffect, useState } from "react";
import { useKakaoMap } from "../hooks/useKakaoMap";
import { DEFAULT_HOTSPOT, HOTSPOTS } from "../constants";
import styled from "styled-components";
import { memo } from "react";

const Map = ({ fetchData }: { fetchData: (spot: string) => Promise<void> }) => {
  const [spot, setSpot] = useState<string>(DEFAULT_HOTSPOT.name);
  const { panTo } = useKakaoMap({ setSpot });

  useEffect(() => {
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

export default memo(Map);

const StyledMap = styled.div`
  height: 500px;
`;

const MapObject = styled.div`
  height: 100%;
  border-radius: 15px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;