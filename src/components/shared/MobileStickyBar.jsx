import React from 'react';
import { Phone } from 'lucide-react';

const MobileStickyBar = () => {
    return (
        <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden">
            {/* Gradient fade-in effect above the bar */}
            <div className="h-4 bg-gradient-to-t from-[#0a2918] to-transparent pointer-events-none"></div>

            <div className="bg-[#0a2918] border-t border-[#22C55E]/20 px-4 py-3 flex items-center shadow-[0_-4px_20px_rgba(0,0,0,0.3)]">

                {/* Call Now Button */}
                <a
                    href="tel:7344865987"
                    className="flex-1 bg-white text-[#0a2918] py-3.5 rounded-xl font-bold text-sm tracking-wide flex items-center justify-center gap-2 active:scale-95 transition-transform"
                >
                    <Phone size={18} className="fill-current flex-shrink-0" />
                    Call Now
                </a>
            </div>
        </div>
    );
};

export default MobileStickyBar;
