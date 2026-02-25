import React from 'react';

const SectionLabel = ({ text, variant = 'light' }) => {
    const isLight = variant === 'light';
    return (
        <div className={`inline-flex items-center px-4 py-1.5 rounded-full font-mono text-xs font-bold tracking-widest uppercase mb-4 ${isLight
                ? 'bg-[#22C55E]/10 text-[#0F3D24]'
                : 'bg-white/10 text-white/90 border border-white/10'
            }`}>
            <span className="w-1.5 h-1.5 rounded-full bg-[#22C55E] mr-2"></span>
            {text}
        </div>
    );
};

export default SectionLabel;
