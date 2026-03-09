import React, { useEffect } from 'react';
import Hero from '../components/home/Hero';
import ScrollingTicker from '../components/home/ScrollingTicker';
import Reviews from '../components/home/Reviews';
import AboutBrief from '../components/home/AboutBrief';
import ServicesGrid from '../components/home/ServicesGrid';
import WhyChooseUs from '../components/home/WhyChooseUs';
import Process from '../components/home/Process';
import PortfolioPreview from '../components/home/PortfolioPreview';
import FAQ from '../components/home/FAQ';
import ServiceAreas from '../components/home/ServiceAreas';
import CTABanner from '../components/shared/CTABanner';
const Home = () => {

    // Scroll to top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="w-full">
            <Hero />
            <ScrollingTicker darkTheme={false} />
            <Reviews />
            <AboutBrief />
            <ScrollingTicker darkTheme={true} />
            <ServicesGrid />
            <WhyChooseUs />
            <Process />
            <PortfolioPreview />
            <FAQ />
            <ServiceAreas />
            <CTABanner />
        </div>
    );
};

export default Home;
