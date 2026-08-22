import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const navLinks = [
    { label: "À propos", href: "/a-propos" },
    { label: "Expertises", href: "/expertises" },
    { label: "Approche", href: "/approche" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="w-full">
            <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-10">
                <Link
                    to="/"
                    onClick={() => setIsOpen(false)}
                >
                    <img src="/rjayna.png" className="w-25" alt="logo"/>
                </Link>

                <ul className="hidden items-center gap-10 md:flex">
                    {navLinks.map((link) => (
                        <li key={link.href}>
                            <Link
                                to={link.href}
                                className="font-raleway tracking-raleway text-xs uppercase text-black [transform:scaleY(0.85)] transition-colors hover:text-black"                            >
                                {link.label}
                            </Link>
                        </li>
                    ))}
                </ul>

                <Link
                    to="/contact"
                    className="hidden rounded-full bg-black px-6 py-2.5 font-raleway tracking-raleway text-sm uppercase text-cream transition-opacity hover:opacity-90 md:inline-block"
                >
                    <p className="font-raleway tracking-raleway text-xs uppercase text-white [transform:scaleY(0.85)] ">
                        Contactez - nous
                    </p>
                </Link>

                <button
                    type="button"
                    onClick={() => setIsOpen(true)}
                    className="inline-flex md:hidden"
                    aria-label="Ouvrir le menu"
                >
                    <Menu className="h-7 w-7" strokeWidth={1.5} />
                </button>
            </nav>

            {/* Overlay menu mobile */}
            <div
                className={`fixed inset-0 z-50 flex flex-col items-center bg-white text-black transition-transform duration-300 md:hidden ${
                    isOpen ? "translate-x-0" : "translate-x-full"
                }`}
            >
                <div className="flex w-full items-center justify-end px-6 py-6">
                    <button
                        type="button"
                        onClick={() => setIsOpen(false)}
                        aria-label="Fermer le menu"
                        className="inline-flex items-center justify-center p-2 text-black"
                    >
                        <X className="h-5 w-5" strokeWidth={1.5} />
                    </button>
                </div>

                <ul className="flex flex-1 flex-col items-center justify-center gap-8">
                    {navLinks.map((link) => (
                        <li key={link.href}>
                            <Link
                                to={link.href}
                                onClick={() => setIsOpen(false)}
                                className="font-raleway tracking-raleway text-base uppercase text-black transition-colors hover:text-cream"
                            >
                                {link.label}
                            </Link>
                        </li>
                    ))}
                </ul>

                <div className="pb-12">
                    <Link
                        to="/contact"
                        onClick={() => setIsOpen(false)}
                        className="rounded-full bg-cream px-8 py-3 font-raleway tracking-raleway text-sm uppercase text-black"
                    >
                        Contactez - nous
                    </Link>
                </div>
            </div>
        </header>
    );
}