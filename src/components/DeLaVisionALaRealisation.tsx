const etapes = [
    {
        numero: "1",
        citation: "« Transformer les connaissances en une base solide. »",
        description: "Analyse de marché, stratégie de positionnement, plans d'affaires.",
    },
    {
        numero: "2",
        citation: "« Traduire la stratégie en un concept distinctif. »",
        description: "Identité de marque, design narratif, direction de l'expérience.",
    },
    {
        numero: "3",
        citation: "« Donner vie au concept et assurer la performance. »",
        description: "Recrutement clé, manuels opérationnels, audits d'excellence.",
    },
];

export default function DeLaVisionALaRealisation() {
    return (
        <section className="bg-cream px-6 py-20 md:px-10 lg:py-28">
            <div className="mx-auto max-w-6xl">
                <h2 className="font-didot tracking-didot text-2xl uppercase md:text-3xl">
                    De la vision à la réalisation
                </h2>

                <div className="mt-16 grid grid-cols-1 divide-y divide-black/15 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
                    {etapes.map((etape) => (
                        <div
                            key={etape.numero}
                            className="flex flex-col items-center px-6 py-10 text-center first:pt-0 sm:py-0"
                        >
              <span className="flex h-8 w-8 items-center justify-center rounded-full border border-black/40 font-raleway text-xs">
                {etape.numero}
              </span>

                            <p className="mt-6 font-cormorant text-lg italic leading-relaxed text-black/80">
                                {etape.citation}
                            </p>

                            <p className="mt-4 font-cormorant text-base leading-relaxed text-black/60">
                                {etape.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}