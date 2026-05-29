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

            <div className="grid gap-8 pb-8 lg:grid-cols-[1.2fr_0.8fr]">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.15 }}
                    className="panel rounded-[1.75rem] p-8"
                >
                    <h2 className="text-2xl font-semibold text-white">Send a message</h2>
                    <p className="mt-3 text-sm leading-7 text-slate-400">
                        Share a role, project, or collaboration idea and I&apos;ll get back to you as soon as possible.
                    </p>
                    <form ref={form} onSubmit={handleSubmit} className="mt-8 space-y-6">
                        <div>
                            <label className="mb-2 block text-sm font-medium text-slate-300">Name</label>
                            <input
                                type="text"
                                name="name"
                                required
                                className="input-field"
                                placeholder="Your name"
                            />
                        </div>

                        <div>
                            <label className="mb-2 block text-sm font-medium text-slate-300">Email</label>
                            <input
                                type="email"
                                name="email"
                                required
                                className="input-field"
                                placeholder="your.email@example.com"
                            />
                        </div>

                        <div>
                            <label className="mb-2 block text-sm font-medium text-slate-300">Message</label>
                            <textarea
                                name="message"
                                required
                                rows="6"
                                className="input-field resize-none"
                                placeholder="Tell me about the role, team, or project."
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="btn-primary w-full disabled:cursor-not-allowed disabled:opacity-70"
                        >
                            {isSubmitting ? (
                                <>
                                    <FaSpinner className="animate-spin text-xl" />
                                    Sending...
                                </>
                            ) : (
                                <>
                                    <FaEnvelope className="text-lg" />
                                    Send Message
                                </>
                            )}
                        </button>

                        {statusMessage && (
                            <p className={`text-center text-sm ${statusMessage.includes('successfully') ? 'text-emerald-200' : 'text-red-300'}`}>
                                {statusMessage}
                            </p>
                        )}
                    </form>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.25 }}
                    className="space-y-8"
                >
                    <div className="panel rounded-[1.75rem] p-8">
                        <h2 className="text-2xl font-semibold text-white">Contact details</h2>
                        <div className="mt-6 space-y-5">
                            <div className="flex items-start gap-4">
                                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-400/10 text-emerald-200">
                                    <FaEnvelope />
                                </div>
                                <div>
                                    <h3 className="font-medium text-white">Email</h3>
                                    <p className="text-sm text-slate-400">sankavithayaparan@gmail.com</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-400/10 text-emerald-200">
                                    <FaMapMarkerAlt />
                                </div>
                                <div>
                                    <h3 className="font-medium text-white">Location</h3>
                                    <p className="text-sm text-slate-400">Colombo, Sri Lanka</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="panel rounded-[1.75rem] p-8">
                        <h2 className="text-2xl font-semibold text-white">Profiles</h2>
                        <div className="mt-6 grid gap-4">
                            <a href="https://www.linkedin.com/in/sankavi-thayaparan-b257392a0/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 rounded-2xl border border-white/8 bg-white/4 p-4 text-slate-300 transition-colors hover:text-white">
                                <FaLinkedin className="text-xl text-emerald-200" />
                                <span>LinkedIn</span>
                            </a>
                            <a href="https://github.com/Sankavi1605" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 rounded-2xl border border-white/8 bg-white/4 p-4 text-slate-300 transition-colors hover:text-white">
                                <FaGithub className="text-xl text-emerald-200" />
                                <span>GitHub</span>
                            </a>
                            <a href="mailto:sankavithayaparan@gmail.com" className="flex items-center gap-3 rounded-2xl border border-white/8 bg-white/4 p-4 text-slate-300 transition-colors hover:text-white">
                                <FaEnvelope className="text-xl text-emerald-200" />
                                <span>Email</span>
                            </a>
                        </div>
                    </div>

                    <div className="panel rounded-[1.75rem] p-8">
                        <h2 className="text-2xl font-semibold text-white">Resume</h2>
                        <p className="mt-3 text-sm leading-7 text-slate-400">
                            Download a concise overview of my projects, technical stack, and software engineering background.
                        </p>
                        <a href="/SankaviThayaparan_SE.pdf" download className="btn-secondary mt-6 w-fit">
                            Download PDF
                        </a>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
