interface Pilier {
    titre: string;
    description: string;
}

const piliers: Pilier[] = [
    {
        titre: "Conseils juridiques",
        description:
            "Juristes spécialisés en droit international privé et protection des actifs familiaux.",
    },
    {
        titre: "Historiens & archivistes",
        description:
            "Refonte des écosystèmes narratifs et opérationnels pour garantir une cohérence absolue à travers tous les points de contact.",
    },
    {
        titre: "Sécurité stratégique",
        description:
            "Experts en cybersécurité et protection physique de haut niveau pour décideurs.",
    },
];

export default function EcosystemeDeConfiance() {
    return (
        <section>
            <div className="mx-auto max-w-6xl px-6 py-16 sm:py-20 lg:px-12 lg:py-24">
                {/* En-tête */}
                <div className="text-center">
                    <h2 className="font-didot tracking-didot text-sm uppercase font-bold sm:text-xl">
                        L'écosystème de confiance
                    </h2>
                    <p className="mx-auto mt-4 max-w-4xl font-cormorant text-base leading-relaxed text-neutral-700 sm:text-lg">
                        Une approche stratégique au service de l'Art de Vivre. Nous
                        accompagnons les maisons de prestige dans leur quête de
                        pertinence et d'intelligence historique.
                    </p>
                </div>

                {/* Piliers */}
                <div className="mt-14 grid grid-cols-1 gap-10 sm:grid-cols-2 sm:gap-8 lg:mt-16 lg:grid-cols-3 lg:gap-36">
                    {piliers.map((pilier) => (
                        <div key={pilier.titre}>
                            <h3 className="font-didot tracking-didot text-xs uppercase text-neutral-900 sm:text-sm">
                                {pilier.titre}
                            </h3>
                            <p className="mt-3 font-cormorant text-base leading-relaxed text-neutral-700">
                                {pilier.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}