import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SectionLabel from '../shared/SectionLabel';
import { Search, ClipboardList, CheckCircle } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const processSteps = [
    {
        id: 1,
        title: "100% Free On-Site Estimate",
        description: "We arrive on time, evaluate the volume and type of items to be removed, and provide a transparent, no-obligation quote right then and there. No hidden fees.",
        icon: Search
    },
    {
        id: 2,
        title: "Eco-Conscious Removal",
        description: "Our uniformed team handles all the heavy lifting. We carefully remove the items from your property, immediately sorting recyclables and donatables from actual trash.",
        icon: ClipboardList
    },
    {
        id: 3,
        title: "Broom-Clean Finish",
        description: "Once the junk is loaded, we don't just drive away. We sweep the area completely clean, leaving your space spotless and ready for its next use.",
        icon: CheckCircle
    }
];

const Process = () => {
    const containerRef = useRef(null);

    useEffect(() => {
        // Only apply complex pin animation on desktop larger screens
        let mm = gsap.matchMedia();

        mm.add("(min-width: 1024px)", () => {
            const cards = gsap.utils.toArray('.process-card');

            cards.forEach((card, index) => {
                // Skip last card for pinning overlap
                if (index === cards.length - 1) return;

                // This makes the card "stick" and the next one slide over it
                ScrollTrigger.create({
                    trigger: card,
                    start: "top 120px", // Offset for fixed navbar
                    endTrigger: containerRef.current,
                    end: "bottom bottom",
                    pin: true,
                    pinSpacing: false,
                });

                // Add subtle scale down and fade out as next card comes up
                gsap.to(card, {
                    scale: 0.92,
                    opacity: 0.3,
                    filter: "blur(4px)",
                    ease: "none",
                    scrollTrigger: {
                        trigger: cards[index + 1],
                        start: "top bottom",
                        end: "top 120px",
                        scrub: true,
                    }
                });
            });
        });

        return () => mm.revert();
    }, []);

    return (
        <section className="py-24 bg-[#F8F9FA] relative">
            <div className="max-w-7xl mx-auto px-4 md:px-8">

                <div className="text-center max-w-2xl mx-auto mb-16">
                    <SectionLabel text="OUR PROCESS" />
                    <h2 className="text-4xl md:text-5xl font-heading font-extrabold text-[#1E293B] mt-2 mb-4 leading-tight">
                        Stress-Free From <br />
                        Start to Finish
                    </h2>
                    <p className="text-slate-600 font-sans text-lg">
                        We've streamlined our cleanout process to save you time and eliminate the headaches of traditional junk removal.
                    </p>
                </div>

                <div ref={containerRef} className="max-w-4xl mx-auto relative pb-24 space-y-8 lg:space-y-0">
                    {processSteps.map((step, idx) => {
                        const Icon = step.icon;
                        return (
                            <div
                                key={step.id}
                                className="process-card w-full lg:h-[70vh] lg:min-h-[500px] flex items-center justify-center p-8 md:p-12 rounded-3xl bg-white shadow-[0_10px_40px_rgb(0,0,0,0.06)] border border-slate-100 will-change-transform z-[1] relative"
                                style={{ zIndex: idx }}
                            >
                                <div className="w-full flex md:flex-row flex-col items-center">

                                    {/* Left: Content */}
                                    <div className="md:w-1/2 md:pr-12 lg:pr-16 text-center md:text-left mb-8 md:mb-0">
                                        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#22C55E]/20 text-[#0F3D24] font-heading font-bold text-2xl mb-8 border-2 border-[#22C55E]/40">
                                            {step.id}
                                        </div>
                                        <h3 className="text-3xl font-heading font-extrabold text-[#1E293B] mb-5 leading-tight">
                                            {step.title}
                                        </h3>
                                        <p className="text-slate-600 text-lg leading-relaxed font-sans">
                                            {step.description}
                                        </p>
                                    </div>

                                    {/* Right: Graphic/Icon */}
                                    <div className="md:w-1/2 flex justify-center items-center">
                                        <div className="w-56 h-56 md:w-72 md:h-72 rounded-full bg-slate-50 flex items-center justify-center relative overflow-hidden group shadow-inner">
                                            {/* Decorative rings */}
                                            <div className="absolute inset-2 border border-slate-200 rounded-full"></div>
                                            <div className="absolute inset-8 border border-slate-200 rounded-full border-dashed"></div>

                                            <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-[#0F3D24] text-white flex items-center justify-center relative z-10 shadow-xl group-hover:scale-110 transition-transform duration-700 ease-in-out">
                                                <Icon size={64} className="opacity-90 group-hover:text-[#22C55E] transition-colors" strokeWidth={1.5} />
                                            </div>
                                        </div>
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

export default Process;
