import SplitImageText from "../../components/detail/SplitImageText.tsx";
import CreamCard from "../../components/detail/CreamCard.tsx";

function PrestigeEventsGalas() {
    return (
        <div>
            <SplitImageText
                eyebrow="PRESTIGE EVENTS & GALAS"
                title="Les Célébrations Inoubliables"
                lead="Des événements spectaculaires conçus comme des expériences artistiques uniques."
                text="Organiser un événement d'exception relève d'une véritable mise en scène. Mariage privé, gala international, lancement de marque ou réception exclusive : chaque détail contribue à créer une émotion durable."
                image="/logo.jpg"
            />

            <CreamCard
                title="Notre Accompagnement"
                text="RJAYNA imagine, structure et pilote des événements haut de gamme en réunissant les expertises nécessaires à leur réussite. De la conception artistique à la coordination opérationnelle, nous transformons chaque vision en une expérience parfaitement maîtrisée."
                bullets={[
                    { label: "Concept & scénographie", description: "Création d'un univers exclusif pour chaque occasion." },
                    { label: "Lieux et partenaires", description: "Sélection d'adresses, de talents et de prestataires d'exception." },
                    { label: "Direction de projet", description: "Coordination globale, gestion des équipes et supervision du déroulement." },
                ]}
                image="/logo.jpg"
                reverse
                ctaLabel="Imaginer un événement d'exception"
                ctaLink="/contact"
            />
        </div>
    );
}

export default PrestigeEventsGalas;