/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState, useCallback } from "react";
import { DEFAULT_HOTSPOT, HOTSPOTS } from "../constants";

declare global {
  interface Window {
    kakao: any;
  }
}

export const useKakaoMap = ({
  setSpot,
}: {
  setSpot: (spot: string) => void;
}) => {
  const [map, setMap] = useState<any>();

  useEffect(() => {
    const loadKakaoMapScript = () => {
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

    const initializeMap = async () => {
      try {
        await loadKakaoMapScript();

        const mapRef = document.getElementById("map");

        if (!mapRef) {
          throw new Error("'#map' element is not found");
        }

        const options = {
          center: new window.kakao.maps.LatLng(
            DEFAULT_HOTSPOT.latlng[0],
            DEFAULT_HOTSPOT.latlng[1]
          ),
          level: 8,
        };
        const kakaoMap = new window.kakao.maps.Map(mapRef, options);

        // 마커 및 마커 클릭 이벤트 추가
        for (const { name, latlng } of HOTSPOTS) {
          const marker = new window.kakao.maps.Marker({
            map: kakaoMap,
            position: new window.kakao.maps.LatLng(latlng[0], latlng[1]),
            title: name,
          });

          window.kakao.maps.event.addListener(marker, "click", () => {
            setSpot(name);
            kakaoMap.panTo(new window.kakao.maps.LatLng(latlng[0], latlng[1]));
          });

          marker.setMap(kakaoMap);
        }

        // 도로 교통정보 추가
        kakaoMap.addOverlayMapTypeId(window.kakao.maps.MapTypeId.TRAFFIC);

        setMap(kakaoMap);
      } catch (error) {
        console.error("Error initializing Kakao Map:", error);
      }
    };

    if (!map) {
      initializeMap();
    }
  }, [map, setSpot]);

  const panTo = useCallback((latlng: number[]) => {
    if (map) {
      map.panTo(new window.kakao.maps.LatLng(latlng[0], latlng[1]));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { panTo };
};
