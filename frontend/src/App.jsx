import { Landing } from "./pages/Landing";
import { Navbar } from "./components/Navbar";
import { MutualFunds } from "./pages/MutualFunds";
import { Swap } from "./pages/Swap";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <>
      <div className="min-h-[100vh] w-screen bg-gradient-to-r from-[#103C3D] to-[#141A28]">
        <Navbar />

        <Routes>
          <Route exact path="/" element={<Landing />}></Route>
          <Route exact path="/invest" element={<MutualFunds />}></Route>
          <Route exact path="/token" element={<Swap />}></Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
