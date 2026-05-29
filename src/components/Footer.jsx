import React from 'react';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="border-t border-[#d9e0e6] bg-white">
            <div className="page-shell flex flex-col gap-3 py-8 text-sm text-[#5f6b7a] md:flex-row md:items-center md:justify-between">
                <p>© {currentYear} Sankavi Thayaparan</p>
                <p>Portfolio styled as a professional profile experience.</p>
            </div>
        </footer>
    );
};

export default Footer;
