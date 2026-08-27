import SplitImageText from "../../components/detail/SplitImageText.tsx";
import CreamCard from "../../components/detail/CreamCard.tsx";

function LuxuryConciergeLifestyleManagement() {
    return (
        <div>
            <SplitImageText
                eyebrow="LUXURY CONCIERGE & LIFESTYLE MANAGEMENT"
                title="L'Art de Rendre Possible"
                lead="Une gestion personnalisée du quotidien pour préserver la ressource la plus précieuse : le temps."
                text="La conciergerie privée transforme les demandes les plus complexes en solutions fluides, discrètes et parfaitement exécutées. Elle repose sur la réactivité, la qualité du réseau et une compréhension profonde des attentes de chaque client."
                image="/logo.jpg"
            />

            <CreamCard
                title="Notre Accompagnement"
                text="RJAYNA conçoit, structure et développe des maisons de conciergerie et des services de lifestyle management destinés aux clientèles HNWI, VHNWI et UHNW. Nous définissons leur offre, leurs standards opérationnels et leur stratégie de développement afin de garantir une expérience irréprochable."
                bullets={[
                    { label: "Architecture de services", description: "Création d'une offre claire, exclusive et personnalisable." },
                    { label: "Standards opérationnels", description: "Processus, qualité de service et gestion des demandes." },
                    { label: "Développement stratégique", description: "Partenariats, acquisition client et expansion internationale." },
                ]}
                image="/logo.jpg"
                reverse
                ctaLabel="Créer un service de conciergerie d'exception"
                ctaLink="/contact"
            />
        </div>
    );
}

export default LuxuryConciergeLifestyleManagement;