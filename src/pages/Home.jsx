import { motion } from 'framer-motion';
import React, { useState, useEffect } from 'react';

export default function Home() {
    const [displayText, setDisplayText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const fullName = "Nilina Nilaksha";

    const skills = [
        'React', 'JavaScript', 'TypeScript', 'Node.js', 'Python', 'SQL', 'Git', 'MongoDB'
    ];

    // Continuous typewriter effect
    useEffect(() => {
        const timeout = setTimeout(() => {
            if (!isDeleting) {
                // Typing phase
                if (currentIndex < fullName.length) {
                    setDisplayText(prev => prev + fullName[currentIndex]);
                    setCurrentIndex(prev => prev + 1);
                } else {
                    // Start deleting after a pause
                    setTimeout(() => setIsDeleting(true), 2000);
                }
            } else {
                // Deleting phase
                if (displayText.length > 0) {
                    setDisplayText(prev => prev.slice(0, -1));
                    setCurrentIndex(prev => prev - 1);
                } else {
                    // Reset for next cycle
                    setIsDeleting(false);
                    setCurrentIndex(0);
                }
            }
        }, isDeleting ? 100 : 150);

        return () => clearTimeout(timeout);
    }, [currentIndex, isDeleting, displayText, fullName]);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <div className="max-w-6xl mx-auto">
            {/* Hero Section */}
            <motion.section
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center space-y-8 py-20"
            >
                <div className="space-y-6">
                    <motion.h1
                        className="text-5xl md:text-7xl font-bold text-white leading-tight"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                    >
                        Hi, I'm <span className="text-green-400">{displayText}</span>
                        <span className="animate-pulse">|</span>
                    </motion.h1>
                    <motion.p
                        className="text-2xl md:text-3xl text-green-400 font-medium"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                    >
                        Software Engineer & Data Scientist
                    </motion.p>
                    <motion.p
                        className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                    >
                        Passionate about building modern, scalable, and impactful digital experiences.
                        I specialize in creating elegant solutions to complex problems and extracting insights from data.
                    </motion.p>
                </div>

                <motion.div
                    className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                >
                    <a
                        href="/projects"
                        className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105"
                    >
                        View My Work
                    </a>
                    <a
                        href="/contact"
                        className="border border-green-500 text-green-400 hover:bg-green-500 hover:text-white px-8 py-3 rounded-lg font-semibold transition-all duration-200"
                    >
                        Get In Touch
                    </a>
                </motion.div>
            </motion.section>

            {/* About Section */}
            <motion.section
                className="py-20 border-t border-gray-800"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
            >
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <h2 className="text-3xl md:text-4xl font-bold text-white">About Me</h2>
                        <p className="text-gray-400 text-lg leading-relaxed">
                            I'm a dedicated software engineer and data scientist with a passion for creating innovative solutions.
                            With 5+ years of experience in full-stack development and data analysis, I've worked on projects ranging
                            from small business applications to large-scale enterprise systems and machine learning models.
                        </p>
                        <p className="text-gray-400 text-lg leading-relaxed">
                            My approach combines technical expertise with creative problem-solving, ensuring that
                            every project I work on is not only functional but also delivers an exceptional user experience
                            and provides valuable insights through data-driven decision making.
                        </p>
                        <div className="flex gap-4">
                            <a
                                href="/resume.pdf"
                                download
                                className="text-green-400 hover:text-green-300 font-semibold flex items-center gap-2"
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                </svg>
                                Download Resume
                            </a>
                        </div>
                    </div>
                    <div className="bg-gray-800 rounded-2xl p-8">
                        <h3 className="text-2xl font-bold text-white mb-6">Skills & Technologies</h3>
                        <motion.div
                            className="flex flex-wrap gap-3"
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                        >
                            {skills.map((skill, index) => (
                                <motion.span
                                    key={skill}
                                    variants={itemVariants}
                                    className="bg-green-600 text-white px-4 py-2 rounded-full text-sm font-medium"
                                >
                                    {skill}
                                </motion.span>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </motion.section>

            {/* Stats Section */}
            <motion.section
                className="py-20 border-t border-gray-800"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
            >
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                    <motion.div
                        className="space-y-2"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        viewport={{ once: true }}
                    >
                        <div className="text-3xl md:text-4xl font-bold text-green-400">50+</div>
                        <div className="text-gray-400">Projects Completed</div>
                    </motion.div>
                    <motion.div
                        className="space-y-2"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        <div className="text-3xl md:text-4xl font-bold text-green-400">5+</div>
                        <div className="text-gray-400">Years Experience</div>
                    </motion.div>
                    <motion.div
                        className="space-y-2"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        viewport={{ once: true }}
                    >
                        <div className="text-3xl md:text-4xl font-bold text-green-400">20+</div>
                        <div className="text-gray-400">Happy Clients</div>
                    </motion.div>
                    <motion.div
                        className="space-y-2"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        viewport={{ once: true }}
                    >
                        <div className="text-3xl md:text-4xl font-bold text-green-400">15+</div>
                        <div className="text-gray-400">Technologies</div>
                    </motion.div>
                </div>
            </motion.section>
        </div>
    );
}
