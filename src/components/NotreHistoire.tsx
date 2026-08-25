export default function NotreHistoire() {
    return (
        <section className="w-full grid lg:grid-cols-2">
            {/* Colonne texte */}
            <div className="bg-cream flex items-center px-6 py-16 sm:px-12 lg:px-16 xl:px-24">
                <div className="max-w-xl mx-auto lg:mx-0">
                    <h2 className="font-montserrat uppercase [transform:scaleY(0.85)] tracking-montserrat-title font-semibold text-base md:text-lg lg:text-xl mb-10">
                        Notre histoire
                    </h2>

                    <div className="font-raleway text-black text-sm sm:text-base leading-relaxed space-y-6">
                        <p>
                            RJAYNA est née en 2026 d’une vision portée par Robbin James : créer une maison de conseil entièrement dédiée aux univers du luxe et de l’hospitality, capable d’accompagner aussi bien la naissance d’un concept que son développement et son rayonnement.
                        </p>
                        <p>
                            Dès sa création, RJAYNA s’est construite autour d’une approche mêlant conseil stratégique, business development et project management, avec une conviction forte : chaque projet doit posséder une identité singulière, une vision claire et une expérience capable de créer de la valeur dans le temps.
                        </p>
                        <p>
                            Hôtellerie, restauration, nightlife, immobilier de prestige, conciergerie, aviation privée, yachting ou encore maisons de luxe : RJAYNA accompagne les entrepreneurs, investisseurs et marques dans la réflexion, la structuration et le développement de leurs projets.
                        </p>
                        <p>
                            Notre ambition est claire : faire de RJAYNA une maison de conseil de référence dans le luxe et l’hospitality, en France comme à l’international, tout en préservant ce qui fait la singularité et l’ADN de chaque projet.
                        </p>
                    </div>

                    <div className="mt-10 font-raleway text-sm">
                        <p className="font-semibold tracking-raleway">Robbin James</p>
                        <p className="italic text-slate">Global CEO — RJAYNA</p>
                    </div>
                </div>
            </div>

            {/* Colonne image */}
            <div className="relative min-h-[400px] lg:min-h-full overflow-hidden">
                <img
                    src="/robbin.png"
                    alt="Notre histoire RJAYNA"
                    className="w-full h-full object-contain"
                    loading="lazy"
                />
            </div>
        </section>
    );
}