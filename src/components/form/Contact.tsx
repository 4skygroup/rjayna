import ContactForm from "./ContactForm.tsx";
import ContactInfoCards from "./ContactInfoCards.tsx";

export default function Contact() {
    return (
        <section className="w-full bg-white px-6 py-16 lg:px-16">
            <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 lg:grid-cols-2 lg:items-start">

                {/* ── Left column ── */}
                <div className="flex flex-col gap-8">
                    <div>
                        <h2 className="font-cormorant text-3xl font-semibold leading-tight tracking-tight text-black md:text-4xl">
                            Construisons votre croissance ensemble
                        </h2>
                        <p className="mt-3 max-w-md font-raleway text-sm leading-relaxed text-black/60">
                            Nos experts vous accompagnent dans la définition d'une stratégie digitale alignée sur vos objectifs. Contactez-nous selon le mode d'échange qui vous convient le mieux.
                        </p>
                    </div>

                    <ContactInfoCards />
                </div>

                {/* ── Right column ── */}
                <div>
                    <ContactForm />
                </div>

            </div>
        </section>
    );
}