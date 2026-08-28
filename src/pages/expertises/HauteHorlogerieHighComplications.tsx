import SplitImageText from "../../components/detail/SplitImageText.tsx";
import CreamCard from "../../components/detail/CreamCard.tsx";

function HauteHorlogerieHighComplications() {
    return (
        <div>
            <SplitImageText
                eyebrow="HAUTE HORLOGERIE & HIGH COMPLICATIONS"
                title="Le Temps Apprivoisé"
                lead="La rencontre de la haute mécanique, de la précision et de l'émotion horlogère."
                text="La haute horlogerie est le domaine de l'infiniment petit, où la maîtrise technique atteint un niveau exceptionnel. Tourbillons, répétitions minutes, calendriers perpétuels et chronographes à rattrapante deviennent des chefs-d'œuvre de micro-ingénierie."
                image="/logo.jpg"
                reverse
            />

            <CreamCard
                title="Notre Accompagnement"
                text="RJAYNA accompagne les manufactures, horlogers indépendants et entrepreneurs dans la création et le développement de projets horlogers premium. Nous valorisons leur singularité, leur héritage et leur capacité d'innovation à travers une stratégie de marque et une expérience client cohérentes."
                bullets={[
                    { label: "Positionnement horloger", description: "Définition de l'identité et de la proposition de valeur." },
                    { label: "Valorisation du savoir-faire", description: "Narration des métiers, des calibres et des complications." },
                    { label: "Développement de marque", description: "Lancement, distribution et implantation internationale." },
                ]}
                image="/logo.jpg"
                ctaLabel="Développer une maison horlogère"
                ctaLink="/contact"
            />
        </div>
    );
}

export default HauteHorlogerieHighComplications;