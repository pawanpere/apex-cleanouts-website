import React, { useEffect, useRef } from 'react';
import { ShieldCheck, Star } from 'lucide-react';
import gsap from 'gsap';
import clsx from 'clsx';

const Hero = () => {
    const heroRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Fade in left column text elements
            gsap.fromTo('.hero-text-elem',
                { y: 30, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: 'power3.out', delay: 0.2 }
            );

            // Fade in right column form card
            gsap.fromTo('.hero-form-card',
                { x: 30, opacity: 0 },
                { x: 0, opacity: 1, duration: 0.8, ease: 'power3.out', delay: 0.6 }
            );
        }, heroRef);

        return () => ctx.revert();
    }, []);

    return (
        <section id="home" ref={heroRef} className="relative min-h-[100dvh] flex items-center pt-24 pb-16 noise-overlay">
            {/* Background Image & Gradient */}
            <div className="absolute inset-0 z-0 bg-slate-900">
                <img
                    src="/images/hero-bg.png"
                    alt="Apex Clean Out Solutions dumpster loaded with junk"
                    className="absolute inset-0 w-full h-full object-cover opacity-70"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/85 to-slate-900/40"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10 w-full">
                <div className="flex flex-col items-center justify-center text-center">

                    {/* Single Column (Content) */}
                    <div className="pt-12 lg:pt-0 max-w-4xl mx-auto flex flex-col items-center">

                        {/* SEO Pill */}
                        <div className="hero-text-elem inline-flex items-center px-4 py-1.5 rounded-full bg-[#22C55E]/15 border border-[#22C55E]/30 text-[#22C55E] text-xs font-bold tracking-widest uppercase mb-6 backdrop-blur-sm">
                            #1 Trusted Junk Removal in Belleville, MI
                        </div>

                        {/* Main Headline */}
                        <h1 className="hero-text-elem text-white font-heading font-extrabold text-5xl md:text-6xl lg:text-7xl leading-[1.05] tracking-tight mb-6 hidden md:block">
                            Fast, Professional <br />
                            <span className="text-[#22C55E]">Junk Cleanouts.</span>
                        </h1>
                        <h1 className="hero-text-elem text-white font-heading font-extrabold text-4xl leading-[1.1] tracking-tight mb-6 md:hidden">
                            Fast, Professional <span className="text-[#22C55E]">Cleanouts.</span>
                        </h1>

                        {/* Subtitle */}
                        <p className="hero-text-elem text-white/80 text-lg md:text-xl font-sans max-w-xl mb-10 leading-relaxed md:leading-relaxed">
                            Serving Belleville and surrounding areas with stress-free residential and commercial junk removal. We prioritize eco-conscious disposal and guarantee a broom-clean finish.
                        </p>

                        {/* CTA Buttons */}
                        <div className="hero-text-elem flex flex-col sm:flex-row justify-center gap-4 mb-12">
                            <a
                                href="tel:7344865987"
                                className="btn-magnetic w-full sm:w-auto text-white border-2 border-[#22C55E] bg-[#22C55E]/10 px-10 py-5 rounded-full font-bold text-xl tracking-wide hover:bg-[#22C55E] hover:text-[#0a2918] transition-all flex justify-center items-center backdrop-blur-sm"
                            >
                                Call Now: (734) 486-5987
                            </a>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
