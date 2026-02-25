import React, { useState } from 'react';
import SectionLabel from '../shared/SectionLabel';
import { ChevronDown } from 'lucide-react';

const faqs = [
    {
        question: "Do you really guarantee a 'broom-clean' finish?",
        answer: "Yes. Simply hauling items away isn't enough. Our crews carry brooms, dustpans, and basic cleaning supplies on every truck to ensure the space where your junk was sitting is swept clean before we leave."
    },
    {
        question: "What items do you NOT accept?",
        answer: "While we take almost everything, we cannot legally transport hazardous materials including wet paint, chemicals, motor oil, asbestos, or medical waste. If you're unsure, just give us a call."
    },
    {
        question: "How does your pricing work?",
        answer: "Our pricing is strictly volume-based—you only pay for the space your items take up in our trucks. We provide a firm, no-obligation quote on-site, which includes all labor, transportation, and disposal fees. No hidden costs."
    },
    {
        question: "What do you do with the items you haul away?",
        answer: "We are committed to eco-conscious disposal. We first sort items for donation to local charities, then separate materials (like electronics and metals) for recycling, minimizing what ultimately goes to the landfill."
    },
    {
        question: "How fast can you get here?",
        answer: "We offer rapid response for emergency cleanouts. In many cases, we can accommodate same-day or next-day appointments depending on our routing and your location in the Belleville area."
    }
];

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(0);

    const toggleFaq = (index) => {
        setOpenIndex(openIndex === index ? -1 : index);
    };

    return (
        <section className="py-24 bg-white relative">
            <div className="max-w-7xl mx-auto px-4 md:px-8">

                <div className="text-center max-w-3xl mx-auto mb-16">
                    <SectionLabel text="FAQ" />
                    <h2 className="text-4xl md:text-5xl font-heading font-extrabold text-[#1E293B] mt-2 mb-6">
                        Frequently Asked Questions
                    </h2>
                    <p className="text-slate-600 font-sans text-lg">
                        Have questions about our cleanout process, pricing, or accepted items? We've got answers.
                    </p>
                </div>

                <div className="max-w-3xl mx-auto">
                    {faqs.map((faq, index) => {
                        const isOpen = openIndex === index;
                        return (
                            <div
                                key={index}
                                className="mb-4 border border-slate-200 rounded-2xl overflow-hidden hover:border-[#22C55E]/50 transition-colors bg-slate-50 shadow-sm"
                            >
                                <button
                                    className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                                    onClick={() => toggleFaq(index)}
                                    aria-expanded={isOpen}
                                >
                                    <span className={`font-heading font-bold text-lg md:text-xl pr-8 ${isOpen ? 'text-[#0F3D24]' : 'text-[#1E293B]'}`}>
                                        {faq.question}
                                    </span>
                                    <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 ${isOpen ? 'bg-[#0F3D24] text-white rotate-180' : 'bg-[#22C55E]/20 text-[#0F3D24]'}`}>
                                        <ChevronDown size={20} />
                                    </div>
                                </button>

                                <div
                                    className="overflow-hidden transition-all duration-300 ease-in-out"
                                    style={{ maxHeight: isOpen ? '500px' : '0' }}
                                >
                                    <div className="p-6 pt-0 text-slate-600 leading-relaxed font-sans">
                                        {faq.answer}
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
