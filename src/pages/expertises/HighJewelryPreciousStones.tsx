import SplitImageText from "../../components/detail/SplitImageText.tsx";
import CreamCard from "../../components/detail/CreamCard.tsx";

function HighJewelryPreciousStones() {
    return (
        <div>
            <SplitImageText
                eyebrow="HIGH JEWELRY & PRECIOUS STONES"
                title="L'Éclat des Pierres Rares"
                lead="La beauté des gemmes révélée par l'excellence de la haute joaillerie."
                text="La haute joaillerie transforme la matière minérale en sculpture de lumière. Diamants de couleur, émeraudes intenses et saphirs d'exception prennent vie entre les mains de maîtres lapidaires, joailliers et sertisseurs."
                image="/logo.jpg"
                reverse
            />

            <CreamCard
                title="Notre Accompagnement"
                text="RJAYNA accompagne les créateurs, maisons et investisseurs dans le développement de projets de haute joaillerie. Nous travaillons sur le positionnement, l'identité, l'expérience client et la stratégie commerciale afin de construire des maisons singulières capables de s'inscrire dans le temps."
                bullets={[
                    { label: "Identité joaillière", description: "Création d'un territoire esthétique reconnaissable." },
                    { label: "Collections & pièces signatures", description: "Structuration d'une offre cohérente et désirable." },
                    { label: "Développement de la maison", description: "Lancement, partenariats et rayonnement international." },
                ]}
                image="/logo.jpg"
                ctaLabel="Développer une maison de haute joaillerie"
                ctaLink="/contact"
            />
        </div>
    );
}

export default HighJewelryPreciousStones;