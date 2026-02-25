import React, { useEffect, useRef } from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import SectionLabel from '../shared/SectionLabel';

const AboutBrief = () => {
    const sectionRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const counters = gsap.utils.toArray('.stat-counter');
            counters.forEach(counter => {
                const target = parseFloat(counter.getAttribute('data-target'));
                const suffix = counter.getAttribute('data-suffix') || '';
                gsap.to(counter, {
                    scrollTrigger: { trigger: counter, start: 'top 85%' },
                    innerHTML: target,
                    duration: 2,
                    snap: { innerHTML: 1 },
                    onUpdate: function () {
                        counter.innerHTML = Math.ceil(this.targets()[0].innerHTML) + suffix;
                    },
                    ease: "power2.out"
                });
            });

            gsap.fromTo('.about-image',
                { scale: 0.95, opacity: 0.8 },
                {
                    scrollTrigger: { trigger: '.about-image-container', start: 'top 80%' },
                    scale: 1, opacity: 1, duration: 1.2, ease: 'power3.out'
                }
            );

            gsap.fromTo('.about-text',
                { y: 30, opacity: 0 },
                {
                    scrollTrigger: { trigger: '.about-text-container', start: 'top 80%' },
                    y: 0, opacity: 1, duration: 0.8, stagger: 0.15, ease: 'power3.out'
                }
            );
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="py-24 bg-slate-900 relative overflow-hidden text-white">
            <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Image Column */}
                    <div className="about-image-container relative">
                        <div className="aspect-[4/5] md:aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl border-4 border-white/5 relative">
                            <img
                                src="/images/worker-carrying.jpg"
                                alt="Professional junk removal worker carrying furniture"
                                className="about-image w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-60"></div>

                            {/* Floating Badge */}
                            <div className="absolute bottom-6 left-6 right-6 bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                                <div className="font-heading font-bold text-xl mb-1">Local Professional Network</div>
                                <div className="text-white/90 text-sm">Deep roots in property management & real estate.</div>
                            </div>
                        </div>
                    </div>

                    {/* Text Column */}
                    <div className="about-text-container">
                        <div className="about-text">
                            <SectionLabel text="ABOUT APEX CLEANOUTS" variant="dark" />
                        </div>

                        <h2 className="about-text text-4xl md:text-5xl font-heading font-extrabold mb-6 leading-tight">
                            Community Rooted.<br className="hidden md:block" />
                            <span className="text-[#4ADE80]">Decades of Expertise.</span>
                        </h2>

                        <div className="space-y-6 text-white/90 font-sans text-lg mb-10">
                            <p className="about-text">
                                Apex Cleanout Solutions was built from a local professional network with years of collective experience in property management and debris removal. We understand the tight deadlines of real estate, the stress of estate clear-outs, and the strict demands of commercial properties.
                            </p>
                            <p className="about-text">
                                Because we live and work in the Belleville area, we treat every property like our neighbor's. Our goal is never just to move junk—it's to return your space to its full potential, spotless and ready for whatever's next.
                            </p>
                        </div>

                        {/* Core Values List */}
                        <div className="about-text grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                            {[
                                "Property Management Vetted",
                                "Eco-Conscious Recycling First",
                                "Uniformed & Professional",
                                "Fully Licensed & Insured"
                            ].map((item, idx) => (
                                <div key={idx} className="flex items-center space-x-3 text-white">
                                    <CheckCircle2 size={20} className="text-[#4ADE80] flex-shrink-0" />
                                    <span className="font-bold text-sm tracking-wide">{item}</span>
                                </div>
                            ))}
                        </div>

                        {/* Stat Counters */}
                        <div className="about-text grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-white/10 mb-10">
                            <div>
                                <div className="text-4xl font-heading font-bold text-[#4ADE80] mb-1">
                                    <span className="stat-counter" data-target="15" data-suffix="+">0</span>
                                </div>
                                <div className="text-xs uppercase tracking-widest text-white/60 font-mono">Years Exp.</div>
                            </div>
                            <div>
                                <div className="text-4xl font-heading font-bold text-[#4ADE80] mb-1">
                                    <span className="stat-counter" data-target="2500" data-suffix="+">0</span>
                                </div>
                                <div className="text-xs uppercase tracking-widest text-white/60 font-mono">Projects</div>
                            </div>
                            <div>
                                <div className="text-4xl font-heading font-bold text-[#4ADE80] mb-1">
                                    <span className="stat-counter" data-target="100" data-suffix="%">0</span>
                                </div>
                                <div className="text-xs uppercase tracking-widest text-white/60 font-mono">Broom-Clean</div>
                            </div>
                            <div>
                                <div className="text-4xl font-heading font-bold text-[#4ADE80] mb-1">
                                    <span className="stat-counter" data-target="70" data-suffix="%">0</span>
                                </div>
                                <div className="text-xs uppercase tracking-widest text-white/60 font-mono">Recycled</div>
                            </div>
                        </div>

                        <div className="about-text">
                            <Link to="/about" className="inline-flex items-center font-bold text-white hover:text-[#4ADE80] transition-colors group text-lg tracking-wide border-b border-transparent hover:border-[#4ADE80] pb-1">
                                Read Our Full Story
                                <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutBrief;
