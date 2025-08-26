import { Link, NavLink } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Logo from "../assets/sankavi.png"
import { FaHome, FaCode, FaGraduationCap, FaBook, FaEnvelope } from 'react-icons/fa';

const navItems = [
    { label: 'Home', path: '/', icon: <FaHome /> },
    { label: 'Projects', path: '/projects', icon: <FaCode /> },
    { label: 'Education', path: '/education', icon: <FaGraduationCap /> },
    { label: 'Exploring', path: '/learning', icon: <FaBook /> },
    { label: 'Contact', path: '/contact', icon: <FaEnvelope /> },
];

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 10;
            setScrolled(isScrolled);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleNavClick = (path) => {
        setIsMenuOpen(false);

        // Smooth scroll to top before navigation
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <motion.nav
            className={`backdrop-blur-md px-6 py-4 shadow-lg sticky top-0 z-50 border-b transition-all duration-300 ${scrolled
                ? 'bg-gray-900/95 border-gray-700 shadow-xl'
                : 'bg-gray-900/80 border-gray-800'
                }`}
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
        >
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <Link
                        to="/"
                        className="text-2xl font-bold text-green-400 hover:text-green-300 transition-all duration-300 relative group"
                        onClick={() => handleNavClick('/')}
                    >
                        <img src={Logo} alt="Logo" className="w-10 h-10 object-contain" />
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-400 group-hover:w-full transition-all duration-300"></span>
                    </Link>
                </motion.div>

                {/* Desktop Menu */}
                <div className="hidden md:flex space-x-8">
                    {navItems.map((item, index) => (
                        <motion.div
                            key={item.label}
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <NavLink
                                to={item.path}
                                className={({ isActive }) =>
                                    `text-sm font-medium transition-all duration-300 relative group flex items-center space-x-2 ${isActive
                                        ? 'text-green-400'
                                        : 'text-gray-300 hover:text-green-400'
                                    }`
                                }
                                onClick={() => handleNavClick(item.path)}
                            >
                                <span className="text-lg">{item.icon}</span>
                                <span>{item.label}</span>
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-400 group-hover:w-full transition-all duration-300"></span>
                            </NavLink>
                        </motion.div>
                    ))}
                </div>

                {/* Mobile Menu Button */}
                <motion.button
                    className="md:hidden text-gray-300 hover:text-green-400 transition-colors"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        {isMenuOpen ? (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        ) : (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        )}
                    </svg>
                </motion.button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        className="md:hidden mt-4 pb-4 border-t border-gray-800"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                        <div className="flex flex-col space-y-4 pt-4">
                            {navItems.map((item, index) => (
                                <motion.div
                                    key={item.label}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                >
                                    <NavLink
                                        to={item.path}
                                        className={({ isActive }) =>
                                            `text-sm font-medium transition-all duration-300 py-2 flex items-center space-x-3 ${isActive
                                                ? 'text-green-400'
                                                : 'text-gray-300 hover:text-green-400'
                                            }`
                                        }
                                        onClick={() => handleNavClick(item.path)}
                                    >
                                        <span className="text-lg">{item.icon}</span>
                                        <span>{item.label}</span>
                                    </NavLink>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
}
