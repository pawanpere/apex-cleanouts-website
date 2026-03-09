import React from 'react';
import { Phone } from 'lucide-react';

const TopUtilityBar = () => {
    return (
        <div className="bg-[#0a2918] text-white/90 text-sm h-10 px-4 md:px-8 z-50 relative hidden md:flex items-center w-full">
            <div className="max-w-7xl mx-auto flex items-center justify-between w-full">
                {/* Left Cluster: Contact Info */}
                <div className="flex items-center space-x-6">
                    <a href="tel:7344865987" className="flex items-center space-x-2 font-bold hover:text-[#22C55E] transition-colors group">
                        <Phone size={14} className="group-hover:text-[#22C55E]" />
                        <span>(734) 486-5987</span>
                    </a>
                </div>

                {/* Center: Trust Statement */}
                <div className="hidden lg:block font-mono text-xs tracking-wider text-white/80">
                    Eco-Conscious Disposal • Fast Response
                </div>


            </div>
        </div>
    );
};

export default TopUtilityBar;
