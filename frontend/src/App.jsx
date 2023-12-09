import { Landing } from "./pages/Landing";
import { Navbar } from "./components/Navbar";
import { MutualFunds } from "./pages/MutualFunds";
import { Swap } from "./pages/Swap";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Finalswap } from "./components/Finalswap";
import { TokenSwap } from "./components/TokenSwap";
import { Congrats } from "./pages/Congrats";
import { response } from "./data/response";
import { useState, useEffect } from "react";

function App() {
  const allCoins = Object.keys(response);
  // console.log("all",allCoins.length)

  const [largeCap, setLargeCap] = useState([]);

  const [midCap, setMidCap] = useState([]);

  const [smallCap, setSmallCap] = useState([]);

  useEffect(() => {
    for (let i = 0; i < allCoins.length; i++) {
      const data = {
        name: allCoins[i],
        ...response[allCoins[i]],
      };

      if (response[allCoins[i]].risk === "low") {
        setLargeCap((largeCap) => [...largeCap, data]);
      } else if (response[allCoins[i]].risk === "mid") {
        setMidCap((midCap) => [...midCap, data]);
      } else if (response[allCoins[i]].risk === "high") {
        setSmallCap((smallCap) => [...smallCap, data]);
      }
    }
  }, []);

  return (
    <>
      <div className="min-h-[100vh] w-screen bg-gradient-to-r from-[#103C3D] to-[#141A28]">
        <Navbar />

        <Routes>
          <Route exact path="/" element={<Landing />}></Route>
          <Route
            exact
            path="/invest"
            element={
              <MutualFunds
                largeCap={largeCap}
                midCap={midCap}
                smallCap={smallCap}
              />
            }
          ></Route>
          <Route exact path="/token" element={<Swap />}></Route>
          <Route exact path="/congrats" element={<Congrats />}></Route>

          <Route exact path="/invest/:fund" element={<TokenSwap />}></Route>

          <Route exact path="/coins/:coin" element={<TokenSwap />}></Route>

          <Route exact path="/:swap" element={<Finalswap />}></Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
