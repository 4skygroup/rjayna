import { Link } from "react-router-dom";

const linksColumn1 = [
    { label: "Catalogue", href: "" },
    { label: "Carrières au sein de RJAYNA", href: "" },
    { label: "Presse", href: "" },
    { label: "Contactez-nous", href: "" },
    { label: "Consulting", href: "" },
    { label: "À propos", href: "" },
    { label: "Gift Cards", href: "" },
];

const linksColumn2 = [
    { label: "Politique de confidentialité", href: "" },
    { label: "Politique des cookies", href: "" },
    { label: "Gérer les cookies", href: "" },
    { label: "Notice clients", href: "" },
    { label: "Termes et conditions d'utilisation", href: "" },
    { label: "Charte éthique", href: "" },
    { label: "Mentions légales", href: "" },
    { label: "Plan du site", href: "" },
];

export default function () {
    return (
        <section className="bg-cream px-4 py-16 sm:py-20 lg:py-24">
            <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8">

                {/* Bloc contact */}
                <div className="flex flex-col gap-6">
                    <img src="/rjayna.png" className="w-35" alt="logo"/>

                    <h2 className="font-montserrat uppercase [transform:scaleY(0.85)] tracking-montserrat-title font-semibold text-base md:text-lg lg:text-xl">
                        Contactez-nous
                    </h2>

                    <button className="w-fit border border-slate px-6 py-3 font-raleway tracking-raleway text-xs uppercase text-black [transform:scaleY(0.85)] hover:bg-slate hover:text-cream transition-colors">
                        Contactez-nous
                    </button>

                    <div className="flex items-center gap-4 pt-2">
                        <Link to="" aria-label="Instagram">
                            <svg className="w-4 h-4 text-black" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                                <rect x="3" y="3" width="18" height="18" rx="5" />
                                <circle cx="12" cy="12" r="4" />
                                <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" stroke="none" />
                            </svg>
                        </Link>
                        <Link to="" aria-label="Facebook">
                            <svg className="w-4 h-4 text-black" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                                <path d="M14 9h3V5h-3c-2.2 0-4 1.8-4 4v2H7v4h3v6h4v-6h3l1-4h-4V9c0-.6.4-1 1-1z" />
                            </svg>
                        </Link>
                        <Link to="" aria-label="LinkedIn">
                            <svg className="w-4 h-4 text-black" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                                <rect x="3" y="3" width="18" height="18" rx="2" />
                                <line x1="7.5" y1="10" x2="7.5" y2="17" />
                                <circle cx="7.5" cy="6.8" r="0.8" fill="currentColor" stroke="none" />
                                <path d="M12 17v-4.5c0-1.4 1-2.5 2.3-2.5s2.2 1.1 2.2 2.5V17" />
                            </svg>
                        </Link>
                    </div>
                </div>

                {/* Colonne de liens 1 */}
                <nav className="flex flex-col gap-6 lg:items-end lg:text-right">
                    {linksColumn1.map((link) => (
                        <Link
                            key={link.label}
                            to={link.href}
                            className="font-raleway tracking-raleway text-xs uppercase text-black [transform:scaleY(0.85)] hover:opacity-70 transition-opacity"
                        >
                            {link.label}
                        </Link>
                    ))}
                </nav>

                {/* Colonne de liens 2 */}
                <nav className="flex flex-col gap-6 lg:items-end lg:text-right">
                    {linksColumn2.map((link) => (
                        <Link
                            key={link.label}
                            to={link.href}
                            className="font-raleway tracking-raleway text-xs uppercase text-black [transform:scaleY(0.85)] hover:opacity-70 transition-opacity"
                        >
                            {link.label}
                        </Link>
                    ))}
                </nav>

            </div>
        </section>
    );
}