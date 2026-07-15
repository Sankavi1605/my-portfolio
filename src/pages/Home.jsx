import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaExternalLinkAlt, FaGithub, FaLinkedin, FaMapMarkerAlt } from 'react-icons/fa';
import myImage from '../assets/me.jpg';
import { featuredProjectIds, projects } from '../data/projects';

const quickFacts = [
    'Open to internships and graduate software engineering roles',
    'Focused on full-stack products, mobile apps, and backend systems',
    'Interested in product teams that care about usability and delivery quality',
];

const strengths = [
    'Frontend Architecture with React & Next.js',
    'Backend Systems with Spring Boot & Node.js',
    'Cross-Platform Mobile Development via Flutter',
    'Data Modeling & Database Administration',
    'Cloud Deployment & DevOps workflows',
];

const workflow = [
    {
        title: 'Discover & Define',
        description: 'We begin by analyzing the core problem, understanding user needs, and establishing clear technical constraints to ensure our solution delivers tangible value.',
    },
    {
        title: 'Architect & Design',
        description: 'Next, we blueprint the system architecture and design intuitive interfaces, mapping out data flows to guarantee a scalable and practical foundation.',
    },
    {
        title: 'Develop & Iterate',
        description: 'Development proceeds in agile increments, focusing on code quality, maintainability, and continuous validation of the core user experience.',
    },
    {
        title: 'Deploy & Scale',
        description: 'Finally, we deploy the product, monitor real-world feedback, and continuously refine the system to support long-term growth and stability.',
    },
];

const faqs = [
    {
        question: 'What roles are you currently targeting?',
        answer: 'Internships, graduate software engineering roles, and early-career full-stack or mobile product opportunities.',
    },
    {
        question: 'Which technologies do you use most?',
        answer: 'React, Next.js, Spring Boot, Node.js, Flutter, PostgreSQL, and cloud deployment platforms including AWS and Vercel.',
    },
    {
        question: 'What kind of products do you enjoy building?',
        answer: 'Products with clear business value where engineering quality and user experience both matter.',
    },
];

const BigCard = ({ children, id }) => (
    <div id={id} className="w-full min-h-[90vh] flex flex-col items-center justify-center py-20 snap-start">
        <div className="w-full max-w-5xl p-10 md:p-16 liquid-glass-strong rounded-3xl shadow-2xl flex flex-col gap-8">
            {children}
        </div>
    </div>
);

