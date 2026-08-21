const panels = [
    {
        eyebrow: "Découvrez",
        title: "Notre expertise",
        buttonText: "En savoir plus",
        href: "#",
        image: "/gauche-propos.png",
    },
    {
        eyebrow: "Rejoignez l'aventure RJAYNA",
        title: "Contactez nous",
        buttonText: "En savoir plus",
        href: "#",
        image: "droite-propos.png",
    },
];

export default function SplitBanner() {
    return (
        <section className="w-full grid sm:grid-cols-2">
            {panels.map((panel, index) => (
                <div key={index} className="relative h-[60vh] sm:h-[80vh]">
                    <img
                        src={panel.image}
                        alt={panel.title}
                        className="absolute inset-0 w-full h-full object-cover"
                    />

                    <div className="absolute inset-0 bg-black/40" />

                    <div className="relative z-10 h-full flex flex-col justify-end px-6 pb-12 sm:px-10 sm:pb-16">
                        <p className="font-raleway tracking-raleway text-cream text-xs sm:text-sm uppercase mb-3">
                            {panel.eyebrow}
                        </p>
                        <h2 className="text-white font-montserrat uppercase tracking-montserrat-title font-semibold text-lg md:text-xl lg:text-2xl mb-6">
                            {panel.title}
                        </h2>

                        <a
                            href={panel.href}
                            className="font-raleway tracking-raleway text-cream text-xs uppercase border border-cream px-6 py-3 w-fit hover:bg-cream hover:text-slate transition-colors"
                        >
                            {panel.buttonText}
                        </a>
                    </div>
                </div>
            ))}
        </section>
    );
}