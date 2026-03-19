import React from 'react';
import { Phone, MapPin, ShieldCheck, Mail, MessageCircle } from 'lucide-react';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-[#051e10] text-white/80 pt-20 rounded-t-[3rem] shadow-[0_-10px_40px_rgba(0,0,0,0.1)] mt-auto w-full relative z-10">
            <div className="max-w-7xl mx-auto px-6 md:px-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

                    {/* Brand Column */}
                    <div className="flex flex-col space-y-6">
                        <a href="#home" className="inline-block">
                            <img
                                src="/images/apex-logo.png"
                                alt="Apex Cleanout Solutions"
                                className="h-28 w-auto"
                            />
                        </a>
                        <p className="text-sm leading-relaxed text-white/70">
                            Belleville, Michigan’s premier full-service partner for fast, professional residential and commercial junk removal. Eco-conscious disposal guaranteed.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-white font-heading font-bold text-lg mb-6">Quick Links</h3>
                        <ul className="space-y-3 text-sm">
                            {[
                                { name: 'Home', path: '#home' },
                                { name: 'About Us', path: '#about' },
                                { name: 'Services', path: '#services' },
                                { name: 'Contact', path: '#contact' }
                            ].map((item) => (
                                <li key={item.name}>
                                    <a href={item.path} className="hover:text-[#22C55E] transition-colors flex items-center group">
                                        <span className="w-0 h-0.5 bg-[#22C55E] mr-0 group-hover:w-3 group-hover:mr-2 transition-all"></span>
                                        {item.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="text-white font-heading font-bold text-lg mb-6">Our Services</h3>
                        <ul className="space-y-3 text-sm">
                            {[
                                'Residential Junk Removal',
                                'Commercial Cleanouts',
                                'Estate Cleanouts',
                                'E-Waste Recycling',
                                'Emergency Cleanouts',
                                'Post-Construction',
                            ].map((service) => (
                                <li key={service}>
                                    <a href="#services" className="hover:text-[#22C55E] transition-colors flex items-center group">
                                        <span className="w-0 h-0.5 bg-[#22C55E] mr-0 group-hover:w-3 group-hover:mr-2 transition-all"></span>
                                        {service}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-white font-heading font-bold text-lg mb-6">Contact Us</h3>
                        <ul className="space-y-4 text-sm">
                            <li className="flex items-start">
                                <Phone size={18} className="text-[#22C55E] mt-0.5 mr-3 flex-shrink-0" />
                                <a href="tel:7344865987" className="hover:text-white transition-colors">
                                    (734) 486-5987<br />
                                    <span className="text-white/50 text-xs mt-1 block">24/7 Emergency Service</span>
                                </a>
                            </li>

                            <li className="flex items-start">
                                <Mail size={18} className="text-[#22C55E] mt-0.5 mr-3 flex-shrink-0" />
                                <a href="mailto:apolocoser5@gmail.com" className="hover:text-white transition-colors">
                                    apolocoser5@gmail.com
                                </a>
                            </li>

                            <li className="flex items-start">
                                <MessageCircle size={18} className="text-[#22C55E] mt-0.5 mr-3 flex-shrink-0" />
                                <a href="sms:7344865987" className="hover:text-white transition-colors">
                                    Text Us a Message
                                </a>
                            </li>

                            <li className="flex items-start">
                                <MapPin size={18} className="text-[#22C55E] mt-0.5 mr-3 flex-shrink-0" />
                                <span className="leading-snug">
                                    Proudly Serving<br />
                                    Belleville, MI 48111<br />
                                    & Surrounding Areas
                                </span>
                            </li>
                        </ul>
                    </div>

                </div>

                {/* Credentials Row */}
                <div className="border-t border-white/10 py-8 flex flex-wrap justify-center gap-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
                    {/* Placeholder for real certification logos */}
                    <div className="flex items-center space-x-2 font-mono text-xs uppercase tracking-widest">
                        <ShieldCheck size={16} /> Fully Licensed & Insured
                    </div>
                    <div className="flex items-center space-x-2 font-mono text-xs uppercase tracking-widest">
                        <ShieldCheck size={16} /> Eco-Friendly Disposal
                    </div>
                    <div className="flex items-center space-x-2 font-mono text-xs uppercase tracking-widest">
                        <ShieldCheck size={16} /> Broom-Clean Guarantee
                    </div>
                </div>
            </div>

            {/* Deep Footer Strip */}
            <div className="bg-[#030e07] py-4 px-6 relative">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-xs text-white/40 space-y-4 md:space-y-0">

                    <div className="flex items-center space-x-2">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#22C55E] opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#22C55E]"></span>
                        </span>
                        <span className="font-mono tracking-wider uppercase text-[#22C55E]/80">Accepting New Projects</span>
                    </div>

                    <div className="text-center">
                        &copy; {currentYear} Apex Cleanout Solutions. All Rights Reserved.
                    </div>

                    {/* Made with... */}
                    <div className="hidden font-mono pt-2 md:pt-0">
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
