import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Logo from "../assets/sankavi.png"
import { FaCompass, FaRoute, FaGlobe, FaQuestionCircle, FaEnvelope, FaLayerGroup } from 'react-icons/fa';

const navItems = [
    { label: 'Overview', type: 'anchor', targetId: 'overview', icon: <FaCompass /> },
    { label: 'Program Tracks', type: 'anchor', targetId: 'tracks', icon: <FaLayerGroup /> },
    { label: 'Journey', type: 'anchor', targetId: 'journey', icon: <FaRoute /> },
    { label: 'Stories', type: 'anchor', targetId: 'stories', icon: <FaGlobe /> },
    { label: 'FAQs', type: 'anchor', targetId: 'faqs', icon: <FaQuestionCircle /> },
    { label: 'Contact', type: 'route', path: '/contact', icon: <FaEnvelope /> },
];

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 10;
            setScrolled(isScrolled);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTarget = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    const handleNavClick = (item) => {
        setIsMenuOpen(false);
        if (item.type === 'anchor') {
            if (location.pathname !== '/') {
                navigate('/', { state: { targetId: item.targetId } });
            } else {
                scrollToTarget(item.targetId);
            }
        } else if (item.type === 'route' && item.path) {
            navigate(item.path);
        }
    };

    return (
        <motion.nav
            className="px-6 py-2 sticky top-0 z-50 backdrop-blur-md"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.4 }}
        >
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                <Link
                    to="/"
                    className="text-2xl font-bold text-white/90 hover:text-white transition-all duration-300"
                    onClick={() => handleNavClick({ type: 'anchor', targetId: 'overview' })}
                >
                    <img src={Logo} alt="Logo" className="w-16 h-16 object-contain drop-shadow-lg" />
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex gap-3">
                    {navItems.map((item, index) => (
                        <div key={item.label}>
                            {item.type === 'route' ? (
                                <NavLink
                                    to={item.path}
                                    className={({ isActive }) =>
                                        `px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 flex items-center gap-2 ${isActive
                                            ? 'bg-green-500/20 text-white border border-green-500/30'
                                            : 'bg-white/5 text-gray-300 hover:bg-white/10 hover:text-white border border-white/10 hover:border-white/20'
                                        }`
                                    }
                                    onClick={() => handleNavClick(item)}
                                >
                                    <span className="text-base">{item.icon}</span>
                                    <span>{item.label}</span>
                                </NavLink>
                            ) : (
                                <button
                                    type="button"
                                    className="px-4 py-2 rounded-lg text-sm font-medium bg-white/5 text-gray-300 transition-all duration-300 flex items-center gap-2 hover:bg-white/10 hover:text-white border border-white/10 hover:border-white/20"
                                    onClick={() => handleNavClick(item)}
                                >
                                    <span className="text-base">{item.icon}</span>
                                    <span>{item.label}</span>
                                </button>
                            )}
                        </div>
                    ))}
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden p-2 rounded-lg bg-white/5 text-gray-300 hover:bg-white/10 hover:text-white transition-all border border-white/10"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        {isMenuOpen ? (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        ) : (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        )}
                    </svg>
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        className="md:hidden mt-3"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <div className="flex flex-col gap-2 pt-3 border-t border-white/10">
                            {navItems.map((item) => (
                                <div key={item.label}>
                                    {item.type === 'route' ? (
                                        <NavLink
                                            to={item.path}
                                            className={({ isActive }) =>
                                                `px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-300 flex items-center gap-3 ${isActive
                                                    ? 'bg-green-500/20 text-white border border-green-500/30'
                                                    : 'bg-white/5 text-gray-300 hover:bg-white/10 hover:text-white border border-white/10'
                                                }`
                                            }
                                            onClick={() => handleNavClick(item)}
                                        >
                                            <span className="text-base">{item.icon}</span>
                                            <span>{item.label}</span>
                                        </NavLink>
                                    ) : (
                                        <button
                                            type="button"
                                            className="px-4 py-2.5 rounded-lg text-sm font-medium bg-white/5 text-gray-300 transition-all duration-300 flex items-center gap-3 hover:bg-white/10 hover:text-white border border-white/10 w-full text-left"
                                            onClick={() => handleNavClick(item)}
                                        >
                                            <span className="text-base">{item.icon}</span>
                                            <span>{item.label}</span>
                                        </button>
                                    )}
                                </div>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
}
