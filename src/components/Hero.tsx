export default function Hero() {
    return (
        <section className="bg-cream rounded-3xl px-6 py-20 sm:px-10 sm:py-24 lg:px-20 lg:py-36 text-center max-w-[1400px] w-full mx-auto">
            <h1 className="font-main-title text-3xl sm:text-4xl lg:text-5xl leading-tight text-black font-semibold">
                Strategy Consulting, Business Development
                <br />
                &amp; Project Management
                <br />
                Luxury &amp; Hospitality
            </h1>

            <p className="font-cormorant tracking-cormorant text-black text-sm sm:text-base mt-6 max-w-2xl mx-auto">
                RJAYNA accompagne les maisons de prestige et les individualités d'exception
                dans la construction de stratégies rares, où chaque décision sert une seule
                exigence : l'intemporalité.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
                <button className="font-raleway tracking-raleway text-xs sm:text-sm uppercase bg-black text-white px-6 py-3 rounded-md w-full sm:w-auto">
                    Découvrir
                </button>
                <button className="font-raleway tracking-raleway text-xs sm:text-sm uppercase border border-black text-black px-6 py-3 rounded-md w-full sm:w-auto">
                    Contactez-nous
                </button>
            </div>
        </section>
    );
}