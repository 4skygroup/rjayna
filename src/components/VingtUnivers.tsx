import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

const expertises: { label: string; href: string }[] = [
    { label: "Palace Hotels & Exclusive Resorts", href: "/expertises/palace-hotels" },
    { label: "Luxury Real Estate", href: "/expertises/luxury-real-estate" },
    { label: "Fine Dining & Culinary Arts", href: "/expertises/fine-dining" },
    { label: "Spas, Wellness & Health Retreats", href: "/expertises/spas-wellness" },
    { label: "Fine Wines, Spirits & Vineyards", href: "/expertises/wines-spirits" },
    { label: "Premium Cosmetics & Niche Perfumery", href: "/expertises/cosmetics-perfumery" },
    { label: "Haute Couture & Luxury Ready-to-Wear", href: "/expertises/haute-couture" },
    { label: "Art de Vivre & Interior Design", href: "/expertises/art-de-vivre" },
    { label: "Leather Goods & Prestige Accessories", href: "/expertises/leather-goods" },
    { label: "Art Market & Prestige Galleries", href: "/expertises/art-market" },
    { label: "High Jewelry & Precious Stones", href: "/expertises/high-jewelry" },
    { label: "Luxury Concierge & Lifestyle Management", href: "/expertises/concierge-lifestyle" },
    { label: "Haute Horlogerie & High Complications", href: "/expertises/haute-horlogerie" },
    { label: "Prestige Events & Galas", href: "/expertises/prestige-events" },
    { label: "Yachting & Naval Design", href: "/expertises/yachting" },
    { label: "Luxury E-commerce & Phygital Experience", href: "/expertises/ecommerce-phygital" },
    { label: "Private Aviation & Jet Services", href: "/expertises/private-aviation" },
    { label: "Space Tourism & Private Expeditions", href: "/expertises/space-tourism" },
    { label: "Luxury Automobiles & Hypercars", href: "/expertises/luxury-automobiles" },
    { label: "Luxury Education & Excellence Academies", href: "/expertises/luxury-education" },
];

export default function VingtUnivers() {
    return (
        <section className="w-full bg-white py-16 lg:py-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Titre */}
                <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
                    <h2 className="font-montserrat uppercase [transform:scaleY(0.85)] tracking-montserrat-title font-semibold text-base md:text-lg lg:text-xl">
                        Vingt Univers, Une Seule Discipline
                    </h2>
                    <p className="font-cormorant tracking-cormorant text-lg sm:text-xl text-black mt-4">
                        Palace Hotels, Aviation Privée, Haute Joaillerie, Tourisme Spatial et seize
                        autres territoires d'excellence, chacun abordé avec la même rigueur stratégique.
                    </p>
                </div>

                {/* Liste des expertises */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
                    {expertises.map((item) => (
                        <Link
                            key={item.href}
                            to={item.href}
                            className="group flex items-center justify-between gap-4 rounded-full bg-cream/60 hover:bg-cream transition-colors px-6 py-4 sm:px-8 sm:py-5"
                        >
                            <span className="font-cormorant tracking-cormorant text-base sm:text-lg">
                                {item.label}
                            </span>
                            <span className="flex items-center justify-center shrink-0 w-8 h-8 rounded-full border border-black/20 group-hover:border-black/40 transition-colors">
                                <ArrowUpRight className="w-4 h-4" strokeWidth={1.5} />
                            </span>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}