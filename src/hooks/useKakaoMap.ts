/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import { HOTSPOTS } from "../constants";

declare global {
  interface Window {
    kakao: any;
  }
}

export const useKakaoMap = ({
  spot,
  setSpot,
}: {
  spot: string;
  setSpot: (spot: string) => void;
}) => {
  const [map, setMap] = useState<any>();
  const [markers, setMarkers] = useState<any[]>([]);

  useEffect(() => {
    const _loadKakaoMapScript = () => {
      return new Promise<void>((resolve, reject) => {
        const script = document.createElement("script");

        script.src = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=${
          import.meta.env.VITE_KAKAO_MAP_API_KEY
        }&autoload=false`;
        script.async = true;
        script.onload = () => {
          if (window.kakao && window.kakao.maps) {
            window.kakao.maps.load(resolve);
          } else {
            reject(new Error("Kakao Maps API failed to load"));
          }
        };
        script.onerror = () =>
          reject(new Error("Failed to load Kakao Maps API"));

        document.head.appendChild(script);
      });
    };

    const _initializeMarkers = (kakaoMap: any) => {
      const markerImage = new window.kakao.maps.MarkerImage(
        "/logo.png",
        new window.kakao.maps.Size(31, 50)
      );
      const newMarkers = HOTSPOTS.map(({ name, latlng }) => {
        const marker = new window.kakao.maps.Marker({
          map: kakaoMap,
          position: new window.kakao.maps.LatLng(latlng[0], latlng[1]),
          title: name,
          ...(name === spot && { image: markerImage }),
        });

        window.kakao.maps.event.addListener(marker, "click", () => {
          setSpot(name);
          kakaoMap.panTo(new window.kakao.maps.LatLng(latlng[0], latlng[1]));
        });

        marker.setMap(kakaoMap);

        return marker;
      });

      setMarkers(newMarkers);
    };

    const updateMarkers = () => {
      const markerImage = new window.kakao.maps.MarkerImage(
        "/logo.png",
        new window.kakao.maps.Size(31, 50)
      );

      for (const marker of markers) {
        marker.setImage(marker.getTitle() === spot ? markerImage : null);
      }
    };

    const initializeMap = async () => {
      try {
        await _loadKakaoMapScript();

        const mapRef = document.getElementById("map");

        if (!mapRef) {
          throw new Error("'#map' element is not found");
        }

        const options = {
          center: new window.kakao.maps.LatLng(
            HOTSPOTS.find((hotspot) => hotspot.name === spot)?.latlng[0],
            HOTSPOTS.find((hotspot) => hotspot.name === spot)?.latlng[1]
          ),
          level: 8,
        };
        const kakaoMap = new window.kakao.maps.Map(mapRef, options);

        _initializeMarkers(kakaoMap);

        // 도로 교통정보 추가
        kakaoMap.addOverlayMapTypeId(window.kakao.maps.MapTypeId.TRAFFIC);

        setMap(kakaoMap);
      } catch (error) {
        console.error("Error initializing Kakao Map:", error);
      }
    };

    if (map) {
      updateMarkers();
    } else {
      initializeMap();
    }
  }, [map, spot, setSpot, markers]);
};
