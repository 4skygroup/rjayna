type SplitImageTextProps = {
    eyebrow?: string;
    title: string;
    lead?: string;
    text: string;
    image: string;
    imageAlt?: string;
    reverse?: boolean;
};

export default function SplitImageText({
    eyebrow,
    title,
    lead,
    text,
    image,
    imageAlt = "",
    reverse = false,
}: SplitImageTextProps) {
    return (
        <section
            className={`flex flex-col md:flex-row ${
                reverse ? "md:flex-row-reverse" : ""
            } items-center gap-10 md:gap-16 py-16 px-6 md:px-20`}
        >
            <div className="w-full md:w-1/2 space-y-5">
                {eyebrow && (
                    <p className="font-raleway tracking-raleway text-xs uppercase text-black">
                        {eyebrow}
                    </p>
                )}

                <h2 className="font-montserrat uppercase [transform:scaleY(0.85)] tracking-montserrat-title font-semibold text-base md:text-lg lg:text-xl">
                    {title}
                </h2>

                {lead && (
                    <p className="font-cormorant text-lg md:text-xl">{lead}</p>
                )}

                <p className="font-cormorant text-black text-base md:text-lg leading-relaxed">
                    {text}
                </p>
            </div>

            <div className="w-full md:w-1/2">
                <img src={image} alt={imageAlt} className="w-full h-auto object-cover" />
            </div>
        </section>
    );
}