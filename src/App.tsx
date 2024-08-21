import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Search from "./pages/Search";
import { DEFAULT_HOTSPOT } from "./constants";
import { useState } from "react";

function App() {
  const [spot, setSpot] = useState(DEFAULT_HOTSPOT.name);

  const setTitle = (newSpot: string) => {
    document.title = newSpot + " | 서울 핫스팟";
  }

  const handleSpotChange = (newSpot: string) => {
    setTitle(newSpot);
    setSpot(newSpot);
  };

  setTitle(spot);

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={<Home spot={spot} setSpot={handleSpotChange} />}
        />
        <Route path="/search" element={<Search setSpot={handleSpotChange} />} />
      </Routes>
    </>
  );
}

export default App;
