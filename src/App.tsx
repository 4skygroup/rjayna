import ScrollToTop from "./components/ScrollToTop.tsx";
import {Route, Routes} from "react-router-dom";
import Home from "./pages/Home.tsx";

function App() {

  return (
      <>
          <ScrollToTop />
          <Routes>
              <Route path="/" element={<Home />} />

          </Routes>
          <h1 className="text-2xl">CONFIGURATIONN</h1>
          <p className="font-raleway tracking-raleway">Titre en Raleway</p>
          <p className="font-cormorant tracking-cormorant">Texte en Cormorant</p>
          <span className="font-didot tracking-didot">Texte en GFS Didot</span>
      </>
  )
}

export default App
