import SplitImageText from "../../components/detail/SplitImageText.tsx";
import CreamCard from "../../components/detail/CreamCard.tsx";

function LuxuryEducationExcellenceAcademies() {
    return (
        <div>
            <SplitImageText
                eyebrow="LUXURY EDUCATION & EXCELLENCE ACADEMIES"
                title="La Transmission du Savoir-Faire"
                lead="Former les futurs dirigeants, créateurs et artisans des industries de l'excellence."
                text="Préserver et renouveler les savoir-faire d'exception exige une transmission de très haut niveau. Management du luxe, haute hôtellerie, arts culinaires, joaillerie ou métiers d'art : ces disciplines nécessitent rigueur, maîtrise technique et compréhension des nouveaux enjeux internationaux."
                image="/logo.jpg"
                reverse
            />

            <CreamCard
                title="Notre Accompagnement"
                text="RJAYNA accompagne la création et le développement d'académies, de programmes de formation et d'institutions spécialisées dans les métiers du luxe et de l'hospitality. Nous structurons leur positionnement pédagogique, leur modèle économique et leurs partenariats professionnels."
                bullets={[
                    { label: "Concept pédagogique", description: "Définition des programmes, compétences et parcours de formation." },
                    { label: "Réseau d'excellence", description: "Collaboration avec experts, maisons, artisans et institutions." },
                    { label: "Développement institutionnel", description: "Positionnement, partenariats et rayonnement international." },
                ]}
                image="/logo.jpg"
                ctaLabel="Créer une académie de l'excellence"
                ctaLink="/contact"
            />
        </div>
    );
}

export default LuxuryEducationExcellenceAcademies;