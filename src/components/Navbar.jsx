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
            className={`sticky top-0 z-50 border-b transition-colors ${
                scrolled ? 'border-[#d9e0e6] bg-white/95 backdrop-blur' : 'border-transparent bg-white'
            }`}
            initial={{ y: -18, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.35 }}
        >
            <div className="page-shell flex min-h-[4rem] items-center justify-between gap-4">
                <Link
                    to="/"
                    className="flex items-center gap-3 text-[#191919]"
                    onClick={() => handleNavClick({ type: 'anchor', targetId: 'overview' })}
                >
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-[#0a66c2] to-[#004182] text-base font-bold text-white shadow-[0_8px_18px_rgba(10,102,194,0.22)]">
                        S
                    </span>
                    <div className="hidden sm:block">
                        <span className="block text-sm font-semibold text-[#0a66c2]">Sankavi Thayaparan</span>
                        <span className="block text-xs text-[#5f6b7a]">Portfolio profile</span>
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
                                        isActive ? 'bg-[#0a66c2] text-white' : 'text-[#52616f] hover:bg-[#edf3f8] hover:text-[#0a66c2]'
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
                                className="rounded-full px-4 py-2 text-sm font-medium text-[#52616f] transition-colors hover:bg-[#edf3f8] hover:text-[#0a66c2]"
                                onClick={() => handleNavClick(item)}
                            >
                                {item.label}
                            </button>
                        )
                    ))}
                </div>

                <button
                    type="button"
                    className="rounded-full border border-[#d9e0e6] px-3 py-2 text-sm text-[#52616f] md:hidden"
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
                        <div className="rounded-2xl border border-[#d9e0e6] bg-white p-2 shadow-[0_8px_24px_rgba(0,0,0,0.08)]">
                            {navItems.map((item) => (
                                item.type === 'route' ? (
                                    <NavLink
                                        key={item.label}
                                        to={item.path}
                                        className={({ isActive }) =>
                                            `block rounded-xl px-4 py-3 text-sm ${
                                                isActive ? 'bg-[#0a66c2] text-white' : 'text-[#52616f]'
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
                                        className="block w-full rounded-xl px-4 py-3 text-left text-sm text-[#52616f]"
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
