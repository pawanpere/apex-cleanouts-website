import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import SectionLabel from '../shared/SectionLabel';

const projects = [
    {
        id: 1,
        img: "/images/worker-carrying.jpg",
        type: "Estate Cleanout",
        location: "Canton, MI"
    },
    {
        id: 2,
        img: "/images/orange-dumpster.jpg",
        type: "Commercial Office Clear-Out",
        location: "Belleville, MI"
    },
    {
        id: 3,
        img: "/images/man-trash.jpg",
        type: "Residential Junk Removal",
        location: "Westland, MI"
    },
    {
        id: 4,
        img: "/images/yellow-truck.jpg",
        type: "Garage Overhaul",
        location: "Taylor, MI"
    },
    {
        id: 5,
        img: "/images/hero-bg.png",
        type: "Appliance Recycling",
        location: "Belleville, MI"
    },
    {
        id: 6,
        img: "/images/hero-bg.jpg",
        type: "Basement Debris Removal",
        location: "Canton, MI"
    }
];

const PortfolioPreview = () => {
    const gridRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo('.portfolio-item',
                { y: 50, opacity: 0 },
                {
                    scrollTrigger: { trigger: gridRef.current, start: 'top 80%' },
                    y: 0, opacity: 1, duration: 0.6, stagger: 0.1, ease: 'power3.out'
                }
            );
        }, gridRef);

        return () => ctx.revert();
    }, []);

    return (
        <section className="py-24 bg-slate-900 relative text-white">
            <div className="max-w-7xl mx-auto px-4 md:px-8">

                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
                    <div className="max-w-2xl">
                        <div className="mb-4">
                            <SectionLabel text="RECENT PROJECTS" variant="dark" />
                        </div>
                        <h2 className="text-4xl md:text-5xl font-heading font-extrabold mt-2 text-white">
                            See the <span className="text-[#4ADE80]">Transformation</span>
                        </h2>
                    </div>
                    <div className="mt-8 md:mt-0">
                        <a
                            href="#home"
                            className="inline-flex items-center text-[#4ADE80] font-bold tracking-wide uppercase group border-b px-1 py-1 border-[#4ADE80]/30 hover:border-[#4ADE80] transition-all"
                        >
                            View Full Portfolio
                            <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </a>
                    </div>
                </div>

                {/* Masonry-style Grid */}
                <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project, idx) => (
                        <div
                            key={project.id}
                            className={`portfolio-item group rounded-2xl overflow-hidden relative cursor-pointer
                ${idx === 0 || idx === 3 ? 'md:col-span-2 lg:col-span-1 aspect-[4/3] lg:aspect-square' : 'aspect-square'}
              `}
                        >
                            {/* Image */}
                            <div className="absolute inset-0 bg-slate-800">
                                <img
                                    src={project.img}
                                    alt={project.type}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out opacity-80 group-hover:opacity-100"
                                />
                            </div>

                            {/* Overlay Content */}
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-90 group-hover:opacity-100 transition-opacity"></div>

                            <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                <div className="text-[#4ADE80] font-mono text-xs font-bold tracking-widest uppercase mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                                    {project.location}
                                </div>
                                <h3 className="text-2xl font-heading font-bold text-white leading-tight">
                                    {project.type}
                                </h3>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default PortfolioPreview;
