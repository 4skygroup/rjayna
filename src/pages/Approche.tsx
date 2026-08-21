import DeLaVisionALaRealisation from "../components/DeLaVisionALaRealisation.tsx";
import PiliersExecution from "../components/PiliersExecution.tsx";
import PhilosophieSurMesure from "../components/PhilosophieSurMesure.tsx";
import Discretion from "../components/Discretion.tsx";
import Secteurs from "../components/Secteurs.tsx";
import PraticiensDuPrestige from "../components/PraticiensDuPrestige.tsx";

function Approche() {
    return (
        <div>
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