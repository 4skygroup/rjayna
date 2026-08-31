import SplitImageText from "../../components/detail/SplitImageText.tsx";
import CreamCard from "../../components/detail/CreamCard.tsx";

function LuxuryECommercePhygitalExperience() {
    return (
        <div>
            <SplitImageText
                eyebrow="LUXURY E-COMMERCE & PHYGITAL EXPERIENCE"
                title="Le Commerce Connecté d'Exception"
                lead="La rencontre entre l'efficacité du numérique et l'émotion d'un service profondément humain."
                text="Le luxe contemporain redéfinit l'expérience d'achat en associant la puissance des plateformes digitales à la qualité du conseil personnalisé. Commerce en ligne, rendez-vous privés, essayages à domicile et boutiques immersives composent désormais un parcours sans rupture."
                image="/logo.jpg"
            />

            <CreamCard
                title="Notre Accompagnement"
                text="RJAYNA accompagne les maisons et entrepreneurs dans la création de plateformes e-commerce premium et d'expériences phygitales sur mesure. Nous structurons des parcours fluides, cohérents et exclusifs, pensés pour renforcer la relation entre la marque et ses clients."
                bullets={[
                    { label: "Stratégie omnicanale", description: "Connexion cohérente entre les expériences physiques et digitales." },
                    { label: "Parcours client premium", description: "Personnalisation, simplicité et qualité de service." },
                    { label: "Développement technologique", description: "Coordination des expertises créatives, commerciales et techniques." },
                ]}
                image="/logo.jpg"
                reverse
                ctaLabel="Concevoir une expérience phygitale premium"
                ctaLink="/contact"
            />
        </div>
    );
}

export default LuxuryECommercePhygitalExperience;