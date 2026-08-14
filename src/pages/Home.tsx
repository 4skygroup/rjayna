import QuiNousSommes from "../components/QuiNousSommes.tsx";
import EcosystemeDeConfiance from "../components/EcosystemeDeConfiance.tsx";
import Approche from "../components/Approche.tsx";
import ExpertisesEtSecteurs from "../components/ExpertisesEtSecteurs.tsx";


function Home() {
    return (
        <div>
            <QuiNousSommes />
            <ExpertisesEtSecteurs />
            <EcosystemeDeConfiance />
            <Approche />
        </div>
    );
}

export default Home;