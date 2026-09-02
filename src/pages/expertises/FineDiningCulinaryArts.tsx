import SplitImageText from "../../components/detail/SplitImageText.tsx";
import CreamCard from "../../components/detail/CreamCard.tsx";
import SEO from "../../components/SEO.tsx";

function FineDiningCulinaryArts() {
    return (
        <div>
            <SEO
                title="Fine Dining & Culinary Arts — Gastronomie d'Exception | RJAYNA"
                description="RJAYNA accompagne la création et le développement de concepts gastronomiques premium, restaurants, expériences culinaires et destinations de haute gastronomie."
                canonical="https://rjayna.com/expertises/fine-dining"
            />

            <SplitImageText
                eyebrow="FINE DINING & CULINARY ARTS"
                title="L'Excellence Gastronomique"
                lead="Une célébration du goût, du savoir-faire et de la créativité des plus grands talents culinaires."
                text="La haute gastronomie est un dialogue entre tradition, innovation et précision. Elle transforme des produits d'exception en expériences mémorables, où la cuisine, le décor, le service et l'atmosphère forment un ensemble indissociable."
                image="/logo.jpg"
            />

            <CreamCard
                title="Notre Accompagnement"
                text="RJAYNA imagine, structure et développe des concepts de restauration à forte identité. De la définition du concept culinaire au déploiement opérationnel, nous accompagnons chefs, restaurateurs, investisseurs et groupes hôteliers dans la création d'adresses capables de devenir de véritables destinations."
                bullets={[
                    { label: "Concept de marque", description: "Création de territoires culinaires cohérents et différenciants." },
                    { label: "Expérience globale", description: "Harmonisation de la cuisine, du design, du service et de l'ambiance." },
                    { label: "Déploiement opérationnel", description: "Structuration, lancement et développement national ou international." },
                ]}
                image="/logo.jpg"
                reverse
                ctaLabel="Créer une destination gastronomique"
                ctaLink="/contact"
            />
        </div>
    );
}

export default FineDiningCulinaryArts;