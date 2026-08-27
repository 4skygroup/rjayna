import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const navLinks = [
    { label: "À propos", href: "/a-propos" },
    { label: "Expertises", href: "/expertises" },
    { label: "Approche", href: "/approche" },
    { label: "Contactez-nous", href: "/contact" },
];

export default function Navbar({ onLogoClick }: { onLogoClick: () => void }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <header className="relative w-full">
                <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 md:px-10">
                    <button
                        type="button"
                        onClick={() => setIsOpen(true)}
                        aria-label="Ouvrir le menu"
                        className="inline-flex items-center"
                    >
                        <Menu className="h-6 w-6" strokeWidth={1.2} />
                    </button>

                    <Link
                        to="/"
                        onClick={onLogoClick}
                        className="absolute left-1/2 -translate-x-1/2"
                    >
                        <img src="/rjayna.png" className="w-24" alt="RJAYNA" />
                    </Link>

                    <span className="w-6" />
                </nav>
            </header>

            {/* Backdrop */}
            <div
                onClick={() => setIsOpen(false)}
                className={`fixed inset-0 z-40 bg-black/50 backdrop-blur-sm transition-opacity duration-500 ${
                    isOpen ? "opacity-100" : "pointer-events-none opacity-0"
                }`}
            />

            {/* Sidebar */}
            <aside
                className={`fixed left-0 top-0 z-50 h-full w-[85%] max-w-[420px] bg-black transition-transform duration-500 ease-in-out ${
                    isOpen ? "translate-x-0" : "-translate-x-full"
                }`}
            >
                <div className="flex items-center justify-end px-6 py-6">
                    <button
                        type="button"
                        onClick={() => setIsOpen(false)}
                        aria-label="Fermer le menu"
                        className="inline-flex items-center justify-center p-2 text-cream"
                    >
                        <X className="h-6 w-6" strokeWidth={1.2} />
                    </button>
                </div>

                <ul className="flex flex-col gap-8 px-10 pt-10">
                    {navLinks.map((link, index) => (
                        <li
                            key={link.href}
                            className={`overflow-hidden transition-all duration-500 ease-out ${
                                isOpen ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
                            }`}
                            style={{ transitionDelay: isOpen ? `${150 + index * 100}ms` : "0ms" }}
                        >
                            <Link
                                to={link.href}
                                onClick={() => setIsOpen(false)}
                            >
                                <p className="font-montserrat uppercase [transform:scaleY(0.85)] font-bold text-lg text-cream transition-colors hover:text-slate">
                                    {link.label}
                                </p>
                            </Link>
                        </li>
                    ))}
                </ul>
            </aside>
        </>
    );
}