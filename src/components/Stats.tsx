const stats = [
    { number: "20", label: "Univers d'Expertise" },
    { number: "3", label: "Paris, Londres, New York" },
    { number: "10", label: "Années d'Expertise" },
];

export default function Stats() {
    return (
        <section className="w-full py-16 sm:py-20">
            <div className="max-w-7xl mx-auto px-4 grid grid-cols-3">
                {stats.map((stat, index) => (
                    <div
                        key={index}
                        className="flex flex-col items-center text-center px-2 sm:px-6"
                    >
                        <span className="font-cormorant tracking-didot text-4xl sm:text-5xl lg:text-6xl text-black">
                          {stat.number}
                        </span>
                        <span className="mt-3 sm:mt-4 font-cormorant tracking-raleway text-xs sm:text-sm text-black whitespace-pre-line">
                          {stat.label}
                        </span>
                    </div>
                ))}
            </div>
        </section>
    );
}