import DeLaVisionALaRealisation from "../components/DeLaVisionALaRealisation.tsx";
import PiliersExecution from "../components/PiliersExecution.tsx";
import PhilosophieSurMesure from "../components/PhilosophieSurMesure.tsx";
import Discretion from "../components/Discretion.tsx";
import Secteurs from "../components/Secteurs.tsx";
import PraticiensDuPrestige from "../components/PraticiensDuPrestige.tsx";
import SEO from "../components/SEO.tsx";

function Approche() {
    return (
        <div>
            <SEO
                title="Notre Approche — RJAYNA | Stratégie, Création & Exécution"
                description="Découvrez l’approche RJAYNA : une combinaison de stratégie, création, structuration et exécution pour transformer les projets du luxe et de l’hospitality en réalités durables."
                canonical="https://rjayna.com/approche"
            />
            <PhilosophieSurMesure />
            <PiliersExecution />
            <DeLaVisionALaRealisation />
            <Discretion />
            <PraticiensDuPrestige />
            <Secteurs />
        </div>
    );
}

export default Approche;