import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaEnvelope, FaMapMarkerAlt, FaSpinner } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

export default function Contact() {
    const form = useRef();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [statusMessage, setStatusMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setStatusMessage('');

        const serviceID = 'service_sfqfdbh';
        const templateID = 'template_166chkl';
        const publicKey = 'O2wj2pxk_lkJSNgba';

        emailjs.sendForm(serviceID, templateID, form.current, publicKey)
            .then(() => {
                setStatusMessage('Message sent successfully.');
                form.current.reset();
            }, () => {
                setStatusMessage('Failed to send message. Please try again.');
            })
            .finally(() => {
                setIsSubmitting(false);
                setTimeout(() => setStatusMessage(''), 5000);
            });
    };

    return (
        <div className="page-shell">
            <motion.div
                className="page-hero"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                <span className="section-label section-label-centered">Contact</span>
                <h1>Let&apos;s discuss the right opportunity.</h1>
                <p>
                    I&apos;m open to internships, graduate software roles, and practical product work where I can contribute across development and delivery.
                </p>
            </motion.div>

            <div className="contact-layout">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.15 }}
                    className="panel contact-form-card"
                >
                    <h2 className="section-heading">Send a message</h2>
                    <p className="section-copy" style={{ marginTop: '0.5rem' }}>
                        Share a role, project, or collaboration idea and I&apos;ll get back to you as soon as possible.
                    </p>
                    <form ref={form} onSubmit={handleSubmit} className="contact-form">
                        <div className="form-group">
                            <label className="form-label">Name</label>
                            <input
                                type="text"
                                name="name"
                                required
                                className="input-field"
                                placeholder="Your name"
                            />
                        </div>

                        <div className="form-group">
                            <label className="form-label">Email</label>
                            <input
                                type="email"
                                name="email"
                                required
                                className="input-field"
                                placeholder="your.email@example.com"
                            />
                        </div>

                        <div className="form-group">
                            <label className="form-label">Message</label>
                            <textarea
                                name="message"
                                required
                                rows="5"
                                className="input-field resize-none"
                                placeholder="Tell me about the role, team, or project."
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="btn-primary contact-submit"
                            style={{ width: '100%' }}
                        >
                            {isSubmitting ? (
                                <>
                                    <FaSpinner className="animate-spin" />
                                    Sending...
                                </>
                            ) : (
                                <>
                                    <FaEnvelope />
                                    Send Message
                                </>
                            )}
                        </button>

                        {statusMessage && (
                            <p className={`contact-status ${statusMessage.includes('successfully') ? 'contact-status--success' : 'contact-status--error'}`}>
                                {statusMessage}
                            </p>
                        )}
                    </form>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.25 }}
                    className="contact-sidebar"
                >
                    <div className="panel contact-info-card">
                        <h2 className="section-heading">Contact details</h2>
                        <div className="contact-info-list">
                            <div className="contact-info-item">
                                <div className="contact-info-icon">
                                    <FaEnvelope />
                                </div>
                                <div>
                                    <h3>Email</h3>
                                    <p>sankavithayaparan1605@gmail.com</p>
                                </div>
                            </div>
                            <div className="contact-info-item">
                                <div className="contact-info-icon">
                                    <FaMapMarkerAlt />
                                </div>
                                <div>
                                    <h3>Location</h3>
                                    <p>Colombo, Sri Lanka</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="panel contact-info-card">
                        <h2 className="section-heading">Profiles</h2>
                        <div className="contact-links">
                            <a href="https://www.linkedin.com/in/sankavi-thayaparan-b257392a0/" target="_blank" rel="noopener noreferrer" className="contact-link-card">
                                <FaLinkedin />
                                <span>LinkedIn</span>
                            </a>
                            <a href="https://github.com/Sankavi1605" target="_blank" rel="noopener noreferrer" className="contact-link-card">
                                <FaGithub />
                                <span>GitHub</span>
                            </a>
                            <a href="mailto:sankavithayaparan1605@gmail.com" className="contact-link-card">
                                <FaEnvelope />
                                <span>Email</span>
                            </a>
                        </div>
                    </div>

                    <div className="panel contact-info-card">
                        <h2 className="section-heading">Resume</h2>
                        <p className="section-copy" style={{ marginTop: '0.5rem' }}>
                            Download a concise overview of my projects, technical stack, and software engineering background.
                        </p>
                        <a href="/SankaviThayaparan_SE.pdf" download className="btn-secondary" style={{ marginTop: '1rem', display: 'inline-flex' }}>
                            Download PDF
                        </a>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
