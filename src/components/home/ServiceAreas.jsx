import React from 'react';
import SectionLabel from '../shared/SectionLabel';
import { MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const cities = [
    "Belleville",
    "Taylor",
    "Canton",
    "Westland",
    "Ypsilanti",
    "Wayne",
    "Romulus",
    "Dearborn Heights",
    "Inkster",
    "Garden City"
];

const ServiceAreas = () => {
    return (
        <section className="py-20 bg-[#F8F9FA] border-t border-slate-200">
            <div className="max-w-7xl mx-auto px-4 md:px-8">

                <div className="text-center mb-12">
                    <SectionLabel text="SERVICE AREAS" />
                    <h2 className="text-3xl font-heading font-extrabold text-[#1E293B] mt-2 mb-4">
                        Proudly Serving Belleville & Beyond
                    </h2>
                    <p className="text-slate-600 max-w-2xl mx-auto">
                        Fast, local response across Western Wayne County and surrounding areas.
                    </p>
                </div>

                <div className="max-w-4xl mx-auto flex flex-wrap justify-center gap-3 md:gap-4">
                    {cities.map((city, index) => (
                        <a
                            key={index}
                            href="#contact"
                            className="inline-flex items-center px-4 md:px-6 py-3 bg-white border border-slate-200 rounded-full hover:border-[#22C55E] hover:shadow-md transition-all text-[#1E293B] font-bold text-sm"
                        >
                            <MapPin size={16} className="text-[#22C55E] mr-2" />
                            {city}, MI
                        </a>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default ServiceAreas;
