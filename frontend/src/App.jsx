import { Landing } from "./pages/Landing";
import { Navbar } from "./components/Navbar";
import { MutualFunds } from "./pages/MutualFunds";

function App() {
  return (
    <>
      <div className="min-h-[100vh] w-screen bg-gradient-to-r from-[#103C3D] to-[#141A28]">
        <Navbar />
        <Landing />
        <MutualFunds />
      </div>
    </>
  );
}

export default App;
