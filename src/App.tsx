import { useState, useEffect } from "react";
import ScrollToTop from "./components/ScrollToTop.tsx";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home.tsx";
import Navbar from "./components/Navbar.tsx";
import Approche from "./pages/Approche.tsx";
import Expertises from "./pages/Expertises.tsx";
import Footer from "./components/Footer.tsx";
import About from "./pages/About.tsx";
import IntroOverlay from "./components/IntroOverlay.tsx";
import Contact from "./components/form/Contact.tsx";
import PalaceHotel from "./pages/expertises/PalaceHotel.tsx";
import Luxury from "./pages/expertises/Luxury.tsx";
import FineDiningCulinaryArts from "./pages/expertises/FineDiningCulinaryArts.tsx";
import SpasWellnessHealthRetreats from "./pages/expertises/SpasWellnessHealthRetreats.tsx";
import FineWinesSpiritsVineyards from "./pages/expertises/FineWinesSpiritsVineyards.tsx";

function App() {
    const [showIntro, setShowIntro] = useState(true);

    useEffect(() => {
        const t = setTimeout(() => setShowIntro(false), 2000);
        return () => clearTimeout(t);
    }, []);

    const playIntro = () => {
        setShowIntro(true);
        setTimeout(() => setShowIntro(false), 2000);
    };

    return (
        <>
            <IntroOverlay show={showIntro} />
            <ScrollToTop />
            <Navbar onLogoClick={playIntro} />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/a-propos" element={<About />} />
                <Route path="/expertises" element={<Expertises />} />
                <Route path="/approche" element={<Approche />} />
                <Route path="/contact" element={<Contact />} />

                <Route path="/expertises/palace-hotels" element={<PalaceHotel />} />
                <Route path="/expertises/luxury-real-estate" element={<Luxury />} />
                <Route path="/expertises/fine-dining" element={<FineDiningCulinaryArts />} />
                <Route path="/expertises/spas-wellness" element={<SpasWellnessHealthRetreats />} />
                <Route path="/expertises/wines-spirits" element={<FineWinesSpiritsVineyards />} />
                <Route path="/expertises/cosmetics-perfumery" element={<FineWinesSpiritsVineyards />} />

            </Routes>
            <Footer />
        </>
    );
}

export default App;