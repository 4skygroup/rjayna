import { Mail, Phone, Clock } from "lucide-react";

const cards = [
    {
        icon: <Mail className="w-5 h-5 text-black" />,
        label: "Email",
        value: "contact@rjayna.com",
    },
    {
        icon: <Phone className="w-5 h-5 text-black" />,
        label: "Téléphone",
        value: "+33 1 23 45 67 89",
    },
    {
        icon: <Clock className="w-5 h-5 text-black" />,
        label: "Horaires",
        value: "Lun–Ven · 9h30–19h00",
    },
];

export default function ContactInfoCards() {
    return (
        <div className="flex flex-col gap-3">
            {cards.map((card) => (
                <div
                    key={card.label}
                    className="flex items-center gap-4 rounded-xl border border-black/10 bg-black/[0.02] px-5 py-4"
                >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-black/5">
                        {card.icon}
                    </div>
                    <div>
                        <p className="font-cormorant text-xs font-medium uppercase tracking-widest text-black/40">
                            {card.label}
                        </p>
                        <p className="mt-0.5 font-cormorant text-sm font-medium text-black">{card.value}</p>
                    </div>
                </div>
            ))}

            <div className="mt-1 flex items-center gap-3">
                <img
                    src="/rjayna.png"
                    alt=""
                    className="h-8 w-auto object-contain"
                />
            </div>
        </div>
    );
}