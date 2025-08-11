import { Routes, Route } from "react-router-dom";
import { Landing } from "./pages/Landing"; 
import Market from "./pages/Market";
import Spot from "./pages/Spot";
import Favourite from "./pages/Favourite";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/market" element={<Market />} />
      <Route path="/spot" element={<Spot />} />
      <Route path="/favourite" element={<Favourite />} />
    </Routes>
  );
}

export default App; 
