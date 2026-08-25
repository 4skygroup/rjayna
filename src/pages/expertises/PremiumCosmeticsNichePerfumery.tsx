import SplitImageText from "../../components/detail/SplitImageText.tsx";
import CreamCard from "../../components/detail/CreamCard.tsx";

function SpasWellnessHealthRetreats() {
    return (
        <div>
            <SplitImageText
                eyebrow="PREMIUM COSMETICS & NICHE PERFUMERY"
                title="L'Essence de la Beauté"
                lead="La rencontre de la science, de la sensorialité et de la création olfactive."
                text="La cosmétique d'exception et la parfumerie de niche s'affranchissent des tendances pour privilégier la rareté des ingrédients, la précision des formulations et la puissance de l'émotion. Chaque fragrance devient une signature intime, tandis que chaque soin transforme le rituel de beauté en expérience."
                image="/logo.jpg"
            />

            <CreamCard
                title="Notre Accompagnement"
                text="RJAYNA accompagne les fondateurs, laboratoires et maisons dans la conception et le développement de marques premium. Du territoire créatif à la stratégie de lancement, nous structurons des concepts cohérents, désirables et adaptés aux attentes d'une clientèle internationale."
                bullets={[
                    { label: "Identité de marque", description: "Création d'un univers distinctif et d'une narration forte." },
                    { label: "Concept produit", description: "Définition des gammes, usages et expériences sensorielles." },
                    { label: "Mise sur le marché", description: "Stratégie de lancement, distribution et développement commercial." },
                ]}
                image="/logo.jpg"
                reverse
                ctaLabel="Créer une marque de beauté d'exception"
                ctaLink="/contact"
            />
        </div>
    );
}

export default SpasWellnessHealthRetreats;