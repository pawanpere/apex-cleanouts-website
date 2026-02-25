import React, { useEffect, useRef } from 'react';
import { Sparkles, Clock3, Leaf, BadgeDollarSign } from 'lucide-react';
import gsap from 'gsap';
import SectionLabel from '../shared/SectionLabel';

const differentiators = [
    {
        icon: Sparkles,
        title: 'Comprehensive "Broom-Clean" Guarantee',
        desc: "We don't just haul your items; we ensure the property is left spotless, swept, and ready for immediate sale or new tenants."
    },
    {
        icon: Clock3,
        title: 'Rapid Response Team',
        desc: "Specializing in emergency and fast-turnaround cleanouts to meet strict real estate closing dates or move-out deadlines."
    },
    {
        icon: Leaf,
        title: 'Eco-Conscious Disposal',
        desc: "We prioritize donating and recycling over the landfill, ensuring your unwanted items find a second home or are disposed of sustainably."
    },
    {
        icon: BadgeDollarSign,
        title: 'Transparent, No-Hide Pricing',
        desc: "Upfront, honest quotes based strictly on volume with zero hidden fees. You know exactly what to expect before we even start lifting."
    }
];

const WhyChooseUs = () => {
    const sectionRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo('.diff-card',
                { y: 30, opacity: 0 },
                {
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: 'top 75%',
                    },
                    y: 0,
                    opacity: 1,
                    duration: 0.6,
                    stagger: 0.15,
                    ease: 'power2.out'
                }
            );
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="py-24 bg-[#0F3D24] relative text-white override-bg-texture">
            {/* Background Texture Overlay */}
            <div className="absolute inset-0 opacity-[0.06] mix-blend-overlay bg-[url('/images/hero-bg.png')] bg-cover bg-center"></div>

            <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">

                <div className="text-center max-w-3xl mx-auto mb-16">
                    <SectionLabel text="WHY CHOOSE US" variant="dark" />
                    <h2 className="text-4xl md:text-5xl font-heading font-extrabold mt-2">
                        The <span className="text-[#22C55E]">Apex</span> Difference
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {differentiators.map((item, idx) => {
                        const Icon = item.icon;
                        return (
                            <div
                                key={idx}
                                className="diff-card bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-colors duration-300"
                            >
                                <div className="w-16 h-16 rounded-xl bg-[#22C55E]/20 flex items-center justify-center mb-6 border border-[#22C55E]/30">
                                    <Icon size={32} className="text-[#22C55E]" />
                                </div>

                                <h3 className="text-xl font-heading font-bold mb-4 leading-snug">
                                    {item.title}
                                </h3>

                                <p className="text-white/70 text-sm leading-relaxed">
                                    {item.desc}
                                </p>
                            </div>
                        );
                    })}
                </div>

            </div>
        </section>
    );
};

export default WhyChooseUs;
