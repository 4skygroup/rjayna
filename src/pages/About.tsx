import HeroComp from "../components/HeroComp.tsx";
import NotreHistoire from "../components/NotreHistoire.tsx";
import TextSection from "../components/TextSection.tsx";
import SplitBanner from "../components/Splitbanner.tsx";
import SEO from "../components/SEO.tsx";


function About() {
    return (
        <div>
            <SEO
                title="À propos de RJAYNA — Vision, Expertise & Excellence"
                description="Découvrez RJAYNA, structure internationale spécialisée dans le Project Management, le Business Development et le Strategy Consulting pour les univers du luxe, de l’hospitality et du lifestyle."
                canonical="https://rjayna.com/a-propos"
            />

            <HeroComp />
            <NotreHistoire />
            <TextSection />
            <SplitBanner />
        </div>
    );
}

export default About;