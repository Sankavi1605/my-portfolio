import { Link, NavLink } from 'react-router-dom';
import React, { useState } from 'react';

const navItems = [
    { label: 'Home', path: '/' },
    { label: 'Projects', path: '/projects' },
    { label: 'Achievements', path: '/achievements' },
    { label: 'Education', path: '/education' },
    { label: 'Certifications', path: '/certifications' },
    { label: 'Contact', path: '/contact' },
];

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="bg-gray-900/95 backdrop-blur-sm px-6 py-4 shadow-lg sticky top-0 z-50 border-b border-gray-800">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                <Link to="/" className="text-2xl font-bold text-green-400 hover:text-green-300 transition-colors">
                    Portfolio
                </Link>
                
                {/* Desktop Menu */}
                <div className="hidden md:flex space-x-8">
                    {navItems.map((item) => (
                        <NavLink
                            key={item.label}
                            to={item.path}
                            className={({ isActive }) =>
                                `text-sm font-medium transition-all duration-200 relative ${
                                    isActive 
                                        ? 'text-green-400' 
                                        : 'text-gray-300 hover:text-green-400'
                                }`
                            }
                        >
                            {item.label}
                        </NavLink>
                    ))}
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-gray-300 hover:text-green-400 transition-colors"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        {isMenuOpen ? (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        ) : (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        )}
                    </svg>
                </button>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="md:hidden mt-4 pb-4 border-t border-gray-800">
                    <div className="flex flex-col space-y-4 pt-4">
                        {navItems.map((item) => (
                            <NavLink
                                key={item.label}
                                to={item.path}
                                className={({ isActive }) =>
                                    `text-sm font-medium transition-colors ${
                                        isActive 
                                            ? 'text-green-400' 
                                            : 'text-gray-300 hover:text-green-400'
                                    }`
                                }
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {item.label}
                            </NavLink>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    );
}
