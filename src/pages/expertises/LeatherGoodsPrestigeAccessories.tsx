import SplitImageText from "../../components/detail/SplitImageText.tsx";
import CreamCard from "../../components/detail/CreamCard.tsx";

function LeatherGoodsPrestigeAccessories() {
    return (
        <div>
            <SplitImageText
                eyebrow="LEATHER GOODS & PRESTIGE ACCESSORIES"
                title="Le Travail des Matières Nobles"
                lead="Des objets d'exception façonnés par la précision du geste et la maîtrise du temps."
                text="La maroquinerie de prestige repose sur la sélection des plus beaux cuirs, la qualité des assemblages et l'attention portée au moindre détail. Un accessoire d'exception ne se contente pas d'accompagner le quotidien : il incarne une identité, un savoir-faire et une vision appelée à durer."
                image="/logo.jpg"
                reverse
            />

            <CreamCard
                title="Notre Accompagnement"
                text="RJAYNA accompagne les créateurs et les maisons dans la conception, le positionnement et le développement de marques de maroquinerie et d'accessoires premium. Nous transformons leur savoir-faire en une proposition de marque forte, cohérente et commercialement performante."
                bullets={[
                    { label: "Territoire créatif", description: "Définition de l'identité, du style et des pièces emblématiques." },
                    { label: "Savoir-faire & production", description: "Identification d'ateliers et de partenaires spécialisés." },
                    { label: "Stratégie commerciale", description: "Lancement, distribution et développement de la marque." },
                ]}
                image="/logo.jpg"
                ctaLabel="Créer une maison de maroquinerie"
                ctaLink="/contact"
            />
        </div>
    );
}

export default LeatherGoodsPrestigeAccessories;