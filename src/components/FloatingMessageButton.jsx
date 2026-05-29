import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const FloatingMessageButton = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [message, setMessage] = useState('');
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you can add the logic to send the message
        // For now, we'll just log it and show an alert
        console.log('Message sent:', { name, email, message });
        alert('Message sent successfully! I\'ll get back to you soon.');
        setMessage('');
        setEmail('');
        setName('');
        setIsOpen(false);
    };

    return (
        <>
            {/* Floating Button */}
            <motion.button
                onClick={() => setIsOpen(true)}
                className="fixed bottom-6 right-6 z-50 rounded-full border border-white/10 bg-[#112033] p-4 text-white shadow-lg shadow-black/30 transition-all duration-200 hover:border-emerald-400/30 hover:bg-[#13263c]"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
            >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
            </motion.button>

            {/* Modal Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className="fixed inset-0 z-50 bg-[#020817]/45 backdrop-blur-sm"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setIsOpen(false)}
                    >
                        {/* Modal Content - Positioned in lower right */}
                        <motion.div
                            className="panel absolute bottom-6 right-6 w-full max-w-md rounded-[1.5rem] p-6 shadow-2xl"
                            initial={{ opacity: 0, scale: 0.8, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.8, y: 20 }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className="flex justify-between items-center mb-4">
                                <h3 className="text-xl font-bold text-white">Send a Message</h3>
                                <button
                                    onClick={() => setIsOpen(false)}
                                    className="text-slate-400 transition-colors hover:text-white"
                                >
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </div>

                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div>
                                    <label htmlFor="name" className="mb-1 block text-sm font-medium text-slate-300">
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        className="input-field"
                                        placeholder="Your name"
                                        required
                                    />
                                </div>

                                <div>
                                    <label htmlFor="email" className="mb-1 block text-sm font-medium text-slate-300">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        className="input-field"
                                        placeholder="your.email@example.com"
                                        required
                                    />
                                </div>

                                <div>
                                    <label htmlFor="message" className="mb-1 block text-sm font-medium text-slate-300">
                                        Message
                                    </label>
                                    <textarea
                                        id="message"
                                        value={message}
                                        onChange={(e) => setMessage(e.target.value)}
                                        rows={4}
                                        className="input-field resize-none"
                                        placeholder="Your message..."
                                        required
                                    />
                                </div>

                                <div className="flex gap-3">
                                    <button
                                        type="submit"
                                        className="btn-primary flex-1"
                                    >
                                        Send Message
                                    </button>
                                    <button
                                        type="button"
                                        onClick={() => setIsOpen(false)}
                                        className="btn-secondary px-4"
                                    >
                                        Cancel
                                    </button>
                                </div>
                            </form>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default FloatingMessageButton; 
