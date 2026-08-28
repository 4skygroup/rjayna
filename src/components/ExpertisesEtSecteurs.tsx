import {Link} from "react-router-dom";

interface Expertise {
    label: string;
    image: string;
}

const expertisesHaut: Expertise[] = [
    { label: "Strategy Consulting", image: "img1.jpg" },
    { label: "Concept Development", image: "img2.png" },
];

const expertisesBas: Expertise[] = [
    { label: "Project Management", image: "img3.png" },
    { label: "Growth & Expansion", image: "img4.png" },
    { label: "Operational Excellence", image: "img5.png" },
];

function CarteExpertise({ label, image }: Expertise) {
    return (
        <div className="flex h-full flex-col">
            <div className="h-[260px] w-full overflow-hidden bg-neutral-200">
                <img
                    src={image}
                    alt={label}
                    className="h-full w-full object-cover"
                />
            </div>

            <Link to="/expertises">
                <div className="flex h-[38px] items-center justify-between bg-cream px-3">
                    <span className="font-cormorant text-sm leading-none text-neutral-900">
                        {label}
                    </span>
                    <span
                        aria-hidden="true"
                        className="text-lg leading-none text-neutral-900"
                    >
                        →
                    </span>
                </div>
            </Link>
        </div>
    );
}

export default function ExpertisesEtSecteurs() {
    return (
        <section className="bg-white">
            <div className="mx-auto max-w-6xl px-6 py-16 sm:py-20 lg:px-12 lg:py-24">
                {/* En-tête */}
                <div className="text-center">
                    <h2 className="font-montserrat uppercase [transform:scaleY(0.85)] tracking-montserrat-title font-semibold text-base md:text-lg lg:text-xl">
                        Expertises & secteurs
                    </h2>

                    <p className="mx-auto mt-4 max-w-2xl font-cormorant text-base leading-relaxed text-neutral-700 sm:text-lg">
                        Une approche stratégique au service de l'Art de Vivre. Nous
                        accompagnons les maisons de prestige dans leur quête de
                        pertinence et d'intelligence historique.
                    </p>
                </div>

                {/* Grille des expertises */}
                <div className="mx-auto mt-12 grid w-full max-w-[760px] grid-cols-1 gap-6 sm:grid-cols-6 sm:gap-[18px] lg:mt-16">
                    {/* Ligne du haut : 4 / 2 */}
                    {expertisesHaut.map((expertise, index) => (
                        <div
                            key={expertise.label}
                            className={
                                index === 0
                                    ? "sm:col-span-4"
                                    : "sm:col-span-2"
                            }
                        >
                            <CarteExpertise
                                label={expertise.label}
                                image={expertise.image}
                            />
                        </div>
                    ))}

                    {/* Ligne du bas : 2 / 2 / 2 */}
                    {expertisesBas.map((expertise) => (
                        <div
                            key={expertise.label}
                            className="sm:col-span-2"
                        >
                            <CarteExpertise
                                label={expertise.label}
                                image={expertise.image}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}