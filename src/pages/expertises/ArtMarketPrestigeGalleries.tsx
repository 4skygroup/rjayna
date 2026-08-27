import SplitImageText from "../../components/detail/SplitImageText.tsx";
import CreamCard from "../../components/detail/CreamCard.tsx";

function ArtMarketPrestigeGalleries() {
    return (
        <div>
            <SplitImageText
                eyebrow="10 / ART MARKET & PRESTIGE GALLERIES"
                title="Les Chefs-d'Œuvre du Temps"
                lead="Un univers de création, de transmission et de valorisation du patrimoine artistique."
                text="L'art constitue un puissant vecteur d'émotion, de réflexion et de transmission. Des maîtres anciens à la création contemporaine, chaque œuvre s'inscrit dans une histoire et dialogue avec les sensibilités de son époque."
                image="/logo.jpg"
            />

            <CreamCard
                title="Notre Accompagnement"
                text="RJAYNA accompagne le développement de galeries, d'espaces culturels, de collections privées et de collaborations entre artistes et maisons de luxe. Nous structurons leur positionnement, leur programmation et leur rayonnement afin de créer des projets artistiques cohérents et durables."
                bullets={[
                    { label: "Concept & positionnement", description: "Définition de l'identité du lieu ou de l'initiative artistique." },
                    { label: "Réseau culturel", description: "Mise en relation avec artistes, galeries, experts et institutions." },
                    { label: "Développement de projets", description: "Expositions, collaborations et expériences culturelles exclusives." },
                ]}
                image="/logo.jpg"
                reverse
                ctaLabel="Développer un projet artistique d'exception"
                ctaLink="/contact"
            />
        </div>
    );
}

export default ArtMarketPrestigeGalleries;