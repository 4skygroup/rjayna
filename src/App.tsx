import ScrollToTop from "./components/ScrollToTop.tsx";
import {Route, Routes} from "react-router-dom";
import Home from "./pages/Home.tsx";
import Navbar from "./components/Navbar.tsx";
import Approche from "./pages/Approche.tsx";
import Expertises from "./pages/Expertises.tsx";
import Footer from "./components/Footer.tsx";
import About from "./pages/About.tsx";

function App() {

  return (
      <>
          <ScrollToTop />
          <Navbar />
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/a-propos" element={<About />} />
              <Route path="/expertises" element={<Expertises />} />
              <Route path="/approche" element={<Approche />} />
          </Routes>
          <Footer />
      </>
  )
}

export default App
