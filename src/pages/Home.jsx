import React, { useEffect, useState, useRef } from 'react';
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

const profileHighlights = [
    '7+ portfolio projects across transport, finance, safety, and community systems',
    'Full-stack and mobile product development experience',
    'Based in Colombo, Sri Lanka',
];

export default function Home() {
    const featuredProjects = projects.filter((project) => featuredProjectIds.includes(project.id));
    
    // Veldara Scroll Effects Logic
    const [heroOpacity, setHeroOpacity] = useState(1);
    const fixedCardsRef = useRef(null);
    const cardsGridRef = useRef(null);
    const triggerRef = useRef(null);
    const sectionThreeInnerRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            // Hero fade
            const fade = Math.max(0, 1 - window.scrollY / (window.innerHeight * 0.3));
            setHeroOpacity(fade);

            // Fixed Cards
            if (fixedCardsRef.current && triggerRef.current && cardsGridRef.current) {
                const rect = triggerRef.current.getBoundingClientRect();
                const triggerTop = rect.top + window.scrollY;
                const triggerHeight = rect.height;
                const scrollY = window.scrollY;
                const vh = window.innerHeight;

                const start = triggerTop - vh * 0.5;
                const end = triggerTop + triggerHeight - vh * 0.3;
                const range = end - start;

                let progress = range > 0 ? (scrollY - start) / range : 0;
                progress = Math.max(0, Math.min(1, progress));

                const isActive = scrollY >= start - vh * 0.2 && scrollY <= end + vh * 0.3;
                const fadeIn = Math.min(1, Math.max(0, (scrollY - (start - vh * 0.2)) / (vh * 0.2)));
                const fadeOut = Math.min(1, Math.max(0, (end + vh * 0.3 - scrollY) / (vh * 0.3)));
                const containerOpacity = isActive ? Math.min(fadeIn, fadeOut) : 0;

                fixedCardsRef.current.style.opacity = containerOpacity;
                fixedCardsRef.current.style.pointerEvents = containerOpacity > 0.1 ? 'auto' : 'none';

                const isMobile = window.innerWidth < 768;
                const revealPct = progress * 130;
                if (isMobile) {
                    cardsGridRef.current.style.maskImage = `linear-gradient(to bottom, black ${revealPct}%, transparent ${revealPct + 20}%)`;
                    cardsGridRef.current.style.webkitMaskImage = `linear-gradient(to bottom, black ${revealPct}%, transparent ${revealPct + 20}%)`;
                } else {
                    cardsGridRef.current.style.maskImage = `linear-gradient(to right, black ${revealPct}%, transparent ${revealPct + 15}%)`;
                    cardsGridRef.current.style.webkitMaskImage = `linear-gradient(to right, black ${revealPct}%, transparent ${revealPct + 15}%)`;
                }
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        // Section 3 Intersection Observer
        const currentRef = sectionThreeInnerRef.current;
        if (!currentRef) return;

        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                currentRef.classList.add('visible');
                observer.unobserve(currentRef);
            }
        }, { threshold: 0.15 });

        observer.observe(currentRef);

        return () => observer.disconnect();
    }, []);

    return (
        <div id="content">
            {/* Section 1: Hero */}
            <section id="hero" style={{ opacity: heroOpacity }}>
                <div className="gradient-overlay"></div>
                <div className="content">
                    <p className="subtitle">Engineering the Future</p>
                    <h1>
                        Crafting scalable software products
                        <br />
                        <span className="underlined"><span className="line"></span><span>with immersive experiences</span></span>
                        <br />
                        on the web & mobile.
                    </h1>
                    <div className="ctas">
                        <div className="hero-meta text-white" style={{ background: 'rgba(26,26,26,0.6)', padding: '0.875rem 2rem', borderRadius: '0.5rem', border: '1px solid rgba(55,65,81,0.5)' }}>
                            <FaMapMarkerAlt />
                            Colombo, Sri Lanka
                            <span className="hero-meta-dot">•</span>
                            Open to work
                        </div>
                        <a href="/contact" className="btn-primary" style={{ height: 'auto', padding: '0.875rem 2rem', borderRadius: '0.5rem' }}>Contact <span>&rarr;</span></a>
                    </div>
                </div>
                <div className="bounce-arrow">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" /></svg>
                </div>
            </section>

            {/* Spacer */}
            <div style={{ height: '150vh' }}></div>

            {/* Fixed Cards Trigger Zone */}
            <div id="cards-trigger" ref={triggerRef} style={{ height: '200vh' }}></div>

            {/* Fixed Cards */}
            <div id="fixed-cards" ref={fixedCardsRef}>
                <div className="grid" ref={cardsGridRef}>
                    <div className="card">
                        <h3>About Me</h3>
                        <p>I architect robust software solutions designed for real-world impact. From dynamic public transit platforms to secure fintech applications, I specialize in bridging intuitive frontend interfaces with resilient backend architectures.</p>
                    </div>
                    <div className="card">
                        <h3>Core Skills</h3>
                        <div className="flex flex-col gap-2 mt-2">
                            {strengths.map(s => (
                                <p key={s} className="flex items-center gap-2 text-sm text-[#d1d5db]">
                                    <span className="w-1.5 h-1.5 rounded-full bg-[#2C5C88]"></span>
                                    {s}
                                </p>
                            ))}
                        </div>
                    </div>
                    <div className="card">
                        <h3>Experience Workflow</h3>
                        <div className="flex flex-col gap-3 mt-2">
                            {workflow.map(w => (
                                <div key={w.title}>
                                    <h4 className="text-white text-sm font-semibold">{w.title}</h4>
                                    <p className="text-xs text-[#d1d5db] mt-1">{w.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Spacer */}
            <div style={{ height: '100vh' }}></div>

            {/* Section 3 - Featured Projects */}
            <section id="section-three">
                <div className="inner" ref={sectionThreeInnerRef}>
                    <p>Presenting</p>
                    <h2>Featured Projects</h2>
                    
                    <div className="featured-grid w-full text-left" style={{ maxWidth: '1000px', margin: '0 auto' }}>
                        {featuredProjects.map((project) => (
                            <article key={project.id} className="featured-card" style={{ background: 'rgba(26,26,26,0.4)' }}>
                                <img src={project.image} alt={project.title} className="featured-card-image" />
                                <div className="featured-card-body">
                                    <h3>{project.title}</h3>
                                    <p className="featured-card-subtitle">{project.subtitle}</p>
                                    <p className="section-copy text-sm">{project.programFocus}</p>
                                    <div className="tag-row">
                                        {project.tech.slice(0, 5).map((item) => (
                                            <span key={item} className="chip">{item}</span>
                                        ))}
                                    </div>
                                    <div className="link-row">
                                        <a href={`/projects/${project.slug}`} className="section-link">Details</a>
                                        {project.liveUrl ? (
                                            <a href={project.liveUrl} target="_blank" rel="noreferrer" className="section-link">
                                                Live
                                                <FaExternalLinkAlt />
                                            </a>
                                        ) : null}
                                        <a href={project.link} target="_blank" rel="noreferrer" className="section-link">
                                            Code
                                            <FaGithub />
                                        </a>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>

                    <a href="/projects" className="btn-secondary mt-12" style={{ borderRadius: '0.5rem', border: '1px solid rgba(255,255,255,0.1)' }}>See all projects</a>
                </div>
            </section>
            
            {/* Additional content placed below section three */}
            <div className="home-page-layout pt-32 pb-24 text-left">
                {/* ── FAQ ─────────────────────────────────── */}
                <section id="faqs" className="content-section panel" style={{ background: 'rgba(26,26,26,0.4)' }}>
                    <h2 className="section-heading">FAQ</h2>
                    <div className="faq-list">
                        {faqs.map((item) => (
                            <div key={item.question} className="faq-item">
                                <h3>{item.question}</h3>
                                <p className="section-copy mt-2">{item.answer}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* ── Bottom Grid ─────────────────────────── */}
                <div className="bottom-grid mt-6">
                    <section className="panel bottom-card" style={{ background: 'rgba(26,26,26,0.4)' }}>
                        <h2 className="section-heading mb-4 text-xl">Contact</h2>
                        <div className="contact-links">
                            <a href="mailto:sankavithayaparan1605@gmail.com" className="contact-link">
                                <FaEnvelope />
                                sankavithayaparan1605@gmail.com
                            </a>
                            <a
                                href="https://www.linkedin.com/in/sankavi-thayaparan-b257392a0/"
                                target="_blank"
                                rel="noreferrer"
                                className="contact-link"
                            >
                                <FaLinkedin />
                                LinkedIn Profile
                            </a>
                            <a href="https://github.com/Sankavi1605" target="_blank" rel="noreferrer" className="contact-link">
                                <FaGithub />
                                GitHub Portfolio
                            </a>
                        </div>
                    </section>

                    <section className="panel bottom-card" style={{ background: 'rgba(26,26,26,0.4)' }}>
                        <h2 className="section-heading mb-4 text-xl">Highlights</h2>
                        <ul className="highlights-list">
                            {quickFacts.map((fact) => (
                                <li key={fact}>{fact}</li>
                            ))}
                        </ul>
                    </section>

                    <section className="panel bottom-card" style={{ background: 'rgba(26,26,26,0.4)' }}>
                        <h2 className="section-heading mb-4 text-xl">Education</h2>
                        <div className="education-card">
                            <h3>Software Engineering Path</h3>
                            <p className="featured-card-subtitle mt-1">Academic and project-based development</p>
                            <p className="section-copy mt-3">
                                Built portfolio work through hands-on development in full-stack, backend security, mobile apps,
                                and collaborative product delivery.
                            </p>
                            <a href="/education" className="section-link mt-4 inline-block">View education details</a>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
}
