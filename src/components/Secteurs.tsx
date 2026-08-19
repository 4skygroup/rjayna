const secteurs = [
    {
        titre: "Rare Spirits",
        description: "Curations exclusives et intelligence de marché pour les grands crus.",
    },
    {
        titre: "Fine Watchmaking",
        description: "Héritage technique et stratégie de rareté pour l'horlogerie d'art.",
    },
    {
        titre: "Prime Real Estate",
        description: "Transactions off-market et conseil en patrimoine immobilier mondial.",
    },
    {
        titre: "Superyachts",
        description: "Design, gestion et affrètement de navires d'exception.",
    },
];

export default function Secteurs() {
    return (
        <section className="w-full">
            <div className="max-w-7xl mx-auto px-4 py-16 md:py-24">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
                    {secteurs.map((secteur, index) => (
                        <div
                            key={index}
                            className="py-8 sm:py-0 sm:pr-8 lg:pl-8 lg:first:pl-0"
                        >
                            <h3 className="font-cormorant text-lg tracking-cormorant mb-4">
                                {secteur.titre}
                            </h3>
                            <p className="font-cormorant text-sm text-slate leading-relaxed">
                                {secteur.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}