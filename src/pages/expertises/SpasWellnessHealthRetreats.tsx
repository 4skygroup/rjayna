import SplitImageText from "../../components/detail/SplitImageText.tsx";
import CreamCard from "../../components/detail/CreamCard.tsx";
import SEO from "../../components/SEO.tsx";

function SpasWellnessHealthRetreats() {
    return (
        <div>
            <SEO
                title="Spas, Wellness & Health Retreats — RJAYNA"
                description="RJAYNA accompagne la création et le développement de spas, wellness retreats et concepts premium dédiés au bien-être, à la santé préventive et à la longévité."
                canonical="https://rjayna.com/expertises/spas-wellness"
            />

            <SplitImageText
                eyebrow="SPAS, WELLNESS & HEALTH RETREATS"
                title="Le Sanctuaire du Bien-Être"
                lead="Des lieux de régénération où la santé, la sérénité et l'innovation se rencontrent."
                text="Dans un monde en mouvement permanent, le temps consacré au ressourcement est devenu un luxe essentiel. Les spas et retraites de nouvelle génération associent approches holistiques, technologies avancées et rituels ancestraux afin d'offrir une expérience profonde de reconnexion."
                image="/logo.jpg"
                reverse
            />

            <CreamCard
                title="Notre Accompagnement"
                text="RJAYNA accompagne la création et le développement de concepts premium consacrés au bien-être, à la santé préventive et à la longévité. Nous structurons des projets cohérents, désirables et performants, depuis leur positionnement jusqu'à leur mise en exploitation."
                bullets={[
                    { label: "Concept wellness", description: "Définition de programmes et d'expériences personnalisées." },
                    { label: "Parcours client", description: "Conception d'un environnement favorisant l'apaisement et la transformation." },
                    { label: "Réseau d'experts", description: "Identification de praticiens, technologies et partenaires spécialisés." },
                ]}
                image="/logo.jpg"
                ctaLabel="Concevoir un concept de bien-être d'exception"
                ctaLink="/contact"
            />
        </div>
    );
}

export default SpasWellnessHealthRetreats;