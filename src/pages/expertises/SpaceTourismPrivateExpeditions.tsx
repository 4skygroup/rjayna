import SplitImageText from "../../components/detail/SplitImageText.tsx";
import CreamCard from "../../components/detail/CreamCard.tsx";

function SpaceTourismPrivateExpeditions() {
    return (
        <div>
            <SplitImageText
                eyebrow="SPACE TOURISM & PRIVATE EXPEDITIONS"
                title="Les Nouvelles Frontières du Voyage"
                lead="Des expériences extraordinaires conçues pour celles et ceux qui souhaitent repousser les limites de l'exploration."
                text="Le luxe de demain réside aussi dans l'accès à des territoires encore préservés ou inaccessibles au plus grand nombre. Expéditions polaires, traversées privées, sommets mythiques et vols suborbitaux ouvrent une nouvelle ère du voyage expérientiel."
                image="/logo.jpg"
                reverse
            />

            <CreamCard
                title="Notre Accompagnement"
                text="RJAYNA accompagne la conception et le développement de projets d'exploration haut de gamme en collaboration avec des opérateurs spécialisés. Nous travaillons sur leur positionnement, leur modèle de service et leur mise sur le marché, avec une attention particulière portée à la sécurité et à la qualité de l'encadrement."
                bullets={[
                    { label: "Concepts d'expédition", description: "Création d'itinéraires et d'expériences rares." },
                    { label: "Réseau d'experts", description: "Identification d'opérateurs, guides et partenaires spécialisés." },
                    { label: "Standards d'excellence", description: "Sécurité, confidentialité et accompagnement personnalisé." },
                ]}
                image="/logo.jpg"
                ctaLabel="Concevoir une expérience d'exploration exclusive"
                ctaLink="/contact"
            />
        </div>
    );
}

export default SpaceTourismPrivateExpeditions;