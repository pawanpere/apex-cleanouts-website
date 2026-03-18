import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Phone, Mail, MessageCircle } from 'lucide-react';
import clsx from 'clsx';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const location = useLocation();

    // Handle scroll to morph navbar
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close mobile menu on route change
    useEffect(() => {
        setIsMobileMenuOpen(false);
    }, [location.pathname]);

    const navLinks = [
        { name: 'Home', path: '#home' },
        { name: 'Services', path: '#services' },
        { name: 'About', path: '#about' },
        { name: 'Contact', path: '#contact' },
    ];

    return (
        <header
            className={clsx(
                'fixed top-0 md:top-[40px] w-full z-40 transition-all duration-300',
                isScrolled
                    ? 'md:!top-0 bg-[#0F3D24]/95 backdrop-blur-xl border-b border-[#22C55E]/20 shadow-lg py-3'
                    : 'bg-transparent py-5'
            )}
        >
            <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between">

                {/* Logo */}
                <Link to="/" className="flex items-center group relative z-50">
                    <img
                        src="/images/apex-logo.png"
                        alt="Apex Cleanout Solutions"
                        className="h-12 md:h-14 w-auto"
                    />
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden lg:flex items-center space-x-8">
                    {navLinks.map((link) => (
                        <div key={link.name} className="relative group">
                            <a
                                href={link.path}
                                className="text-white/90 hover:text-white font-medium flex items-center transition-colors text-sm uppercase tracking-wide"
                            >
                                {link.name}
                            </a>
                        </div>
                    ))}
                </nav>

                {/* CTA Button & Mobile Toggle */}
                <div className="flex items-center space-x-4 z-50">
                    <a
                        href="tel:7344865987"
                        className="hidden md:flex btn-magnetic bg-[#22C55E] text-[#0a2918] px-6 py-2.5 rounded-full font-bold text-sm tracking-wide overflow-hidden relative group items-center"
                    >
                        <Phone size={16} className="mr-2" />
                        <span className="relative z-10">CALL NOW</span>
                        <div className="absolute inset-0 bg-white/20 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in-out" />
                    </a>

                    {/* Mobile phone button (always visible on mobile) */}
                    <a
                        href="tel:7344865987"
                        className="md:hidden flex items-center justify-center bg-[#22C55E] text-[#0a2918] p-2.5 rounded-full"
                        aria-label="Call Now"
                    >
                        <Phone size={20} className="fill-current" />
                    </a>

                    {/* Mobile Menu Toggle */}
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="lg:hidden text-white p-2 focus:outline-none"
                        aria-label="Toggle Menu"
                    >
                        {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </div>

            {/* Mobile Full-Screen Menu Overlay */}
            <div
                className={clsx(
                    'fixed inset-0 bg-[#0F3D24] z-40 lg:hidden flex flex-col justify-center px-8 transition-transform duration-300 ease-in-out',
                    isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
                )}
            >
                <div className="flex flex-col space-y-6 text-2xl font-heading font-bold">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.path}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="text-white hover:text-[#22C55E] transition-colors"
                        >
                            {link.name}
                        </a>
                    ))}
                    <div className="pt-8 border-t border-white/10 flex flex-col space-y-4">
                        <a href="tel:7344865987" className="text-white text-xl flex items-center">
                            <Phone size={24} className="text-[#22C55E] mr-3" />
                            (734) 486-5987
                        </a>
                        <a href="mailto:apolocoser5@gmail.com" className="text-white text-lg flex items-center">
                            <Mail size={22} className="text-[#22C55E] mr-3" />
                            apolocoser5@gmail.com
                        </a>
                        <a href="sms:7344865987" className="text-white text-lg flex items-center">
                            <MessageCircle size={22} className="text-[#22C55E] mr-3" />
                            Text Us
                        </a>
                        <a
                            href="tel:7344865987"
                            className="w-full bg-[#22C55E] text-[#0a2918] text-center py-4 rounded-xl font-bold uppercase tracking-wide mt-4 block"
                        >
                            Call Now
                        </a>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Navbar;
