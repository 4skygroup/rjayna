export default function QuiNousSommes() {
    return (
        <section>
            <div className="mx-auto max-w-7xl px-6 py-16 sm:py-20 lg:px-12 lg:py-24">
                <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
                    {/* Colonne texte */}
                    <div className="order-2 lg:order-1">
                        <h2 className="font-didot tracking-didot text-sm uppercase font-bold sm:text-xl">
                            Qui nous sommes&nbsp;?
                        </h2>

                        <div className="mt-6 space-y-4 font-cormorant text-base leading-relaxed text-neutral-800 sm:text-lg">
                            <p>
                                Fondée par des stratèges issus des plus grandes maisons de
                                prestige, Rjayna s'adresse à une clientèle restreinte :
                                dirigeants de palaces, familles fondatrices, maisons
                                joaillières centenaires.
                            </p>
                            <p>
                                RJAYNA est un cabinet de conseil stratégique né de la volonté
                                de définir les nouveaux standards de l'hospitalité et du
                                lifestyle ultra-luxe. Nous appliquons les standards créatifs
                                et opérationnels les plus exigeants, adaptés à la vision
                                unique de chaque client.
                            </p>
                            <p>
                                Forts d'un réseau mondial et d'une intelligence opérationnelle
                                de pointe, nous intervenons là où la complexité exige une
                                clarté absolue.
                            </p>
                        </div>
                    </div>

                    {/* Colonne image */}
                    <div className="order-1 lg:order-2">
                        <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate/20 sm:aspect-[16/10] lg:aspect-[4/3]">
                            <img
                                src="/img.png"
                                alt="Bateau de luxe vu du ciel"
                                className="h-full w-full object-cover"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}