import { motion } from 'framer-motion';
import React, { useState, useEffect } from 'react';
import myImage from "../assets/me.jpg"

export default function Home() {
    const [displayText, setDisplayText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const fullName = "Sankavi Thayaparan";

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
        <div className="w-full relative">
            {/* Background Artwork */}
            <div className="fixed inset-0 -z-10 overflow-hidden">
                {/* Gradient Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-black"></div>

                {/* Geometric Shapes */}
                <div className="absolute top-20 left-10 w-32 h-32 border border-green-400/20 rounded-full opacity-30"></div>
                <div className="absolute top-40 right-20 w-16 h-16 border border-green-400/10 rounded-full opacity-20"></div>
                <div className="absolute bottom-40 left-1/4 w-24 h-24 border border-green-400/15 rounded-full opacity-25"></div>

                {/* Floating Lines */}
                <div className="absolute top-1/3 left-1/2 w-px h-32 bg-gradient-to-b from-transparent via-green-400/20 to-transparent opacity-30"></div>
                <div className="absolute bottom-1/3 right-1/3 w-32 h-px bg-gradient-to-r from-transparent via-green-400/15 to-transparent opacity-25"></div>

                {/* Subtle Grid Pattern */}
                <div className="absolute inset-0 opacity-5">
                    <div className="absolute inset-0" style={{
                        backgroundImage: `radial-gradient(circle at 1px 1px, rgba(34, 197, 94, 0.1) 1px, transparent 0)`,
                        backgroundSize: '50px 50px'
                    }}></div>
                </div>

                {/* Animated Particles */}
                <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-green-400/30 rounded-full animate-pulse"></div>
                <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-green-400/40 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
                <div className="absolute bottom-1/4 left-3/4 w-1.5 h-1.5 bg-green-400/25 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
            </div>

            {/* Hero Section with Image */}
            <motion.section
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="min-h-screen flex relative z-10"
            >
                {/* Left Side - Full Height Image */}
                <motion.div
                    className="hidden lg:block lg:w-1/2 relative"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    {/* Green Neon Glow Behind Image */}
                    <div className="absolute inset-0 bg-green-400/10 blur-3xl rounded-full scale-110 animate-pulse"></div>
                    <div className="absolute inset-0 bg-green-500/5 blur-2xl rounded-full scale-105 animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                    
                    <div className="absolute inset-0">
                        <img
                            src={myImage}
                            alt="Nilina Nilaksha"
                            className="w-full h-full object-cover relative z-10"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/50 to-transparent z-20"></div>
                    </div>
                </motion.div>

                {/* Right Side - Content */}
                <div className="lg:w-1/2 w-full flex items-center justify-center px-6 py-20">
                    <div className="max-w-2xl space-y-8">
                        <div className="space-y-6">
                            <motion.h1
                                className="text-5xl md:text-7xl font-black text-white leading-tight -mt-16 tracking-tight"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                            >
                                Hi, I'm <br /><span className="text-green-400 drop-shadow-lg">{displayText}</span>
                                <span className="animate-pulse">|</span>
                            </motion.h1>
                            <motion.p
                                className="text-2xl md:text-3xl text-green-400 font-semibold tracking-wide leading-relaxed"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4 }}
                            >
                                Aspiring Computer Science student and Web Developer
                            </motion.p>
                            <motion.p
                                className="text-xl text-gray-300 leading-relaxed font-light tracking-wide"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.6 }}
                            >
                                Passionate about building modern, scalable, and impactful digital experiences.
                                I specialize in creating elegant solutions to complex problems and extracting insights from data.
                            </motion.p>
                        </div>

                        <motion.div
                            className="flex flex-col sm:flex-row gap-4"
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
                    </div>
                </div>
            </motion.section>

            {/* About Section */}
            <motion.section
                className="py-20 border-t border-gray-800 max-w-6xl mx-auto px-6"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
            >
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">About Me</h2>
                        <p className="text-gray-300 text-lg leading-relaxed font-light tracking-wide">
                            I am a dedicated Computer Science undergraduate from the University of Colombo School of Computing with a strong passion for full-stack development. My experience is centered on building modern, scalable, and user-centric applications using the React ecosystem. Proficient in developing seamless experiences across web and mobile platforms with technologies like React, Next.js, and React Native, I am always eager to apply my academic knowledge to solve real-world challenges and contribute to building innovative solutions
                        </p>

                        <div className="flex gap-4">
                            <a
                                href="/SankaviThayaparan_SE.pdf"
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
            </motion.section >



        </div >
    );
}
