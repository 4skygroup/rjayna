import ScrollToTop from "./components/ScrollToTop.tsx";
import {Route, Routes} from "react-router-dom";
import Home from "./pages/Home.tsx";
import Navbar from "./components/Navbar.tsx";
import Expertises from "./pages/Expertises.tsx";

function App() {

  return (
      <>
          <ScrollToTop />
          <Navbar />
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/expertises" element={<Expertises />} />
          </Routes>
      </>
  )
}

export default App
