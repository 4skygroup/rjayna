import SplitImageText from "../../components/detail/SplitImageText.tsx";
import CreamCard from "../../components/detail/CreamCard.tsx";

function PalaceHotel() {
    return (
        <div>
            <SplitImageText
                eyebrow="PALACE HOTELS & EXCLUSIVE RESORTS"
                title="L'Art du Séjour d'Exception"
                lead="Des établissements emblématiques où l'hospitalité, l'architecture et l'émotion composent une expérience inoubliable."
                text="Franchir les portes d'un palace ou d'un resort d'exception, c'est entrer dans un univers où chaque espace, chaque matière et chaque attention traduisent une vision singulière de l'hospitalité. Des palais historiques aux villas privées les plus confidentielles, ces lieux incarnent l'équilibre parfait entre héritage, innovation et excellence opérationnelle."
                image="/logo.jpg"
            />

            <CreamCard
                title="Notre Accompagnement"
                text="RJAYNA accompagne les investisseurs, propriétaires et opérateurs dans la conception, la structuration et le développement de projets hôteliers haut de gamme. Du positionnement initial au lancement opérationnel, nous bâtissons des établissements dotés d'une identité forte, d'une expérience client distinctive et d'un modèle économique durable."
                bullets={[
                    { label: "Concept & positionnement", description: "Création d'identités hôtelières fortes et différenciantes." },
                    { label: "Développement stratégique", description: "Étude du marché, modèle économique et stratégie de croissance." },
                    { label: "Pilotage opérationnel", description: "Coordination des partenaires jusqu'à l'ouverture de l'établissement." },
                ]}
                image="/logo.jpg"
                reverse
                ctaLabel="Développer un projet hôtelier d'exception"
                ctaLink="/contact"
            />
        </div>
    );
}

export default PalaceHotel;