import { Link } from "react-router-dom";

const navLinks = [
    { label: "À propos", href: "/a-propos" },
    { label: "Expertises", href: "/expertises" },
    { label: "Approche", href: "/approche" },
];

export default function Navbar() {
    return (
        <header className="w-full">
            <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 md:px-10">
                <Link
                    to="/"
                    className="font-didot tracking-didot text-lg md:text-xl"
                >
                    RJAYNA
                </Link>

                <ul className="hidden items-center gap-10 md:flex">
                    {navLinks.map((link) => (
                        <li key={link.href}>
                            <Link
                                to={link.href}
                                className="font-raleway tracking-raleway text-sm uppercase text-black/80 transition-colors hover:text-black"
                            >
                                {link.label}
                            </Link>
                        </li>
                    ))}
                </ul>

                <Link
                    to="/contact"
                    className="hidden rounded-full bg-black px-6 py-2.5 font-raleway tracking-raleway text-sm uppercase text-cream transition-opacity hover:opacity-90 md:inline-block"
                >
                    Contacter
                </Link>

                {/* Menu mobile à brancher si besoin (burger, etc.) */}
                <button
                    type="button"
                    className="inline-block md:hidden"
                    aria-label="Ouvrir le menu"
                >
          <span className="font-raleway text-sm uppercase tracking-raleway">
            Menu
          </span>
                </button>
            </nav>
        </header>
    );
}