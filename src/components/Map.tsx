import { useKakaoMap } from "../hooks/useKakaoMap";
import styled from "styled-components";
import { memo } from "react";

const Map = ({
  spot,
  setSpot,
}: {
  spot: string;
  setSpot: (spot: string) => void;
}) => {
  useKakaoMap({ spot, setSpot });

  return (
    <StyledMap>
      <MapObject id="map" />
    </StyledMap>
  );
};

export default memo(Map);

const StyledMap = styled.div`
  height: 25rem;

  @media screen and (min-width: 768px) {
    height: 35rem;
  }

  @media screen and (min-width: 1440px) {
    height: 50rem;
  }
`;

const MapObject = styled.div`
  height: 100%;
  border-radius: 1.5rem;
  box-shadow: 0 0 1rem rgba(0, 0, 0, 0.1);
`;
