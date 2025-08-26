import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaEnvelope, FaMapMarkerAlt, FaSpinner } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

export default function Contact() {
    // A ref for the form element, which EmailJS will use to get the data
    const form = useRef();

    // State to manage the submission status (e.g., submitting, success, error)
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [statusMessage, setStatusMessage] = useState('');

    const handleSubmit = (e) => {
        // Prevent the default form submission behavior
        e.preventDefault();
        
        // Set submitting state to true and clear any previous status message
        setIsSubmitting(true);
        setStatusMessage('');

        // --- IMPORTANT ---
        // Replace these with your actual IDs from your EmailJS dashboard!
        const serviceID = 'service_sfqfdbh';
        const templateID = 'template_166chkl';
        const publicKey = 'O2wj2pxk_lkJSNgba';

        // Use the EmailJS SDK to send the form data
        emailjs.sendForm(serviceID, templateID, form.current, publicKey)
            .then((result) => {
                // This block runs if the email was sent successfully
                console.log('SUCCESS!', result.text);
                setStatusMessage('Message sent successfully!');
                form.current.reset(); // Clear the form fields after successful submission
            }, (error) => {
                // This block runs if there was an error
                console.log('FAILED...', error.text);
                setStatusMessage('Failed to send message. Please try again.');
            })
            .finally(() => {
                // This block runs regardless of success or failure
                setIsSubmitting(false); // Reset the submitting state
                // Hide the status message after 5 seconds
                setTimeout(() => {
                    setStatusMessage('');
                }, 5000);
            });
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
                    <form ref={form} onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label className="block text-gray-300 text-sm font-medium mb-2">
                                Name *
                            </label>
                            <input
                                type="text"
                                name="name" // MUST match the variable in your EmailJS template, e.g., {{name}}
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
                                name="email" // MUST match {{email}}
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
                                name="message" // MUST match {{message}}
                                required
                                rows="6"
                                className="w-full p-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:border-green-500 focus:outline-none transition-colors resize-none"
                                placeholder="Tell me about your project or opportunity..."
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={isSubmitting} // Disable button while submitting
                            className="w-full py-3 px-6 bg-green-500 hover:bg-green-600 text-white rounded-lg font-semibold transition-all duration-200 transform hover:scale-105 flex items-center justify-center disabled:bg-gray-500 disabled:cursor-not-allowed"
                        >
                            {isSubmitting ? (
                                <>
                                    <FaSpinner className="animate-spin text-xl mr-2" />
                                    Sending...
                                </>
                            ) : (
                                <>
                                    <FaEnvelope className="text-xl mr-2" />
                                    Send Message
                                </>
                            )}
                        </button>
                        
                        {/* Display the success or error message to the user */}
                        {statusMessage && (
                            <p className={`text-center mt-4 ${statusMessage.includes('successfully') ? 'text-green-400' : 'text-red-400'}`}>
                                {statusMessage}
                            </p>
                        )}
                    </form>
                </motion.div>

                {/* Contact Information & Socials Section */}
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
                                    <FaEnvelope className="text-xl text-white" />
                                </div>
                                <div>
                                    <h3 className="text-white font-semibold">Email</h3>
                                    <p className="text-gray-400">sankavithayaparan@gmail.com</p>
                                </div>
                            </div>
                            <div className="flex items-center space-x-4">
                                <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center">
                                    <FaMapMarkerAlt className="text-xl text-white" />
                                </div>
                                <div>
                                    <h3 className="text-white font-semibold">Location</h3>
                                    <p className="text-gray-400">Colombo, Sri Lanka</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-gray-800 rounded-xl p-8 border border-gray-700">
                        <h2 className="text-2xl font-bold text-white mb-6">Connect With Me</h2>
                        <div className="grid grid-cols-2 gap-4">
                            <a href="https://www.linkedin.com/in/sankavi-thayaparan-b257392a0/" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3 p-4 rounded-lg bg-gray-700 hover:bg-gray-600 transition-all duration-200 group">
                                <FaLinkedin className="text-2xl text-white group-hover:text-green-400 transition-colors duration-200" />
                                <span className="text-white font-medium group-hover:text-green-400 transition-colors duration-200">LinkedIn</span>
                            </a>
                            <a href="https://github.com/Sankavi1605" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3 p-4 rounded-lg bg-gray-700 hover:bg-gray-600 transition-all duration-200 group">
                                <FaGithub className="text-2xl text-white group-hover:text-green-400 transition-colors duration-200" />
                                <span className="text-white font-medium group-hover:text-green-400 transition-colors duration-200">GitHub</span>
                            </a>
                            <a href="mailto:sankavithayaparan@gmail.com" className="flex items-center space-x-3 p-4 rounded-lg bg-gray-700 hover:bg-gray-600 transition-all duration-200 group">
                                <FaEnvelope className="text-2xl text-white group-hover:text-green-400 transition-colors duration-200" />
                                <span className="text-white font-medium group-hover:text-green-400 transition-colors duration-200">Email</span>
                            </a>
                        </div>
                    </div>

                    <div className="bg-gray-800 rounded-xl p-8 border border-gray-700">
                        <h2 className="text-2xl font-bold text-white mb-4">Download Resume</h2>
                        <p className="text-gray-400 mb-6">
                            Get a detailed overview of my experience, skills, and achievements.
                        </p>
                        <a
                            href="/SankaviThayaparan_SE.pdf"
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