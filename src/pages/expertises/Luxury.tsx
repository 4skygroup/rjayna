import SplitImageText from "../../components/detail/SplitImageText.tsx";
import CreamCard from "../../components/detail/CreamCard.tsx";

function Luxury() {
    return (
        <div>
            <SplitImageText
                eyebrow="LUXURY REAL ESTATE"
                title="Les Plus Belles Demeures du Monde"
                lead="L'immobilier de prestige pensé comme une rencontre entre architecture, art de vivre et valeur patrimoniale."
                text="Une propriété d'exception ne se définit pas uniquement par son adresse ou ses dimensions. Elle se distingue par la qualité de son architecture, la rareté de son emplacement et l'émotion qu'elle procure. Penthouse urbain, domaine historique ou villa contemporaine : chaque projet doit offrir une expérience de vie unique."
                image="/logo.jpg"
            />

            <CreamCard
                title="Notre Accompagnement"
                text="RJAYNA accompagne le développement et le positionnement de projets immobiliers haut de gamme. Nous intervenons auprès des investisseurs, promoteurs, propriétaires et marques pour imaginer des résidences distinctives, structurer leur proposition de valeur et orchestrer leur mise sur le marché."
                bullets={[
                    { label: "Positionnement premium", description: "Définition du concept, de la cible et de l'identité du projet." },
                    { label: "Expérience résidentielle", description: "Conception de services et d'usages adaptés à une clientèle exigeante." },
                    { label: "Stratégie de commercialisation", description: "Valorisation du projet et développement de partenariats ciblés." },
                ]}
                image="/logo.jpg"
                reverse
                ctaLabel="Développer un projet immobilier de prestige"
                ctaLink="/contact"
            />
        </div>
    );
}

export default Luxury;