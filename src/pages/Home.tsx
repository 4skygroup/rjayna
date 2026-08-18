import QuiNousSommes from "../components/QuiNousSommes.tsx";
import EcosystemeDeConfiance from "../components/EcosystemeDeConfiance.tsx";
import Approche from "../components/Approche.tsx";
import ExpertisesEtSecteurs from "../components/ExpertisesEtSecteurs.tsx";
import Hero from "../components/Hero.tsx";


function Home() {
    return (
        <div>
            <Hero />
            <QuiNousSommes />
            <ExpertisesEtSecteurs />
            <EcosystemeDeConfiance />
            <Approche />
        </div>
    );
}

export default Home;