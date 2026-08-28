import SplitImageText from "../../components/detail/SplitImageText.tsx";
import CreamCard from "../../components/detail/CreamCard.tsx";

function YachtingNavalDesign() {
    return (
        <div>
            <SplitImageText
                eyebrow="YACHTING & NAVAL DESIGN"
                title="La Liberté des Mers"
                lead="La grande plaisance réinventée à travers le design, la technologie et l'art de vivre."
                text="Naviguer à bord d'un superyacht offre un sentiment de liberté unique, associé au confort des plus grands établissements hôteliers. L'architecture navale contemporaine réunit lignes audacieuses, intérieurs sur mesure et technologies avancées pour créer de véritables résidences flottantes."
                image="/logo.jpg"
                reverse
            />

            <CreamCard
                title="Notre Accompagnement"
                text="RJAYNA accompagne les acteurs du yachting, du charter et des services nautiques premium dans la structuration et le développement de leurs projets. Nous concevons des expériences distinctives et des stratégies adaptées aux exigences d'une clientèle internationale."
                bullets={[
                    { label: "Concept & expérience", description: "Définition d'un univers de marque et de services à bord." },
                    { label: "Écosystème spécialisé", description: "Coordination avec chantiers, designers, courtiers et opérateurs." },
                    { label: "Développement commercial", description: "Positionnement, partenariats et accès aux marchés internationaux." },
                ]}
                image="/logo.png"
                ctaLabel="Développer un projet dans le yachting"
                ctaLink="/contact"
            />
        </div>
    );
}

export default YachtingNavalDesign;