import { useEffect } from "react";
import { HOTSPOTS } from "../constants";

declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    kakao: any;
  }
}

const Map = ({
  fetchData,
}: {
  fetchData: (location: string) => Promise<void>;
}) => {
  useEffect(() => {
    const loadKakaoMapScript = () => {
      return new Promise<void>((resolve, reject) => {
        const script = document.createElement("script");

        script.src = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=${
          import.meta.env.VITE_KAKAO_MAP_API_KEY
        }&autoload=false`; // API 키를 URL 쿼리 파라미터로 전달
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

    (async () => {
      try {
        await loadKakaoMapScript();

        const mapRef = document.getElementById("map");
        if (mapRef) {
          const options = {
            center: new window.kakao.maps.LatLng(
              37.577617793672175,
              126.97690013106795
            ),
            level: 9,
          };
          const map = new window.kakao.maps.Map(mapRef, options);

          for (let i = 0; i < HOTSPOTS.length; i++) {
            const marker = new window.kakao.maps.Marker({
              map, // 마커를 표시할 지도
              position: new window.kakao.maps.LatLng(
                HOTSPOTS[i].latlng[0],
                HOTSPOTS[i].latlng[1]
              ),
              title: HOTSPOTS[i].name,
            });

            window.kakao.maps.event.addListener(marker, "click", () => {
              fetchData(HOTSPOTS[i].name);
            });

            marker.setMap(map);
          }
        }
      } catch (error) {
        console.error("Error initializing Kakao Map:", error);
      }
    })();
  }, [fetchData]);

  return (
    <>
      <div id="map" style={{ width: "500px", height: "400px" }}></div>
    </>
  );
};

export default Map;
