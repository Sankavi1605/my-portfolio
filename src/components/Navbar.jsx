import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const navItems = [
    { label: 'About', type: 'anchor', targetId: 'overview' },
    { label: 'Featured', type: 'anchor', targetId: 'tracks' },
    { label: 'Workflow', type: 'anchor', targetId: 'journey' },
    { label: 'Skills', type: 'anchor', targetId: 'stories' },
    { label: 'FAQ', type: 'anchor', targetId: 'faqs' },
    { label: 'Contact', type: 'route', path: '/contact' },
];

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 8);
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
            return;
        }
        if (item.path) {
            navigate(item.path);
        }
    };

    return (
        <motion.nav
            className={`fixed top-0 left-0 right-0 z-50 transition-colors ${
                scrolled ? 'bg-[#0a0a0a]/80 backdrop-blur-md border-b border-white/10' : 'bg-transparent border-transparent'
            }`}
            initial={{ y: -18, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.35 }}
        >
            <div className="page-shell flex min-h-[4rem] items-center justify-between gap-4">
                <Link
                    to="/"
                    className="flex items-center gap-3 text-white"
                    onClick={() => handleNavClick({ type: 'anchor', targetId: 'overview' })}
                >
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-[#1a1a1a] to-[#2a2a2a] text-base font-bold text-white shadow-[0_8px_18px_rgba(0,0,0,0.5)] border border-white/10">
                        S
                    </span>
                    <div className="hidden sm:block">
                        <span className="block text-sm font-semibold text-white">Sankavi Thayaparan</span>
                        <span className="block text-xs text-[#d1d5db]">Portfolio profile</span>
                    </div>
                </Link>

                <div className="hidden items-center gap-2 md:flex">
                    {navItems.map((item) => (
                        item.type === 'route' ? (
                            <NavLink
                                key={item.label}
                                to={item.path}
                                className={({ isActive }) =>
                                    `rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                                        isActive ? 'text-white' : 'text-[#d1d5db] hover:text-white'
                                    }`
                                }
                                onClick={() => handleNavClick(item)}
                            >
                                {item.label}
                            </NavLink>
                        ) : (
                            <button
                                key={item.label}
                                type="button"
                                className="rounded-full px-4 py-2 text-sm font-medium text-[#d1d5db] transition-colors hover:text-white"
                                onClick={() => handleNavClick(item)}
                            >
                                {item.label}
                            </button>
                        )
                    ))}
                </div>

                <button
                    type="button"
                    className="rounded-full border border-white/20 px-3 py-2 text-sm text-[#d1d5db] md:hidden"
                    onClick={() => setIsMenuOpen((value) => !value)}
                >
                    Menu
                </button>
            </div>

            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        className="page-shell pb-4 md:hidden"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.25 }}
                    >
                        <div className="rounded-2xl border border-white/20 bg-[#1a1a1a]/95 backdrop-blur p-2 shadow-[0_8px_24px_rgba(0,0,0,0.5)]">
                            {navItems.map((item) => (
                                item.type === 'route' ? (
                                    <NavLink
                                        key={item.label}
                                        to={item.path}
                                        className={({ isActive }) =>
                                            `block rounded-xl px-4 py-3 text-sm ${
                                                isActive ? 'bg-white/10 text-white' : 'text-[#d1d5db] hover:text-white'
                                            }`
                                        }
                                        onClick={() => handleNavClick(item)}
                                    >
                                        {item.label}
                                    </NavLink>
                                ) : (
                                    <button
                                        key={item.label}
                                        type="button"
                                        className="block w-full rounded-xl px-4 py-3 text-left text-sm text-[#d1d5db] hover:text-white"
                                        onClick={() => handleNavClick(item)}
                                    >
                                        {item.label}
                                    </button>
                                )
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
}
