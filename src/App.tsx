import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Search from "./pages/Search";
import { DEFAULT_HOTSPOT } from "./constants";
import { useState } from "react";

function App() {
  const [spot, setSpot] = useState(DEFAULT_HOTSPOT.name);

  return (
    <>
      <Routes>
        <Route path="/" element={<Home spot={spot} setSpot={setSpot} />} />
        <Route path="/search" element={<Search setSpot={setSpot} />} />
      </Routes>
    </>
  );
}

export default App;
