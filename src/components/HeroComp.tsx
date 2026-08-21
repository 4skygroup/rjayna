export default function HeroComp() {
    return (
        <section className="relative w-full h-screen">
            <img
                src="/hero-about.png"
                alt="À propos de RJAYNA"
                className="absolute inset-0 w-full h-full object-cover"
            />

            <div className="absolute inset-0 bg-black/30" />

            <div className="relative z-10 flex h-full items-center justify-center px-4">
                <h2 className="text-white font-montserrat uppercase tracking-montserrat-title font-semibold text-lg md:text-xl lg:text-4xl">
                    À propos de RJAYNA
                </h2>

            </div>
        </section>
    );
}