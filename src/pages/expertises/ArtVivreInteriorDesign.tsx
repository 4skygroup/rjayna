import SplitImageText from "../../components/detail/SplitImageText.tsx";
import CreamCard from "../../components/detail/CreamCard.tsx";

function ArtVivreInteriorDesign() {
    return (
        <div>
            <SplitImageText
                eyebrow="ART DE VIVRE & INTERIOR DESIGN"
                title="L'Art d'Habiter l'Espace"
                lead="Des intérieurs singuliers où l'architecture, la matière et la lumière racontent une histoire."
                text="Créer un espace d'exception nécessite un équilibre subtil entre esthétique, fonctionnalité et confort. Du choix des matériaux nobles à la conception de mobilier sur mesure, chaque décision participe à la création d'une atmosphère cohérente et profondément personnelle."
                image="/logo.jpg"
            />

            <CreamCard
                title="Notre Accompagnement"
                text="RJAYNA accompagne le développement de projets d'architecture intérieure et d'art de vivre pour les résidences, hôtels, restaurants et lieux de prestige. Nous coordonnons les talents, les expertises et les partenaires nécessaires afin de traduire une vision en expérience tangible."
                bullets={[
                    { label: "Direction de concept", description: "Définition de l'univers esthétique et de l'expérience recherchée." },
                    { label: "Sélection des talents", description: "Mobilisation de designers, architectes et artisans d'art." },
                    { label: "Pilotage du projet", description: "Coordination globale de la conception jusqu'à la réalisation." },
                ]}
                image="/logo.jpg"
                reverse
                ctaLabel="Imaginer un intérieur d'exception"
                ctaLink="/contact"
            />
        </div>
    );
}

export default ArtVivreInteriorDesign;