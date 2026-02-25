import React, { useEffect, useRef } from 'react';
import { Phone } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const CTABanner = ({ onQuoteClick }) => {
    const bannerRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo('.cta-content',
                { y: 40, opacity: 0 },
                {
                    scrollTrigger: {
                        trigger: bannerRef.current,
                        start: 'top 80%',
                    },
                    y: 0,
                    opacity: 1,
                    duration: 0.8,
                    ease: 'power3.out',
                    stagger: 0.1
                }
            );
        }, bannerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={bannerRef} className="py-24 relative overflow-hidden bg-[#0a2918]">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#22C55E 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>

            <div className="max-w-4xl mx-auto px-4 relative z-10 text-center">
                <h2 className="cta-content text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold text-white mb-6 leading-tight">
                    Ready to Reclaim <br /><span className="text-[#22C55E]">Your Space?</span>
                </h2>
                <p className="cta-content text-lg md:text-xl text-white/80 mb-10 max-w-2xl mx-auto">
                    Contact us today for a free, no-obligation estimate. Fast response times and eco-conscious disposal guaranteed.
                </p>

                <div className="cta-content flex flex-col sm:flex-row items-center justify-center gap-4">
                    <button
                        onClick={onQuoteClick}
                        className="w-full sm:w-auto btn-magnetic bg-[#22C55E] text-[#0a2918] px-8 py-4 rounded-full font-bold text-lg tracking-wide hover:shadow-[0_0_20px_rgba(34,197,94,0.3)] transition-all flex justify-center items-center"
                    >
                        Get Your Free Quote
                    </button>

                    <a filter="url(#noiseFilter)"
                        href="tel:7344865987"
                        className="w-full sm:w-auto btn-magnetic border-2 border-white/20 text-white px-8 py-4 rounded-full font-bold text-lg hover:border-white/40 hover:bg-white/5 transition-all flex justify-center items-center group"
                    >
                        <Phone size={20} className="mr-2 group-hover:text-[#22C55E] transition-colors" />
                        (734) 486-5987
                    </a>
                </div>
            </div>
        </section>
    );
};

export default CTABanner;
