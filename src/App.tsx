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

function App() {
    const [showIntro, setShowIntro] = useState(true);

    useEffect(() => {
        const t = setTimeout(() => setShowIntro(false), 7000);
        return () => clearTimeout(t);
    }, []);

    const playIntro = () => {
        setShowIntro(true);
        setTimeout(() => setShowIntro(false), 7000);
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
            </Routes>
            <Footer />
        </>
    );
}

export default App;