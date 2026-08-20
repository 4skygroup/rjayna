import HeroComp from "../components/HeroComp.tsx";
import NotreHistoire from "../components/NotreHistoire.tsx";
import TextSection from "../components/TextSection.tsx";
import SplitBanner from "../components/Splitbanner.tsx";


function About() {
    return (
        <div>
            <HeroComp />
            <NotreHistoire />
            <TextSection />
            <SplitBanner />
        </div>
    );
}

export default About;