export default function Home() {
    const featuredProjects = projects.filter((project) => featuredProjectIds.includes(project.id));
    
    useEffect(() => {
        // Enable scroll snapping for the home page
        document.documentElement.style.scrollSnapType = 'y mandatory';
        document.body.style.scrollSnapType = 'y mandatory';
        
        return () => {
            document.documentElement.style.scrollSnapType = 'none';
            document.body.style.scrollSnapType = 'none';
        };
    }, []);

    return (
        <div id="content" className="flex flex-col w-full px-4 md:px-8">
            
            {/* Hero Section */}
            <div className="w-full min-h-screen flex flex-col items-center justify-center snap-start relative">
                <div className="w-full max-w-6xl flex flex-col md:flex-row items-center justify-between gap-12 z-10 p-8 liquid-glass rounded-3xl mt-20">
                    <div className="flex flex-col items-start text-left md:w-3/5">
                        <p className="text-gray-300 tracking-widest uppercase text-sm mb-4 font-semibold">Engineering the Future</p>
                        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-8">
                            Crafting scalable software products
                            <br />
                            <span className="italic text-gray-200">with immersive experiences</span>
                            <br />
                            on the web & mobile.
                        </h1>
                        <div className="flex flex-wrap items-center gap-6">
                            <div className="flex items-center gap-3 text-white liquid-glass px-6 py-4 rounded-xl">
                                <FaMapMarkerAlt />
                                <span>Colombo, Sri Lanka</span>
                                <span className="text-gray-400">•</span>
                                <span>Open to work</span>
                            </div>
                            <a href="#contact-section" className="btn-primary liquid-glass-strong px-8 py-4 rounded-xl border border-white/20 text-lg transition-transform hover:scale-105">
                                Contact &rarr;
                            </a>
                        </div>
                    </div>
                    <div className="hidden md:flex md:w-2/5 justify-end">
                        <img src={myImage} alt="Sankavi Thayaparan" className="w-[380px] h-[380px] object-cover rounded-full shadow-[0_0_50px_rgba(255,255,255,0.1)] border border-white/20" />
                    </div>
                </div>
                
                <div className="absolute bottom-10 animate-bounce text-white/50">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-8 h-8"><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" /></svg>
                </div>
            </div>

            {/* About & Skills Card */}
            <BigCard id="about-section">
                <h2 className="text-4xl font-bold mb-4">About Me & Skills</h2>
                <div className="grid md:grid-cols-2 gap-12">
                    <div>
                        <p className="text-lg text-gray-200 leading-relaxed">
                            I architect robust software solutions designed for real-world impact. From dynamic public transit platforms to secure fintech applications, I specialize in bridging intuitive frontend interfaces with resilient backend architectures.
                        </p>
                        <h3 className="text-2xl font-bold mt-8 mb-4">Core Strengths</h3>
                        <div className="flex flex-col gap-3">
                            {strengths.map(s => (
                                <p key={s} className="flex items-center gap-3 text-md text-gray-300">
                                    <span className="w-2 h-2 rounded-full bg-white/70"></span>
                                    {s}
                                </p>
                            ))}
                        </div>
                    </div>
                    <div>
                        <h3 className="text-2xl font-bold mb-4">Experience Workflow</h3>
                        <div className="flex flex-col gap-6">
                            {workflow.map(w => (
                                <div key={w.title} className="bg-white/5 p-4 rounded-xl border border-white/10">
                                    <h4 className="text-white text-lg font-semibold">{w.title}</h4>
                                    <p className="text-sm text-gray-300 mt-2 leading-relaxed">{w.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </BigCard>

            {/* Featured Projects Cards */}
            {featuredProjects.map((project, index) => (
                <BigCard key={project.id} id={`project-${project.id}`}>
                    <div className="flex flex-col md:flex-row gap-12 items-center">
                        <div className="md:w-1/2">
                            <img src={project.image} alt={project.title} className="w-full rounded-2xl shadow-2xl border border-white/20 object-cover aspect-video" />
                        </div>
                        <div className="md:w-1/2 flex flex-col items-start text-left">
                            <p className="uppercase tracking-widest text-sm text-gray-400 font-semibold mb-2">Featured Project 0{index + 1}</p>
                            <h2 className="text-4xl font-bold mb-2">{project.title}</h2>
                            <p className="text-xl text-gray-300 italic mb-4">{project.subtitle}</p>
                            <p className="text-lg text-gray-200 leading-relaxed mb-6">{project.programFocus}</p>
                            <div className="flex flex-wrap gap-2 mb-8">
                                {project.tech.map((item) => (
                                    <span key={item} className="px-4 py-2 rounded-full bg-white/10 border border-white/20 text-sm text-gray-200 backdrop-blur-md">{item}</span>
                                ))}
                            </div>
                            <div className="flex flex-wrap gap-4">
                                <a href={`/projects/${project.slug}`} className="px-6 py-3 rounded-xl liquid-glass border border-white/30 hover:bg-white/20 transition-all font-semibold">View Details</a>
                                {project.liveUrl && (
                                    <a href={project.liveUrl} target="_blank" rel="noreferrer" className="flex items-center gap-2 px-6 py-3 rounded-xl liquid-glass border border-white/30 hover:bg-white/20 transition-all font-semibold">
                                        Live <FaExternalLinkAlt />
                                    </a>
                                )}
                                <a href={project.link} target="_blank" rel="noreferrer" className="flex items-center gap-2 px-6 py-3 rounded-xl liquid-glass border border-white/30 hover:bg-white/20 transition-all font-semibold">
                                        Code <FaGithub />
                                </a>
                            </div>
                        </div>
                    </div>
                </BigCard>
            ))}

            {/* FAQ & Highlights */}
            <BigCard id="faq-section">
                <div className="grid md:grid-cols-2 gap-12">
                    <div>
                        <h2 className="text-4xl font-bold mb-8">Frequently Asked Questions</h2>
                        <div className="flex flex-col gap-6">
                            {faqs.map((item) => (
                                <div key={item.question} className="border-b border-white/20 pb-6">
                                    <h3 className="text-xl font-bold mb-2">{item.question}</h3>
                                    <p className="text-gray-300 text-lg leading-relaxed">{item.answer}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="flex flex-col gap-8">
                        <div className="bg-white/5 p-8 rounded-2xl border border-white/20">
                            <h2 className="text-3xl font-bold mb-6">Quick Highlights</h2>
                            <ul className="flex flex-col gap-4">
                                {quickFacts.map((fact) => (
                                    <li key={fact} className="flex items-start gap-3 text-lg text-gray-200">
                                        <span className="w-2 h-2 mt-2 rounded-full bg-white/70 flex-shrink-0"></span>
                                        <span>{fact}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="bg-white/5 p-8 rounded-2xl border border-white/20">
                            <h2 className="text-3xl font-bold mb-4">Education Path</h2>
                            <p className="text-lg text-gray-300 leading-relaxed mb-6">
                                Built portfolio work through hands-on development in full-stack, backend security, mobile apps, and collaborative product delivery.
                            </p>
                            <a href="/education" className="px-6 py-3 rounded-xl liquid-glass border border-white/30 inline-block font-semibold">View Education Details &rarr;</a>
                        </div>
                    </div>
                </div>
            </BigCard>

            {/* Contact Section */}
            <BigCard id="contact-section">
                <div className="text-center w-full max-w-3xl mx-auto flex flex-col items-center">
                    <h2 className="text-5xl font-bold mb-6">Let's build something together.</h2>
                    <p className="text-xl text-gray-300 mb-12 leading-relaxed">
                        Whether you are looking for a software engineering intern, a graduate developer, or just want to chat about tech, I'd love to hear from you.
                    </p>
                    <div className="flex flex-col md:flex-row gap-6 w-full justify-center">
                        <a href="mailto:sankavithayaparan1605@gmail.com" className="flex items-center justify-center gap-3 px-8 py-5 rounded-2xl liquid-glass border border-white/30 hover:bg-white/20 transition-all text-xl font-semibold">
                            <FaEnvelope /> Email Me
                        </a>
                        <a href="https://www.linkedin.com/in/sankavi-thayaparan-b257392a0/" target="_blank" rel="noreferrer" className="flex items-center justify-center gap-3 px-8 py-5 rounded-2xl liquid-glass border border-white/30 hover:bg-white/20 transition-all text-xl font-semibold">
                            <FaLinkedin /> LinkedIn
                        </a>
                        <a href="https://github.com/Sankavi1605" target="_blank" rel="noreferrer" className="flex items-center justify-center gap-3 px-8 py-5 rounded-2xl liquid-glass border border-white/30 hover:bg-white/20 transition-all text-xl font-semibold">
                            <FaGithub /> GitHub
                        </a>
                    </div>
                </div>
            </BigCard>
            
        </div>
    );
}
