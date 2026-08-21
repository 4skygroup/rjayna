import QuiNousSommes from "../components/QuiNousSommes.tsx";
import EcosystemeDeConfiance from "../components/EcosystemeDeConfiance.tsx";
import Approche from "../components/Approche.tsx";
import ExpertisesEtSecteurs from "../components/ExpertisesEtSecteurs.tsx";
import Hero from "../components/Hero.tsx";
import Faq from "../components/faq/Faq.tsx";
import Stats from "../components/Stats.tsx";


function Home() {
    return (
        <div>
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