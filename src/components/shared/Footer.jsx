import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Instagram, ShieldCheck } from 'lucide-react';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-[#051e10] text-white/80 pt-20 rounded-t-[3rem] shadow-[0_-10px_40px_rgba(0,0,0,0.1)] mt-auto w-full relative z-10">
            <div className="max-w-7xl mx-auto px-6 md:px-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

                    {/* Brand Column */}
                    <div className="flex flex-col space-y-6">
                        <Link to="/" className="inline-block">
                            <span className="font-heading font-extrabold text-3xl tracking-tight text-white">
                                Apex<span className="text-[#22C55E]">Cleanouts</span>
                            </span>
                        </Link>
                        <p className="text-sm leading-relaxed text-white/70">
                            Belleville, Michigan’s premier full-service partner for fast, professional residential and commercial junk removal. Eco-conscious disposal guaranteed.
                        </p>
                        <div className="flex space-x-4 pt-2">
                            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#22C55E] hover:text-[#0a2918] transition-all">
                                <Facebook size={18} />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#22C55E] hover:text-[#0a2918] transition-all">
                                <Instagram size={18} />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-white font-heading font-bold text-lg mb-6">Quick Links</h3>
                        <ul className="space-y-3 text-sm">
                            {['Home', 'About Us', 'Services', 'Our Work', 'Contact', 'Blog'].map((item) => (
                                <li key={item}>
                                    <Link to={`/${item.toLowerCase().replace(' ', '-')}`} className="hover:text-[#22C55E] transition-colors flex items-center group">
                                        <span className="w-0 h-0.5 bg-[#22C55E] mr-0 group-hover:w-3 group-hover:mr-2 transition-all"></span>
                                        {item === 'Home' ? 'Home' : item.replace('home', '')}
                                    </Link>
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
                                    <Link to="/services" className="hover:text-[#22C55E] transition-colors flex items-center group">
                                        <span className="w-0 h-0.5 bg-[#22C55E] mr-0 group-hover:w-3 group-hover:mr-2 transition-all"></span>
                                        {service}
                                    </Link>
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
                            <li className="flex items-center">
                                <Mail size={18} className="text-[#22C55E] mr-3 flex-shrink-0" />
                                <Link to="/contact" className="hover:text-white transition-colors">
                                    Contact Form
                                </Link>
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

                    <div className="flex space-x-4">
                        <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
                        <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
                    </div>

                    <div className="font-mono pt-2 md:pt-0">
                        Made with <span className="text-red-500">♥️</span> by <a href="https://slabflow.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors underline decoration-white/20 underline-offset-4">Slabflow</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
