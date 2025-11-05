import { motion } from 'framer-motion';
import React, { useState, useEffect } from 'react';
import myImage from "../assets/me.jpg";
import ProjectCard from '../components/ProjectCard';
import { featuredProjectIds, projects } from '../data/projects';

export default function Home() {
    const [displayText, setDisplayText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const fullName = "Sankavi Thayaparan";

    const skills = [
        'React', 'Next.js', 'TypeScript', 'Node.js', 'React Native', 'Flutter', 'Spring Boot', 'PostgreSQL', 'MongoDB', 'AWS', 'Prisma', 'Stripe'
    ];

    const heroHighlights = [
        {
            heading: 'Currently shipping',
            description: 'BusHub LK — modern public transport management for Sri Lanka.',
        },
        {
            heading: 'What drives me',
            description: 'Transforming complex operations into intuitive products that feel effortless.',
        },
        {
            heading: 'Open to collaborate',
            description: 'Internships, freelance, or product partnerships for 2025 cohorts.',
        },
    ];

    const focusAreas = [
        {
            title: 'Product Engineering',
            description: 'Translate ideas into polished experiences with pixel-perfect front ends tied to resilient back ends.',
        },
        {
            title: 'Platform Modernisation',
            description: 'Refactor legacy processes into cloud-first workflows that scale, observe, and stay maintainable.',
        },
        {
            title: 'Human-Centred Interfaces',
            description: 'Design empathetic journeys with motion, data visualisation, and accessibility baked in.',
        },
    ];

    const featuredProjects = projects.filter(project => featuredProjectIds.includes(project.id));

    useEffect(() => {
        const timeout = setTimeout(() => {
            if (!isDeleting) {
                if (currentIndex < fullName.length) {
                    setDisplayText(prev => prev + fullName[currentIndex]);
                    setCurrentIndex(prev => prev + 1);
                } else {
                    setTimeout(() => setIsDeleting(true), 1800);
                }
            } else if (displayText.length > 0) {
                setDisplayText(prev => prev.slice(0, -1));
                setCurrentIndex(prev => (prev > 0 ? prev - 1 : 0));
            } else {
                setIsDeleting(false);
                setCurrentIndex(0);
            }
        }, isDeleting ? 90 : 150);

        return () => clearTimeout(timeout);
    }, [currentIndex, displayText, fullName, isDeleting]);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.08,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 12 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.3 },
        },
    };

    return (
        <div className="w-full relative">
            <div className="fixed inset-0 -z-10 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-gray-900 to-black"></div>
                <div className="absolute -top-32 left-1/2 h-[32rem] w-[32rem] -translate-x-1/2 rounded-full bg-green-500/10 blur-3xl"></div>
                <div className="absolute inset-0 opacity-10">
                    <div
                        className="absolute inset-0"
                        style={{
                            backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(34, 197, 94, 0.08) 1px, transparent 0)',
                            backgroundSize: '48px 48px',
                        }}
                    ></div>
                </div>
                <div className="absolute top-24 left-[10%] h-24 w-24 rounded-full border border-green-500/30"></div>
                <div className="absolute bottom-40 right-[15%] h-16 w-16 rounded-full border border-green-500/20"></div>
            </div>

            <motion.section
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="relative z-10 min-h-screen flex items-center"
            >
                <div className="w-full px-6 py-24">
                    <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_auto] xl:gap-20 max-w-7xl mx-auto">
                        <div className="space-y-10">
                            <motion.span
                                className="inline-flex items-center gap-3 rounded-full border border-green-500/40 bg-green-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.4em] text-green-300"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                            >
                                Creating products with purpose
                            </motion.span>

                            <motion.h1
                                className="text-4xl sm:text-5xl xl:text-6xl font-black text-white leading-tight tracking-tight"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 }}
                            >
                                Hi, I'm <span className="text-green-400 drop-shadow-lg">{displayText}</span>
                                <span className="animate-pulse">|</span>
                                <br />Full-stack engineer crafting immersive digital journeys.
                            </motion.h1>

                            <motion.p
                                className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-xl"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5 }}
                            >
                                Computer Science undergraduate with a focus on shipping impactful products across web, mobile, and cloud.
                                From transit modernisation to personal finance dashboards, I bring strategy, empathy, and engineering rigour to every build.
                            </motion.p>

                            <motion.div
                                className="flex flex-col sm:flex-row gap-4"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.6 }}
                            >
                                <a
                                    href="/projects"
                                    className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-200 transform hover:scale-[1.03] shadow-lg shadow-green-500/20"
                                >
                                    Browse Signature Work
                                </a>
                                <a
                                    href="/SankaviThayaparan_SE.pdf"
                                    download
                                    className="border border-green-500 text-green-300 hover:bg-green-500 hover:text-white px-8 py-3 rounded-lg font-semibold transition-all duration-200"
                                >
                                    Download Résumé
                                </a>
                                <a
                                    href="/contact"
                                    className="sm:ml-auto text-gray-400 hover:text-white font-medium flex items-center gap-2"
                                >
                                    <span>Let's collaborate</span>
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </a>
                            </motion.div>

                            <motion.div
                                className="space-y-4"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.7 }}
                            >
                                {heroHighlights.map(item => (
                                    <div
                                        key={item.heading}
                                        className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md px-6 py-5 hover:border-green-400/40 transition-colors duration-300"
                                    >
                                        <p className="text-xs uppercase tracking-[0.3em] text-green-300">{item.heading}</p>
                                        <p className="text-base text-gray-200 mt-2 leading-relaxed">{item.description}</p>
                                    </div>
                                ))}
                            </motion.div>
                        </div>

                        <motion.div
                            className="relative hidden lg:flex justify-center"
                            initial={{ opacity: 0, x: 60 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                        >
                            <div className="absolute -inset-4 rounded-3xl bg-green-500/20 blur-3xl"></div>
                            <div className="relative overflow-hidden rounded-[2.25rem] border border-white/10 bg-gradient-to-br from-white/10 via-white/5 to-transparent shadow-2xl w-[320px] xl:w-[380px] aspect-[3/4]">
                                <img src={myImage} alt="Sankavi Thayaparan" className="h-full w-full object-cover" />
                                <div className="absolute inset-0 bg-gradient-to-tr from-gray-950/70 via-transparent to-transparent"></div>
                                <div className="absolute bottom-6 left-6 right-6 rounded-2xl bg-black/60 backdrop-blur-md border border-white/10 p-6">
                                    <p className="text-sm uppercase tracking-[0.3em] text-green-300">Currently shipping</p>
                                    <p className="text-lg font-semibold text-white">BusHub LK – modern public transport platform</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </motion.section>

            <motion.section
                className="relative z-10 py-24"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true, margin: '-100px' }}
            >
                <div className="max-w-6xl mx-auto px-6">
                    <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
                        {focusAreas.map(area => (
                            <div key={area.title} className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition-all duration-300 hover:border-green-500/40 hover:bg-green-500/10">
                                <h3 className="text-2xl font-semibold text-white mb-4">{area.title}</h3>
                                <p className="text-gray-400 leading-relaxed text-sm">{area.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </motion.section>

            <motion.section
                className="relative z-10 py-24 border-t border-white/5"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true, margin: '-100px' }}
            >
                <div className="max-w-6xl mx-auto px-6 space-y-12">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                        <div>
                            <p className="text-xs uppercase tracking-[0.4em] text-green-300 mb-3">Featured builds</p>
                            <h2 className="text-3xl md:text-4xl font-bold text-white">Human-centred solutions that scale</h2>
                        </div>
                        <a
                            href="/projects"
                            className="inline-flex items-center gap-2 text-green-300 hover:text-white font-semibold"
                        >
                            View all projects
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </a>
                    </div>

                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {featuredProjects.map(project => (
                            <ProjectCard
                                key={project.id}
                                title={project.title}
                                subtitle={project.subtitle}
                                status={project.status}
                                description={project.description}
                                highlights={project.highlights}
                                image={project.image}
                                tech={project.tech}
                                link={project.link}
                                liveUrl={project.liveUrl}
                            />
                        ))}
                    </div>
                </div>
            </motion.section>

            <motion.section
                className="relative z-10 py-24 border-t border-white/5"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true, margin: '-100px' }}
            >
                <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-start">
                    <div className="space-y-6">
                        <p className="text-xs uppercase tracking-[0.4em] text-green-300">About</p>
                        <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">Designer-friendly engineer with a bias for action</h2>
                        <p className="text-gray-300 text-lg leading-relaxed">
                            I am a Computer Science undergraduate at the University of Colombo School of Computing obsessed with solving complex problems through thoughtful products. My toolkit spans modern front-end ecosystems, resilient back-end services, and native mobile experiences.
                        </p>
                        <p className="text-gray-400 leading-relaxed">
                            Whether modernising public transport operations or building secure financial tooling, I’m keen on pairing robust architecture with intuitive UI. I love partnering with teams who value experimentation, research-driven design, and measurable impact.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <a
                                href="mailto:sankavithayaparan1605@gmail.com"
                                className="bg-white text-gray-900 hover:bg-green-500 hover:text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200"
                            >
                                Start a conversation
                            </a>
                            <a
                                href="https://www.linkedin.com/in/sankavi-thayaparan-b257392a0/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-green-300 hover:text-white font-medium"
                            >
                                Connect on LinkedIn
                            </a>
                        </div>
                    </div>
                    <div className="bg-gray-900/60 border border-white/10 rounded-3xl p-8">
                        <h3 className="text-2xl font-bold text-white mb-6">Skills & Technologies</h3>
                        <motion.div
                            className="flex flex-wrap gap-3"
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                        >
                            {skills.map(skill => (
                                <motion.span
                                    key={skill}
                                    variants={itemVariants}
                                    className="bg-green-600/80 text-white px-4 py-2 rounded-full text-sm font-medium"
                                >
                                    {skill}
                                </motion.span>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </motion.section>

            <motion.section
                className="relative z-10 py-24"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true, margin: '-100px' }}
            >
                <div className="max-w-4xl mx-auto px-6 text-center space-y-6">
                    <h2 className="text-3xl md:text-4xl font-bold text-white">Have a challenge in mind?</h2>
                    <p className="text-gray-300 leading-relaxed">
                        I’m currently open to collaborations, internships, and freelance engagements. Let’s build something remarkable together.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href="/contact"
                            className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-200"
                        >
                            Book a discovery call
                        </a>
                        <a
                            href="mailto:sankavithayaparan1605@gmail.com"
                            className="border border-white/20 text-white hover:border-green-500 hover:text-green-300 px-8 py-3 rounded-lg font-semibold transition-all duration-200"
                        >
                            Drop an email
                        </a>
                    </div>
                </div>
            </motion.section>
        </div>
    );
}
