import type { FAQItem } from "./FaqData.tsx";
import { ChevronDown } from "lucide-react";

interface FAQRowProps {
    item: FAQItem;
    isOpen: boolean;
    onToggle: () => void;
}

const FAQRow = ({
    item,
    isOpen,
    onToggle,
}: FAQRowProps) => {
    return (
        <div className="border-b border-[#2A2A2A]">
            <button
                onClick={onToggle}
                className="w-full flex items-center justify-between py-5 px-0 text-left group"
                aria-expanded={isOpen}
            >
                <span className="font-cormorant tracking-cormorant text-lg lg:text-xl leading-relaxed text-black pr-4">
                    {item.question}
                </span>

                <ChevronDown
                    size={20}
                    strokeWidth={1.5}
                    className={`shrink-0 text-black transition-transform duration-300 ease-in-out ${
                        isOpen ? "rotate-180" : "rotate-0"
                    }`}
                />
            </button>

            <div
                className="overflow-hidden transition-all duration-300 ease-in-out"
                style={{
                    maxHeight: isOpen ? "500px" : "0px",
                    opacity: isOpen ? 1 : 0,
                }}
            >
                <p className="font-cormorant tracking-cormorant text-lg lg:text-xl leading-relaxed text-black mb-8">
                    {item.answer}
                </p>
            </div>
        </div>
    );
};

export default FAQRow;