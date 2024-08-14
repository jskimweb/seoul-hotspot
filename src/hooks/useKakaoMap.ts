import { useEffect } from "react";
import { HOTSPOTS } from "../constants";

declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    kakao: any;
  }
}

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
    script.onerror = () => reject(new Error("Failed to load Kakao Maps API"));

    document.head.appendChild(script);
  });
};

export const useKakaoMap = (fetchData: (location: string) => Promise<void>) => {
  useEffect(() => {
    (async () => {
      try {
        await loadKakaoMapScript();

        const mapRef = document.getElementById("map");
        if (mapRef) {
          const options = {
            center: new window.kakao.maps.LatLng(
              HOTSPOTS[0].latlng[0],
              HOTSPOTS[0].latlng[1]
            ),
            level: 8,
          };
          const map = new window.kakao.maps.Map(mapRef, options);

          for (let i = 0; i < HOTSPOTS.length; i++) {
            const marker = new window.kakao.maps.Marker({
              map,
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
};
