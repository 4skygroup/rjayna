export default function Approche() {
    return (
        <section className= "px-6 pb-16 sm:pb-20 lg:px-12 lg:pb-24">
            <div className="mx-auto max-w-6xl">
                <div className="grid grid-cols-1 items-center gap-8 rounded-[2.5rem] bg-cream px-8 py-14 sm:gap-10 sm:px-12 sm:py-16 lg:grid-cols-2 lg:gap-12 lg:px-16 lg:py-20">
                    {/* Colonne titre */}
                    <div>
                        <h2 className="font-didot tracking-didot text-xl uppercase text-neutral-900 sm:text-2xl">
                            L'approche
                        </h2>
                        <p className="mt-3 font-cormorant text-xs uppercase tracking-didot text-neutral-600 sm:text-sm">
                            La philosophie RJAYNA
                        </p>
                    </div>

                    {/* Colonne citation */}
                    <div>
                        <p className="text-center font-cormorant italic leading-relaxed text-neutral-700 sm:text-lg lg:text-left">
                            « Nous ne vendons pas des recommandations. Nous construisons des
                            convictions. »
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}