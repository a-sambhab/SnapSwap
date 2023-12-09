import { Landing } from "./pages/Landing";
import { Navbar } from "./components/Navbar";
import { MutualFunds } from "./pages/MutualFunds";
import { Swap } from "./pages/Swap";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Finalswap } from "./components/Finalswap";
import { TokenSwap } from "./components/TokenSwap";
import { Congrats } from "./pages/Congrats";
import { response } from "./data/response";
import Compare from "./components/Compare"
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const allCoins = Object.keys(response);

  const [largeCap, setLargeCap] = useState([]);

  const [midCap, setMidCap] = useState([]);

  const [smallCap, setSmallCap] = useState([]);

  const [poolerData, setPoolerData] = useState({})

  const fetchData = async () => {
    try {
      const response = await axios
        .get(
          "https://gateway.lighthouse.storage/ipns/k51qzi5uqu5dht9a7tdv9q004vwph1x79fydqypd47dd8vzvy2zd8x51c406lf"
        )
        .then((data) => data.data);
      const pooler = await axios
        .get(
          "https://gateway.lighthouse.storage/ipns/k51qzi5uqu5dm1uuht9e59h4qrvqs9pjx8a3cf1sz7x7j0vyyolywu8v3abls8"
        )
        // console.log(pooler.data)
        setPoolerData(pooler.data)
      const data = Object.keys(response);

      // console.log(data.length);

      for (let i = 0; i < data.length; i++) {
        const val = {
          name: data[i],
          ...response[data[i]],
        };

        // console.log(val);

        if (val.risk === "low") {
          setLargeCap((largeCap) => [...largeCap, val]);
        } else if (val.risk === "mid") {
          // console.log(val);
          setMidCap((midCap) => [...midCap, val]);
        } else if (val.risk === "high") {
          setSmallCap((smallCap) => [...smallCap, val]);
        }
      }
    } catch (error) {}

    setLargeCap((largeCap) => largeCap.slice(0,10));
  };

  useEffect(() => {
    fetchData();
  }, []);

  // console.log(largeCap);
  // console.log(midCap);
  // console.log(smallCap);

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
          <Route exact path="/compare" element={<Compare
              largeCap={largeCap}
              midCap={midCap}
              smallCap={smallCap}
              poolerData={poolerData}
          />}></Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
