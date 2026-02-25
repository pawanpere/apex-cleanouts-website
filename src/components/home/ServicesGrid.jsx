import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Home, Building2, Trash2, Leaf, Clock, Hammer, ArrowRight } from 'lucide-react';
import gsap from 'gsap';
import SectionLabel from '../shared/SectionLabel';

const servicesList = [
    {
        icon: Home,
        title: "Residential Junk Removal",
        desc: "From old furniture and appliances to yard waste, we clear out your home quickly and carefully, protecting your property throughout the process.",
        slug: "residential"
    },
    {
        icon: Building2,
        title: "Commercial Cleanouts",
        desc: "Fast, efficient clear-outs for offices, retail spaces, and warehouses. We work around your schedule to minimize business disruption.",
        slug: "commercial"
    },
    {
        icon: Trash2,
        title: "Whole Property / Estate",
        desc: "Compassionate and thorough estate cleanouts. We handle the heavy lifting and sorting so you can focus on what matters.",
        slug: "estate"
    },
    {
        icon: Leaf,
        title: "E-Waste & Recycling",
        desc: "Responsible disposal of electronics, metals, and recyclables. We prioritize keeping items out of local landfills whenever possible.",
        slug: "ewaste"
    },
    {
        icon: Clock,
        title: "Emergency Response",
        desc: "Need it gone yesterday? Real estate closing deadline? We offer rapid response cleanouts for urgent, time-sensitive situations.",
        slug: "emergency"
    },
    {
        icon: Hammer,
        title: "Post-Construction",
        desc: "Thorough debris removal and cleanup after remodeling or new construction. We leave the site spotless and ready for the next phase.",
        slug: "post-construction"
    }
];

const ServicesGrid = () => {
    const gridRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo('.service-card',
                { y: 40, opacity: 0 },
                {
                    scrollTrigger: {
                        trigger: gridRef.current,
                        start: 'top 80%',
                    },
                    y: 0,
                    opacity: 1,
                    duration: 0.6,
                    stagger: 0.1,
                    ease: 'power3.out'
                }
            );
        }, gridRef);

        return () => ctx.revert();
    }, []);

    return (
        <section className="py-24 bg-[#F8F9FA] relative">
            <div className="max-w-7xl mx-auto px-4 md:px-8">

                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <SectionLabel text="OUR SERVICES" />
                    <h2 className="text-4xl md:text-5xl font-heading font-extrabold text-[#1E293B] mt-2 mb-6">
                        Everything Must Go. <br />
                        <span className="text-[#0F3D24]">Done Right.</span>
                    </h2>
                    <p className="text-slate-600 font-sans text-lg">
                        From single-item pickups to massive commercial clear-outs, our uniformed teams handle all the heavy lifting, loading, and eco-friendly disposal.
                    </p>
                </div>

                {/* Grid */}
                <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    {servicesList.map((service, idx) => {
                        const Icon = service.icon;
                        return (
                            <div
                                key={idx}
                                className="service-card group bg-white rounded-2xl p-8 shadow-[0_4px_20px_rgb(0,0,0,0.03)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-slate-100 transition-all duration-300 flex flex-col h-full transform hover:-translate-y-1 relative overflow-hidden"
                            >
                                {/* Top Border Accent */}
                                <div className="absolute top-0 left-0 right-0 h-1 bg-transparent group-hover:bg-[#22C55E] transition-colors"></div>

                                <div className="w-14 h-14 rounded-full bg-[#22C55E]/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-[#22C55E] transition-all duration-300">
                                    <Icon size={24} className="text-[#0F3D24] group-hover:text-white transition-colors" />
                                </div>

                                <h3 className="text-xl font-heading font-bold text-[#1E293B] mb-3 group-hover:text-[#0F3D24] transition-colors">
                                    {service.title}
                                </h3>

                                <p className="text-slate-600 leading-relaxed mb-8 flex-grow">
                                    {service.desc}
                                </p>

                                <Link
                                    to={`/services/${service.slug}`}
                                    className="inline-flex items-center text-[#22C55E] font-bold text-sm tracking-wide group/link uppercase mt-auto w-fit"
                                >
                                    <span className="border-b-2 border-transparent group-hover/link:border-[#22C55E] pb-0.5 transition-all">Learn More</span>
                                    <ArrowRight size={16} className="ml-2 group-hover/link:translate-x-1 transition-transform" />
                                </Link>
                            </div>
                        );
                    })}
                </div>

                {/* Bottom CTA */}
                <div className="mt-16 text-center">
                    <Link
                        to="/services"
                        className="inline-flex items-center justify-center bg-white border-2 border-slate-200 text-[#1E293B] px-8 py-4 rounded-full font-bold tracking-wide hover:border-[#0F3D24] hover:bg-[#0F3D24] hover:text-white transition-all btn-magnetic shadow-sm"
                    >
                        View All Services
                    </Link>
                </div>

            </div>
        </section>
    );
};

export default ServicesGrid;
