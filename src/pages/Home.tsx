import QuiNousSommes from "../components/QuiNousSommes.tsx";
import EcosystemeDeConfiance from "../components/EcosystemeDeConfiance.tsx";
import Approche from "../components/Approche.tsx";
import ExpertisesEtSecteurs from "../components/ExpertisesEtSecteurs.tsx";
import Hero from "../components/Hero.tsx";
import Faq from "../components/faq/Faq.tsx";
import Stats from "../components/Stats.tsx";
import SEO from "../components/SEO.tsx";


function Home() {
    return (
        <div>
            <SEO
                title="RJAYNA — Project Management, Business Development & Strategy Consulting"
                description="RJAYNA accompagne les projets et entreprises dans le luxe, l’hospitality et le lifestyle en Project Management, Business Development et Strategy Consulting, de la création à l’expansion internationale."
                canonical="https://rjayna.com/"
            />

            <Hero/>
            <Stats/>
            <QuiNousSommes/>
            <img
                src="/experience.png"
                className="w-[1200px] h-auto mt-12 rounded-4xl mx-auto"
                alt="vivez l'expérience avec Rjayna"
            />
            <ExpertisesEtSecteurs/>
            <EcosystemeDeConfiance/>
            <Approche/>
            <Faq/>
        </div>
    );
}

export default Home;