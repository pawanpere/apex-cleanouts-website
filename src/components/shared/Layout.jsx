import React from 'react';
import { Outlet } from 'react-router-dom';
import TopUtilityBar from './TopUtilityBar';
import Navbar from './Navbar';
import Footer from './Footer';
import MobileStickyBar from './MobileStickyBar';

const Layout = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <TopUtilityBar />
            <Navbar />

            <main className="flex-grow">
                <Outlet />
            </main>

            <Footer />
            <MobileStickyBar />
        </div>
    );
};

export default Layout;
