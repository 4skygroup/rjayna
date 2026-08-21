export default function PhilosophieSurMesure() {
    return (
        <section className=" px-6 py-20 md:px-10 lg:py-28">
            <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
                <div>
                    <h2 className="font-montserrat uppercase [transform:scaleY(0.85)] tracking-montserrat-title font-semibold text-base md:text-lg lg:text-xl">
                        Philosophie du sur-mesure
                    </h2>

                    <div className="mt-8 space-y-6 font-cormorant text-lg leading-relaxed text-black/80 md:text-xl">
                        <p>
                            Chez RJAYNA, nous considérons que la véritable stratégie ne se
                            crie pas, elle s'exécute avec une précision chirurgicale dans
                            l'ombre du succès.
                        </p>
                        <p>
                            Notre approche repose sur une compréhension profonde des actifs
                            immatériels. Qu'il s'agisse de repositionner une maison de luxe
                            séculaire ou de structurer l'écosystème d'un family office,
                            nous appliquons une méthodologie qui allie l'héritage
                            historique à l'intelligence prospective.
                        </p>
                        <p>
                            Chaque mission est un cas unique, traité avec une étanchéité
                            absolue. Nous ne produisons pas de rapports génériques ; nous
                            forgeons des solutions qui deviennent les fondations
                            invisibles mais indestructibles de votre vision.
                        </p>
                    </div>
                </div>

                <div className="w-full">
                    <img
                        src="/philosohie.png"
                        alt="philosophie de Rjayna"
                        className="h-full w-full min-h-[280px] object-cover md:min-h-[400px] rounded-2xl"
                    />
                </div>
            </div>
        </section>
    );
}