const piliers = [
    {
        titre: "Intelligence Contextuelle",
        description:
            "Plongée profonde dans les dynamiques de marché et les psychologies de consommation pour identifier les leviers de valeur inexploités.",
    },
    {
        titre: "Structure de Marque",
        description:
            "Refonte des écosystèmes narratifs et opérationnels pour garantir une cohérence absolue à travers tous les points de contact.",
    },
    {
        titre: "Gouvernance Privée",
        description:
            "Accompagnement stratégique des décideurs dans la gestion de leur réputation et de la transmission de leur patrimoine immatériel.",
    },
];

export default function PiliersExecution() {
    return (
        <section className="px-6 py-20 md:px-10 lg:py-28">
            <div className="mx-auto max-w-4xl text-center">
                <h2 className="font-montserrat uppercase tracking-montserrat-title font-semibold text-lg md:text-xl lg:text-2xl">
                    Piliers d'exécution
                </h2>

                <p className="mt-6 font-cormorant text-lg leading-relaxed text-black/70 md:text-xl">
                    Une méthodologie rigoureuse articulée autour de trois axes
                    fondamentaux, garantissant une cohérence stratégique et une
                    excellence opérationnelle pour chaque projet.
                </p>
            </div>

            <div className="mx-auto mt-16 grid max-w-6xl grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3 lg:gap-10">
                {piliers.map((pilier) => (
                    <div key={pilier.titre} className="text-left">
                        <h3 className="font-raleway tracking-raleway text-sm uppercase text-black">
                            {pilier.titre}
                        </h3>
                        <p className="mt-4 font-cormorant text-lg leading-relaxed text-black/70">
                            {pilier.description}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
}