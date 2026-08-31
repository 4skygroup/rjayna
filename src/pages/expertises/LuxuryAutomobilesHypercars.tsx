import SplitImageText from "../../components/detail/SplitImageText.tsx";
import CreamCard from "../../components/detail/CreamCard.tsx";

function LuxuryAutomobilesHypercars() {
    return (
        <div>
            <SplitImageText
                eyebrow="LUXURY AUTOMOBILES & HYPERCARS"
                title="La Passion de l'Ingénierie Automobile"
                lead="La rencontre de la performance extrême, du design et de l'artisanat automobile."
                text="Les automobiles de prestige et les hypercars représentent le sommet de l'ingénierie mécanique. Véhicules historiques, séries limitées et modèles contemporains d'exception incarnent une recherche permanente de performance, d'innovation et de beauté."
                image="/logo.jpg"
            />

            <CreamCard
                title="Notre Accompagnement"
                text="RJAYNA accompagne les constructeurs, préparateurs, clubs privés, showrooms et entreprises de services automobiles premium dans le développement de leurs projets. Nous concevons des expériences de marque exclusives et des stratégies adaptées aux passionnés et collectionneurs internationaux."
                bullets={[
                    { label: "Positionnement premium", description: "Création d'un concept et d'une identité distinctive." },
                    { label: "Expériences automobiles", description: "Showrooms, clubs privés, événements et programmes de conduite." },
                    { label: "Développement commercial", description: "Partenariats, acquisition client et expansion internationale." },
                ]}
                image="/logo.jpg"
                reverse
                ctaLabel="Développer un projet automobile d'exception"
                ctaLink="/contact"
            />
        </div>
    );
}

export default LuxuryAutomobilesHypercars;