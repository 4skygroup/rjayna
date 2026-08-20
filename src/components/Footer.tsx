import { Link } from "react-router-dom";

const navigationLinks = [
    { label: "Navigation", to: "/" },
    { label: "Expertises", to: "/expertises" },
    { label: "Approche", to: "/approche" },
    { label: "Contact", to: "/contact" },
];

const socialLinks = [
    { label: "Réseaux", href: "#" },
    { label: "Instragram", href: "#" },
    { label: "Tiktok", href: "#" },
];

export default function Footer() {
    return (
        <footer className="w-full bg-cream">
            <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-16 sm:py-20">
                <div className="flex flex-col md:flex-row md:justify-between gap-12">
                    {/* Logo + tagline */}
                    <div className="max-w-sm">
                        <h2 className="font-didot tracking-didot text-2xl uppercase">
                            Rjayna
                        </h2>
                        <p className="font-cormorant tracking-cormorant text-base sm:text-lg mt-4 leading-relaxed">
                            Le cabinet conseil dédié à l'excellence stratégique et à la
                            préservation du patrimoine immatériel des grandes maisons.
                        </p>
                    </div>

                    {/* Liens */}
                    <div className="flex flex-row gap-16 sm:gap-24">
                        <nav className="flex flex-col gap-4">
                            {navigationLinks.map((link) => (
                                <Link
                                    key={link.label}
                                    to={link.to}
                                    className="font-cormorant tracking-cormorant text-lg hover:opacity-70 transition-opacity"
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </nav>

                        <nav className="flex flex-col gap-4">
                            {socialLinks.map((link) => (
                                <a
                                    key={link.label}
                                    href={link.href}
                                    className="font-cormorant tracking-cormorant text-lg hover:opacity-70 transition-opacity"
                                >
                                    {link.label}
                                </a>
                            ))}
                        </nav>
                    </div>
                </div>

                {/* Copyright */}
                <div className="mt-16 sm:mt-20 text-center">
                    <p className="font-cormorant tracking-cormorant text-sm sm:text-base">
                        © 2026 Rjayna. Tous droits réservés
                    </p>
                </div>
            </div>
        </footer>
    );
}