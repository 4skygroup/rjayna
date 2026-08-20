import { useState } from "react";
import { faqData } from "./FaqData.tsx";
import FAQRow from "./FAQRow.tsx";

const FAQ = () => {

    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <section className="w-full bg-white flex flex-col items-center px-6 py-16">

            <h2 className="font-didot tracking-didot text-sm uppercase font-bold sm:text-xl">
                Questions Fréquentes
            </h2>

            <div className="w-full max-w-2xl">

                {faqData.map((item, index) => (
                    <FAQRow
                        key={item.id}
                        item={item}
                        isOpen={openIndex === index}
                        onToggle={() =>
                            setOpenIndex(
                                openIndex === index ? null : index
                            )
                        }
                    />
                ))}

            </div>

        </section>
    );
};

export default FAQ;