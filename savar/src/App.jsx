import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Learn from "./pages/Learn";
import SoundChart from "./pages/SoundChart";
import Pronunciation from "./pages/Pronunciation";
import Practice from "./pages/Practice";
import Progress from "./pages/Progress";

function App() {
  return (
    <BrowserRouter>

      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/learn" element={<Learn />} />
        <Route path="/sound-chart" element={<SoundChart />} />
        <Route path="/pronunciation" element={<Pronunciation />} />
        <Route path="/practice" element={<Practice />} />
        <Route path="/progress" element={<Progress />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;