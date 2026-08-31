import { Phone, Mail } from "lucide-react";
import { useState } from "react";

const FORMSPREE = "";

type Tab = "callback" | "message";

const timeSlots = [
    "9h30 – 10h30",
    "10h30 – 11h30",
    "11h30 – 12h30",
    "14h00 – 15h00",
    "15h00 – 16h00",
    "16h00 – 17h00",
    "17h00 – 18h00",
];

const subjects = [
    "Strategy Consulting",
    "Concept Development",
    "Project Management",
    "Growth & Expansion",
    "Operational Excellence",
    "Autre",
];

export default function ContactForm() {
    const [activeTab, setActiveTab] = useState<Tab>("callback");

    return (
        <div className="rounded-2xl border border-black/10 bg-white p-1 shadow-sm">
            {/* Tab switcher */}
            <div className="mb-1 grid grid-cols-2 rounded-xl bg-black/5 p-1">
                <button
                    onClick={() => setActiveTab("callback")}
                    className={`flex items-center justify-center gap-2 rounded-lg px-4 py-2.5 font-cormorant text-xs font-medium transition-all duration-200 ${
                        activeTab === "callback"
                            ? "bg-black text-white shadow"
                            : "text-black/50 hover:text-black"
                    }`}
                >
                    <Phone className="w-4 h-4" />
                    Se faire rappeler
                </button>
                <button
                    onClick={() => setActiveTab("message")}
                    className={`flex items-center justify-center gap-2 rounded-lg px-4 py-2.5 font-cormorant text-xs font-medium transition-all duration-200 ${
                        activeTab === "message"
                            ? "bg-black text-white shadow"
                            : "text-black/50 hover:text-black"
                    }`}
                >
                    <Mail className="w-4 h-4" />
                    Envoyer un message
                </button>
            </div>

            {/* Form body */}
            <div className="p-5">
                {activeTab === "callback" ? <CallbackForm /> : <MessageForm />}
            </div>
        </div>
    );
}

function CallbackForm() {
    const [nom, setNom] = useState("");
    const [prenom, setPrenom] = useState("");
    const [tel, setTel] = useState("");
    const [sujet, setSujet] = useState("");
    const [horaire, setHoraire] = useState("");
    const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("sending");

        const res = await fetch(FORMSPREE, {
            method: "POST",
            headers: { "Content-Type": "application/json", Accept: "application/json" },
            body: JSON.stringify({ nom, prenom, tel, sujet, horaire }),
        });

        if (res.ok) {
            setStatus("sent");
            setNom("");
            setPrenom("");
            setTel("");
            setSujet("");
            setHoraire("");
        } else {
            setStatus("error");
        }
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <Field label="Nom" placeholder="Dupont" value={nom} onChange={setNom} />
                <Field label="Prénom" placeholder="Jean" value={prenom} onChange={setPrenom} />
            </div>
            <Field label="Numéro de téléphone" placeholder="+33 6 12 34 56 78" type="tel" value={tel} onChange={setTel} />
            <SelectField label="Sujet" options={subjects} value={sujet} onChange={setSujet} />
            <SelectField label="Horaire de l'appel" options={timeSlots} value={horaire} onChange={setHoraire} />

            {status === "sent" && (
                <p className="text-sm text-green-600 text-center">Demande envoyée avec succès !</p>
            )}
            {status === "error" && (
                <p className="text-sm text-red-600 text-center">Une erreur est survenue. Réessaie.</p>
            )}

            <button
                type="submit"
                disabled={status === "sending"}
                className="mt-2 flex w-full items-center justify-center gap-2 rounded-xl bg-black py-3 text-sm font-semibold text-white transition hover:bg-black/85 active:scale-[0.98] disabled:opacity-50"
            >
                <Phone className="w-4 h-4" />
                {status === "sending" ? "Envoi…" : "Demander un rappel"}
            </button>
        </form>
    );
}

function MessageForm() {
    const [nom, setNom] = useState("");
    const [prenom, setPrenom] = useState("");
    const [email, setEmail] = useState("");
    const [sujet, setSujet] = useState("");
    const [message, setMessage] = useState("");
    const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("sending");

        const res = await fetch(FORMSPREE, {
            method: "POST",
            headers: { "Content-Type": "application/json", Accept: "application/json" },
            body: JSON.stringify({ nom, prenom, email, sujet, message }),
        });

        if (res.ok) {
            setStatus("sent");
            setNom("");
            setPrenom("");
            setEmail("");
            setSujet("");
            setMessage("");
        } else {
            setStatus("error");
        }
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <Field label="Nom" placeholder="Nom" value={nom} onChange={setNom} />
                <Field label="Prénom" placeholder="Prénom" value={prenom} onChange={setPrenom} />
            </div>
            <Field label="Email" placeholder="jean@exemple.com" type="email" value={email} onChange={setEmail} />
            <SelectField label="Sujet" options={subjects} value={sujet} onChange={setSujet} />

            <div className="flex flex-col gap-1.5">
                <label className="font-cormorant text-xs font-medium uppercase tracking-widest text-black/50">
                    Message
                </label>
                <textarea
                    rows={4}
                    placeholder="Dites-nous en quoi nous pouvons vous aider…"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full resize-none rounded-xl border border-black/10 bg-black/[0.03] px-4 py-3 text-sm text-black placeholder:text-black/30 outline-none transition focus:border-black/30 focus:bg-black/5"
                />
            </div>

            {status === "sent" && (
                <p className="text-sm text-green-600 text-center">Message envoyé avec succès !</p>
            )}
            {status === "error" && (
                <p className="text-sm text-red-600 text-center">Une erreur est survenue. Réessaie.</p>
            )}

            <button
                type="submit"
                disabled={status === "sending"}
                className="mt-2 flex w-full items-center justify-center gap-2 rounded-xl bg-black py-3 text-sm font-semibold text-white transition hover:bg-black/85 active:scale-[0.98] disabled:opacity-50"
            >
                <Mail className="w-4 h-4" />
                {status === "sending" ? "Envoi…" : "Envoyer le message"}
            </button>
        </form>
    );
}

function Field({label, placeholder, type = "text", value, onChange,}: {
    label: string;
    placeholder: string;
    type?: string;
    value: string;
    onChange: (v: string) => void;
}) {
    return (
        <div className="flex flex-col gap-1.5">
            <label className="font-cormorant text-xs font-medium uppercase tracking-widest text-black/50">
                {label}
            </label>
            <input
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={(e) => onChange(e.target.value)}
                className="w-full rounded-xl border border-black/10 bg-black/[0.03] px-4 py-3 text-sm text-black placeholder:text-black/30 outline-none transition focus:border-black/30 focus:bg-black/5"
            />
        </div>
    );
}

function SelectField({label, options, value, onChange,}: {
    label: string;
    options: string[];
    value: string;
    onChange: (v: string) => void;
}) {
    return (
        <div className="flex flex-col gap-1.5">
            <label className="font-cormorant text-xs font-medium uppercase tracking-widest text-black/50">
                {label}
            </label>
            <select
                value={value}
                onChange={(e) => onChange(e.target.value)}
                className="w-full appearance-none rounded-xl border border-black/10 bg-black/[0.03] px-4 py-3 text-sm text-black outline-none transition focus:border-black/30 focus:bg-black/5"
            >
                <option value="" disabled className="text-black/50">
                    Sélectionner…
                </option>
                {options.map((o) => (
                    <option key={o} value={o} className="text-black">
                        {o}
                    </option>
                ))}
            </select>
        </div>
    );
}