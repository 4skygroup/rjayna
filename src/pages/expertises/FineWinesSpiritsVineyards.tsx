import SplitImageText from "../../components/detail/SplitImageText.tsx";
import CreamCard from "../../components/detail/CreamCard.tsx";

function FineWinesSpiritsVineyards() {
    return (
        <div>
            <SplitImageText
                eyebrow="FINE WINES, SPIRITS & VINEYARDS"
                title="Les Nectars d'Exception"
                lead="Des terroirs rares, des savoir-faire historiques et des signatures destinées à traverser le temps."
                text="Grands crus, spiritueux d'exception et cuvées confidentielles sont le fruit d'un terroir, d'une vision et d'un travail transmis au fil des générations. Chaque flacon porte une histoire, une identité et une émotion qui dépassent le simple plaisir de la dégustation."
                image="/logo.jpg"
            />

            <CreamCard
                title="Notre Accompagnement"
                text="RJAYNA accompagne les domaines, maisons et entrepreneurs dans la création, le repositionnement et le développement de marques de vins et spiritueux premium. Nous construisons des univers forts, des expériences de marque distinctives et des stratégies capables de rayonner sur les marchés internationaux."
                bullets={[
                    { label: "Stratégie de marque", description: "Positionnement, identité et narration du domaine ou de la maison." },
                    { label: "Expérience œnologique", description: "Développement de dégustations, lieux et parcours exclusifs." },
                    { label: "Développement commercial", description: "Partenariats, distribution et expansion internationale." },
                ]}
                image="/logo.jpg"
                reverse
                ctaLabel="Développer une maison de vins ou spiritueux"
                ctaLink="/contact"
            />
        </div>
    );
}

export default FineWinesSpiritsVineyards;