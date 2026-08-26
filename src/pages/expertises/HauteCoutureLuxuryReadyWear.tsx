import SplitImageText from "../../components/detail/SplitImageText.tsx";
import CreamCard from "../../components/detail/CreamCard.tsx";

function HauteCoutureLuxuryReadyWear() {
    return (
        <div>
            <SplitImageText
                eyebrow="HAUTE COUTURE & LUXURY READY-TO-WEAR"
                title="L'Élégance Sur-Mesure"
                lead="La noblesse des étoffes, la perfection des coupes et l'audace de la création."
                text="La haute couture représente l'expression la plus exigeante de la création vestimentaire. Elle associe une vision artistique forte à des centaines d'heures de travail, réalisées par des artisans dont les gestes perpétuent un patrimoine unique."
                image="/logo.jpg"
                reverse
            />

            <CreamCard
                title="Notre Accompagnement"
                text="RJAYNA accompagne les créateurs, maisons et investisseurs dans la création, la structuration et le développement de marques de mode premium. Nous construisons leur positionnement, leur modèle économique et leur stratégie de rayonnement afin de transformer une vision créative en maison durable."
                bullets={[
                    { label: "Plateforme de marque", description: "Positionnement, identité et direction stratégique." },
                    { label: "Structuration des collections", description: "Cohérence de l'offre et valorisation du savoir-faire." },
                    { label: "Développement international", description: "Partenariats, distribution et implantation sur de nouveaux marchés." },
                ]}
                image="/logo.jpg"
                ctaLabel="Développer une maison de mode"
                ctaLink="/contact"
            />
        </div>
    );
}

export default HauteCoutureLuxuryReadyWear;