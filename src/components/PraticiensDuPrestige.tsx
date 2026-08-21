const paragraphes = [
    "Nous ne sommes pas un cabinet de conseil traditionnel. Nous sommes des stratèges et des créateurs qui ont façonné des destinations iconiques.",
    "Notre équipe multidisciplinaire couvre tout le spectre d'un projet : de l'étude de marché initiale à l'audit post-ouverture, garantissant une intégrité conceptuelle sans compromis.",
];

export default function PraticiensDuPrestige() {
    return (
        <section className="w-full">
            <div className="max-w-7xl mx-auto px-4 py-16 md:py-24">
                <h2 className="font-montserrat uppercase tracking-montserrat-title font-semibold text-lg md:text-xl lg:text-2xl">
                    Praticiens du Prestige
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 max-w-4xl mx-auto">
                    {paragraphes.map((texte, index) => (
                        <p
                            key={index}
                            className="font-cormorant text-base leading-relaxed"
                        >
                            {texte}
                        </p>
                    ))}
                </div>
            </div>
        </section>
    );
}