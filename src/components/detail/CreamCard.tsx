import { Link } from "react-router-dom";

type Bullet = { label: string; description: string };

type CreamCardProps = {
    title: string;
    text: string;
    bullets?: Bullet[];
    image: string;
    imageAlt?: string;
    reverse?: boolean;
    ctaLabel: string;
    ctaLink: string;
};

export default function CreamCard({
    title,
    text,
    bullets,
    image,
    imageAlt = "",
    reverse = false,
    ctaLabel,
    ctaLink,

}: CreamCardProps) {
    return (
        <section className="bg-cream rounded-3xl p-6 md:p-12 mx-4 sm:mx-6 lg:mx-8 mb-8 md:mb-12">
            <div
                className={`flex flex-col md:flex-row ${
                    reverse ? "md:flex-row-reverse" : ""
                } items-center gap-8 md:gap-14`}
            >
                <div className="w-full md:w-1/2 space-y-5">
                    <h2 className="font-montserrat uppercase [transform:scaleY(0.85)] tracking-montserrat-title font-semibold text-base md:text-lg lg:text-xl">
                        {title}
                    </h2>

                    <p className="font-cormorant text-base md:text-lg leading-relaxed">
                        {text}
                    </p>

                    {bullets && bullets.length > 0 && (
                        <ul className="space-y-3 pt-2">
                            {bullets.map((b, i) => (
                                <li
                                    key={i}
                                    className="font-cormorant text-base md:text-lg leading-relaxed"
                                >
                                    <span className="font-semibold">
                                        {b.label}
                                    </span>{" "}
                                    : {b.description}
                                </li>
                            ))}
                        </ul>
                    )}

                    <Link
                        to={ctaLink}
                        className="inline-block mt-4 bg-white px-6 py-3 font-raleway tracking-raleway text-sm uppercase rounded-xs"
                    >
                        {ctaLabel}
                    </Link>
                </div>

                <div className="w-full md:w-1/2">
                    <img
                        src={image}
                        alt={imageAlt}
                        className="w-full h-auto object-cover rounded-xl"
                    />
                </div>
            </div>
        </section>
    );
}