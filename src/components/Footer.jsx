import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const footerLinks = [
        { label: 'Home', path: '/' },
        { label: 'Projects', path: '/projects' },
        { label: 'Achievements', path: '/achievements' },
        { label: 'Education', path: '/education' },
        { label: 'Certifications', path: '/certifications' },
        { label: 'Contact', path: '/contact' },
    ];

    const socialLinks = [
        { name: 'LinkedIn', url: 'https://linkedin.com/in/yourprofile', icon: '💼' },
        { name: 'GitHub', url: 'https://github.com/yourusername', icon: '🐙' },
        { name: 'Twitter', url: 'https://twitter.com/yourhandle', icon: '🐦' },
        { name: 'Email', url: 'mailto:your.email@example.com', icon: '📧' },
    ];

    return (
        <footer className="bg-gray-900 border-t border-gray-800 mt-20">
            <div className="max-w-6xl mx-auto px-6 py-12">
                <div className="grid md:grid-cols-4 gap-8">
                    {/* Brand Section */}
                    <div className="md:col-span-2">
                        <Link to="/" className="text-2xl font-bold text-green-400 hover:text-green-300 transition-colors">
                            Portfolio
                        </Link>
                        <p className="text-gray-400 mt-4 max-w-md">
                            Full-stack software engineer passionate about creating innovative solutions 
                            and building impactful digital experiences.
                        </p>
                        <div className="flex space-x-4 mt-6">
                            {socialLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-400 hover:text-green-400 transition-colors text-xl"
                                    title={link.name}
                                >
                                    {link.icon}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-white font-semibold mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            {footerLinks.map((link) => (
                                <li key={link.label}>
                                    <Link
                                        to={link.path}
                                        className="text-gray-400 hover:text-green-400 transition-colors"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-white font-semibold mb-4">Contact</h3>
                        <div className="space-y-2 text-gray-400">
                            <p>your.email@example.com</p>
                            <p>San Francisco, CA</p>
                            <p>Available for opportunities</p>
                        </div>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-gray-400 text-sm">
                        © {currentYear} Your Name. All rights reserved.
                    </p>
                    <div className="flex space-x-6 mt-4 md:mt-0">
                        <a href="/privacy" className="text-gray-400 hover:text-green-400 text-sm transition-colors">
                            Privacy Policy
                        </a>
                        <a href="/terms" className="text-gray-400 hover:text-green-400 text-sm transition-colors">
                            Terms of Service
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;