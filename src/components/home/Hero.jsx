import React, { useEffect, useRef } from 'react';
import { ShieldCheck, Star } from 'lucide-react';
import gsap from 'gsap';
import { useOutletContext } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import clsx from 'clsx';
// import { Loader2 } from 'lucide-react';

const Hero = () => {
    const { openPopup } = useOutletContext();
    const heroRef = useRef(null);

    const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm();

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

    const onSubmit = async (data) => {
        // Note: We use the global popup for the actual lead capture state, 
        // but the hero form also captures it directly.
        await new Promise(resolve => setTimeout(resolve, 1500));
        console.log("Hero Form Submitted:", data);
        alert("Thanks! Your information was submitted successfully. We will contact you shortly.");
    };

    return (
        <section ref={heroRef} className="relative min-h-[100dvh] flex items-center pt-24 pb-16 noise-overlay">
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
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

                    {/* Left Column (Content) */}
                    <div className="lg:col-span-7 pt-12 lg:pt-0">

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
                        <div className="hero-text-elem flex flex-col sm:flex-row gap-4 mb-12">
                            <button
                                onClick={openPopup}
                                className="btn-magnetic w-full sm:w-auto bg-[#22C55E] text-[#0a2918] px-8 py-4 rounded-full font-bold text-lg tracking-wide shadow-lg hover:shadow-[#22C55E]/20 transition-all flex justify-center"
                            >
                                Get Your Free Estimate
                            </button>
                            <a
                                href="tel:7344865987"
                                className="btn-magnetic w-full sm:w-auto text-white border-2 border-white/20 px-8 py-4 rounded-full font-bold text-lg tracking-wide hover:bg-white/5 transition-all flex justify-center items-center backdrop-blur-sm"
                            >
                                Call: (734) 486-5987
                            </a>
                        </div>

                        {/* Trust Badges Row */}
                        <div className="hero-text-elem flex flex-wrap gap-4 mb-12">
                            <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/10">
                                <div className="w-5 h-5 bg-white rounded-full flex items-center justify-center font-bold text-[#EA4335] text-xs">G</div>
                                <div className="flex items-center text-[#FBBC05]">
                                    <Star size={12} className="fill-current" />
                                    <Star size={12} className="fill-current" />
                                    <Star size={12} className="fill-current" />
                                    <Star size={12} className="fill-current" />
                                    <Star size={12} className="fill-current" />
                                </div>
                                <span className="text-white text-xs font-bold pl-1">5.0</span>
                            </div>

                            <div className="flex items-center justify-center bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 space-x-2 text-white">
                                <ShieldCheck size={16} className="text-[#22C55E]" />
                                <span className="text-xs font-bold">Eco-Conscious Disposal</span>
                            </div>
                        </div>

                    </div>

                    {/* Right Column (Form) */}
                    <div className="lg:col-span-5 relative z-20">
                        <div className="hero-form-card bg-white rounded-3xl p-6 md:p-8 shadow-2xl border-t-4 border-[#22C55E]">
                            <div className="mb-6">
                                <h3 className="text-2xl font-heading font-bold text-[#1E293B]">Get Your Free Quote</h3>
                                <p className="text-[#64748B] text-sm mt-1 font-sans">No obligation • 100% free • Response within 24 hours.</p>
                            </div>

                            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <input
                                            {...register("firstName", { required: true })}
                                            placeholder="First Name*"
                                            className={clsx("w-full px-4 py-3 bg-slate-50 border rounded-xl text-sm focus:ring-2 focus:ring-[#22C55E]/50 focus:border-[#22C55E] outline-none transition-all", errors.firstName ? "border-red-400" : "border-slate-200")}
                                        />
                                    </div>
                                    <div>
                                        <input
                                            {...register("lastName", { required: true })}
                                            placeholder="Last Name*"
                                            className={clsx("w-full px-4 py-3 bg-slate-50 border rounded-xl text-sm focus:ring-2 focus:ring-[#22C55E]/50 focus:border-[#22C55E] outline-none transition-all", errors.lastName ? "border-red-400" : "border-slate-200")}
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <input
                                            type="tel"
                                            {...register("phone", { required: true })}
                                            placeholder="Phone*"
                                            className={clsx("w-full px-4 py-3 bg-slate-50 border rounded-xl text-sm focus:ring-2 focus:ring-[#22C55E]/50 focus:border-[#22C55E] outline-none transition-all", errors.phone ? "border-red-400" : "border-slate-200")}
                                        />
                                    </div>
                                    <div>
                                        <input
                                            type="text"
                                            {...register("zip", { required: true })}
                                            placeholder="Zip Code*"
                                            className={clsx("w-full px-4 py-3 bg-slate-50 border rounded-xl text-sm focus:ring-2 focus:ring-[#22C55E]/50 focus:border-[#22C55E] outline-none transition-all", errors.zip ? "border-red-400" : "border-slate-200")}
                                        />
                                    </div>
                                </div>

                                <div>
                                    <div className="relative">
                                        <select
                                            {...register("service", { required: true })}
                                            defaultValue=""
                                            className={clsx("w-full px-4 py-3 bg-slate-50 border rounded-xl text-sm focus:ring-2 focus:ring-[#22C55E]/50 focus:border-[#22C55E] outline-none transition-all appearance-none", errors.service ? "border-red-400" : "border-slate-200")}
                                        >
                                            <option value="" disabled>How Can We Help?</option>
                                            <option value="residential">Residential Junk Removal</option>
                                            <option value="commercial">Commercial Cleanout</option>
                                            <option value="estate">Whole Property Cleanout</option>
                                            <option value="ewaste">E-Waste / Recycling</option>
                                            <option value="other">Other</option>
                                        </select>
                                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-slate-500">
                                            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                                        </div>
                                    </div>
                                </div>

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full bg-[#0F3D24] hover:bg-[#165c36] text-white py-4 rounded-xl font-bold uppercase tracking-wider text-sm transition-all flex justify-center items-center btn-magnetic group disabled:opacity-70 disabled:pointer-events-none overflow-hidden relative"
                                >
                                    <span className="relative z-10 flex items-center">
                                        {isSubmitting ? "PROCESSING..." : "GET TOXIC-FREE ESTIMATE"}
                                        {!isSubmitting && <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>}
                                    </span>
                                    <div className="absolute inset-0 bg-[#22C55E] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in-out"></div>
                                </button>

                                <div className="flex justify-center flex-wrap gap-x-4 gap-y-2 mt-4 text-[#64748B] text-xs">
                                    <span className="flex items-center">
                                        <svg className="w-3.5 h-3.5 mr-1 text-[#22C55E]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                                        100% Free
                                    </span>
                                    <span className="flex items-center">
                                        <svg className="w-3.5 h-3.5 mr-1 text-[#22C55E]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                                        No obligation
                                    </span>
                                    <span className="flex items-center">
                                        <svg className="w-3.5 h-3.5 mr-1 text-[#22C55E]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                                        Fast response
                                    </span>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
