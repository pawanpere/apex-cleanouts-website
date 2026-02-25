import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import TopUtilityBar from './TopUtilityBar';
import Navbar from './Navbar';
import Footer from './Footer';
import PopupForm from './PopupForm';
import MobileStickyBar from './MobileStickyBar';

const Layout = () => {
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const openPopup = () => setIsPopupOpen(true);
    const closePopup = () => setIsPopupOpen(false);

    return (
        <div className="flex flex-col min-h-screen">
            <TopUtilityBar />
            <Navbar onQuoteClick={openPopup} />

            <main className="flex-grow">
                <Outlet context={{ openPopup }} />
            </main>

            <Footer />
            <MobileStickyBar onQuoteClick={openPopup} />
            <PopupForm isOpen={isPopupOpen} onClose={closePopup} />
        </div>
    );
};

export default Layout;
