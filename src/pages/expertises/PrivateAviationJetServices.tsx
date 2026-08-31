import SplitImageText from "../../components/detail/SplitImageText.tsx";
import CreamCard from "../../components/detail/CreamCard.tsx";

function PrivateAviationJetServices() {
    return (
        <div>
            <SplitImageText
                eyebrow="PRIVATE AVIATION & JET SERVICES"
                title="Le Ciel Sans Contraintes"
                lead="La liberté de voyager selon son propre rythme, dans des conditions absolues de confort et de confidentialité."
                text="L'aviation privée transforme chaque déplacement en une expérience fluide, maîtrisée et personnalisée. Elle offre une flexibilité incomparable, un gain de temps considérable et un niveau de service adapté aux attentes des voyageurs les plus exigeants."
                image="/logo.jpg"
            />

            <CreamCard
                title="Notre Accompagnement"
                text="RJAYNA accompagne les opérateurs, courtiers et entreprises de services aéronautiques dans la conception et le développement de solutions d'aviation privée. Nous structurons leur offre, leur expérience client et leur stratégie de croissance sur les marchés premium."
                bullets={[
                    { label: "Architecture de services", description: "Charter, aviation d'affaires et solutions personnalisées." },
                    { label: "Expérience passager", description: "Parcours confidentiel, fluide et hautement qualitatif." },
                    { label: "Développement international", description: "Partenariats stratégiques et expansion commerciale." },
                ]}
                image="/logo.jpg"
                reverse
                ctaLabel="Développer un service d'aviation privée"
                ctaLink="/contact"
            />
        </div>
    );
}

export default PrivateAviationJetServices;