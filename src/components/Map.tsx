import { useEffect } from "react";

declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    kakao: any;
  }
}

const Map = () => {
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
            center: new window.kakao.maps.LatLng(33.450701, 126.570667),
            level: 3,
          };
          new window.kakao.maps.Map(mapRef, options);
        }
      } catch (error) {
        console.error("Error initializing Kakao Map:", error);
      }
    })();
  }, []);

  return (
    <>
      <div id="map" style={{ width: "500px", height: "400px" }}></div>
    </>
  );
};

export default Map;
