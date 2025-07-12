import React from 'react';
import { Link } from 'react-router-dom';
import Logo from "../assets/Logo.png"
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const footerLinks = [
        { label: 'Home', path: '/' },
        { label: 'Projects', path: '/projects' },

        { label: 'Education', path: '/education' },

        { label: 'Contact', path: '/contact' },
    ];

    const socialLinks = [
        { name: 'LinkedIn', url: 'https://www.linkedin.com/in/nilina-amarathunga-42a112220/', icon: <FaLinkedin /> },
        { name: 'GitHub', url: 'https://github.com/Nilina2002', icon: <FaGithub /> },
        { name: 'Email', url: 'mailto:nilina610@gmail.com', icon: <FaEnvelope /> },
    ];

    return (
        <footer className="bg-gray-900 border-t border-gray-800 mt-20">
            <div className="max-w-6xl mx-auto px-6 py-12">
                <div className="grid md:grid-cols-4 gap-8">
                    {/* Brand Section */}
                    <div className="md:col-span-2">
                        <Link to="/" className="text-2xl font-bold text-green-400 hover:text-green-300 transition-colors">
                            <img src={Logo} alt="Logo" className="w-10 h-10 object-contain" />
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
                            <p>nilina610@gmail.com</p>
                            <p>Colombo, Sri Lanka</p>

                        </div>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-gray-400 text-sm">
                        © {currentYear} Nilina Nilaksha. All rights reserved.
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