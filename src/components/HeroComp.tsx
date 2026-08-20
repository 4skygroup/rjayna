export default function HeroComp() {
    return (
        <section className="relative w-full h-screen">
            <img
                src="/paris.png"
                alt="À propos de RJAYNA"
                className="absolute inset-0 w-full h-full object-cover"
            />

            <div className="absolute inset-0 bg-black/30" />

            <div className="relative z-10 flex h-full items-center justify-center px-4">
                <h1 className="font-didot tracking-didot text-cream text-4xl sm:text-5xl md:text-6xl text-center uppercase">
                    À propos de RJAYNA
                </h1>
            </div>
        </section>
    );
}