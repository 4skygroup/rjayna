export default function Discretion() {
    return (
        <section className="relative w-full">
            <img
                src="/img-approche.png"
                alt=""
                className="w-full h-[500px] sm:h-[600px] lg:h-[720px] object-cover"
            />

            <div className="relative -mt-24 mx-auto w-[90%] sm:absolute sm:top-[60%] sm:right-[15%] sm:-translate-y-1/2 sm:mt-0 sm:mx-0 sm:w-[380px] lg:w-[420px] bg-cream rounded-2xl p-8 lg:p-10 text-center">
                <p className="font-raleway tracking-raleway text-xs text-black uppercase mb-6">
                    La discrétion est notre sceau.
                </p>

                <p className="font-cormorant tracking-cormorant text-lg lg:text-xl leading-relaxed text-black mb-8">
                    Nous opérons exclusivement par recommandation directe.
                    Notre engagement envers la confidentialité est le pilier
                    central de notre relation de confiance avec nos clients.
                </p>

                <button className="bg-black text-cream font-raleway tracking-raleway text-xs uppercase px-8 py-4 rounded-full">
                    Contactez-nous
                </button>
            </div>
        </section>
    );
}