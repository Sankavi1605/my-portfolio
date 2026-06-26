import React from 'react';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="mt-12 mx-auto mb-6 w-full max-w-[min(1128px,calc(100vw-2rem))] relative z-10">
            <div 
                className="flex flex-col gap-3 py-6 px-8 text-sm text-white md:flex-row md:items-center md:justify-between rounded-2xl"
                style={{
                    background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.02))',
                    backdropFilter: 'blur(24px)',
                    WebkitBackdropFilter: 'blur(24px)',
                    border: '1px solid rgba(255, 255, 255, 0.15)',
                    boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.3), inset 0 0 0 1px rgba(255, 255, 255, 0.05)'
                }}
            >
                <p>© {currentYear} Sankavi Thayaparan</p>
                <p className="text-[#d1d5db]">Portfolio styled as a professional profile experience.</p>
            </div>
        </footer>
    );
};

export default Footer;
