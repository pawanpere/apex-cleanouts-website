import React from 'react';

const ScrollingTicker = ({ darkTheme = false }) => {
    const content = [
        "Eco-Conscious Disposal",
        "Broom-Clean Guarantee",
        "Transparent Pricing",
        "Rapid Response Team",
        "Locally Owned & Operated",
        "Emergency Cleanouts"
    ];

    // Repeat content to ensure smooth scrolling
    const fullContent = [...content, ...content, ...content, ...content];

    return (
        <div className={`overflow-hidden py-3 border-y border-white/5 relative flex items-center ${darkTheme ? 'bg-[#0a2918] text-white/50' : 'bg-[#22C55E] text-[#0a2918]'}`}>
            <div className="flex whitespace-nowrap animate-marquee">
                {fullContent.map((item, i) => (
                    <div key={i} className="flex items-center group cursor-default">
                        <span className="font-heading font-extrabold text-sm md:text-base tracking-widest uppercase mx-6 transition-all">
                            {item}
                        </span>
                        <span className={darkTheme ? "text-[#22C55E]/50" : "text-[#0a2918]/30"}>★</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ScrollingTicker;
