import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Thank you for your message! I will get back to you soon.');
        setFormData({ name: '', email: '', message: '' });
    };

    return (
        <div className="max-w-6xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center space-y-6 mb-12"
            >
                <h1 className="text-4xl md:text-5xl font-bold text-white">Get In Touch</h1>
                <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                    I'm always interested in new opportunities and collaborations. 
                    Let's discuss how we can work together!
                </p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-12">
                {/* Contact Form */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                    className="bg-gray-800 rounded-xl p-8 border border-gray-700"
                >
                    <h2 className="text-2xl font-bold text-white mb-6">Send a Message</h2>
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label className="block text-gray-300 text-sm font-medium mb-2">
                                Name *
                            </label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={(e) => setFormData({...formData, name: e.target.value})}
                                required
                                className="w-full p-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:border-green-500 focus:outline-none transition-colors"
                                placeholder="Your Name"
                            />
                        </div>
                        
                        <div>
                            <label className="block text-gray-300 text-sm font-medium mb-2">
                                Email *
                            </label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={(e) => setFormData({...formData, email: e.target.value})}
                                required
                                className="w-full p-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:border-green-500 focus:outline-none transition-colors"
                                placeholder="your.email@example.com"
                            />
                        </div>
                        
                        <div>
                            <label className="block text-gray-300 text-sm font-medium mb-2">
                                Message *
                            </label>
                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={(e) => setFormData({...formData, message: e.target.value})}
                                required
                                rows="6"
                                className="w-full p-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:border-green-500 focus:outline-none transition-colors resize-none"
                                placeholder="Tell me about your project or opportunity..."
                            />
                        </div>
                        
                        <button
                            type="submit"
                            className="w-full py-3 px-6 bg-green-500 hover:bg-green-600 text-white rounded-lg font-semibold transition-all duration-200 transform hover:scale-105"
                        >
                            Send Message
                        </button>
                    </form>
                </motion.div>

                {/* Contact Information */}
                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 }}
                    className="space-y-8"
                >
                    <div className="bg-gray-800 rounded-xl p-8 border border-gray-700">
                        <h2 className="text-2xl font-bold text-white mb-6">Contact Information</h2>
                        <div className="space-y-6">
                            <div className="flex items-center space-x-4">
                                <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center">
                                    <span className="text-xl">📧</span>
                                </div>
                                <div>
                                    <h3 className="text-white font-semibold">Email</h3>
                                    <p className="text-gray-400">your.email@example.com</p>
                                </div>
                            </div>
                            
                            <div className="flex items-center space-x-4">
                                <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center">
                                    <span className="text-xl">📍</span>
                                </div>
                                <div>
                                    <h3 className="text-white font-semibold">Location</h3>
                                    <p className="text-gray-400">San Francisco, CA</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Social Links */}
                    <div className="bg-gray-800 rounded-xl p-8 border border-gray-700">
                        <h2 className="text-2xl font-bold text-white mb-6">Connect With Me</h2>
                        <div className="grid grid-cols-2 gap-4">
                            <a href="#" className="flex items-center space-x-3 p-4 rounded-lg bg-gray-700 hover:bg-gray-600 transition-all duration-200 hover:text-blue-400">
                                <span className="text-2xl">💼</span>
                                <span className="text-white font-medium">LinkedIn</span>
                            </a>
                            <a href="#" className="flex items-center space-x-3 p-4 rounded-lg bg-gray-700 hover:bg-gray-600 transition-all duration-200 hover:text-gray-400">
                                <span className="text-2xl">🐙</span>
                                <span className="text-white font-medium">GitHub</span>
                            </a>
                            <a href="#" className="flex items-center space-x-3 p-4 rounded-lg bg-gray-700 hover:bg-gray-600 transition-all duration-200 hover:text-blue-400">
                                <span className="text-2xl">🐦</span>
                                <span className="text-white font-medium">Twitter</span>
                            </a>
                            <a href="mailto:your.email@example.com" className="flex items-center space-x-3 p-4 rounded-lg bg-gray-700 hover:bg-gray-600 transition-all duration-200 hover:text-green-400">
                                <span className="text-2xl">📧</span>
                                <span className="text-white font-medium">Email</span>
                            </a>
                        </div>
                    </div>

                    {/* Download Resume */}
                    <div className="bg-gray-800 rounded-xl p-8 border border-gray-700">
                        <h2 className="text-2xl font-bold text-white mb-4">Download Resume</h2>
                        <p className="text-gray-400 mb-6">
                            Get a detailed overview of my experience, skills, and achievements.
                        </p>
                        <a
                            href="/resume.pdf"
                            download
                            className="inline-flex items-center space-x-2 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                            <span>Download PDF</span>
                        </a>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
