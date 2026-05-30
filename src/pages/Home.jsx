import React, { useEffect, useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaExternalLinkAlt, FaGithub, FaLinkedin, FaMapMarkerAlt } from 'react-icons/fa';
import bgImage from '../assets/bg_image.png';
import myImage from '../assets/me.jpg';
import { featuredProjectIds, projects } from '../data/projects';

const quickFacts = [
    'Open to internships and graduate software engineering roles',
    'Focused on full-stack products, mobile apps, and backend systems',
    'Interested in product teams that care about usability and delivery quality',
];

const strengths = [
    'React and Next.js frontend development',
    'Spring Boot and Node.js backend services',
    'Flutter mobile application development',
    'Database design with PostgreSQL, MySQL, MongoDB',
    'Deployment workflows with AWS and Vercel',
];

const workflow = [
    {
        title: 'Discover',
        description: 'Clarify the problem, users, constraints, and what a successful release should actually improve.',
    },
    {
        title: 'Design',
        description: 'Plan the interface, data flow, and technical shape so the product is practical before implementation starts.',
    },
    {
        title: 'Build',
        description: 'Develop in small increments, validate the core experience, and keep the codebase maintainable.',
    },
    {
        title: 'Ship',
        description: 'Deploy, review feedback, and keep improving the product after launch instead of treating release as the end.',
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
    const [frameIndex, setFrameIndex] = useState(0);
    const [primaryFrame, setPrimaryFrame] = useState(bgImage);
    const [secondaryFrame, setSecondaryFrame] = useState(bgImage);
    const [activeLayer, setActiveLayer] = useState('primary');
    const backgroundImageUrl = 'https://pub-123450a9a48c40ae9b57bf4deb9d37e2.r2.dev/ezgif-87a96875df3d6c4c-png-split';
    const totalFrames = 40;
    const featuredProjects = projects.filter((project) => featuredProjectIds.includes(project.id));
    const frameUrls = useMemo(
        () => Array.from({ length: totalFrames }, (_, index) => {
            const frameNumber = String(index + 1).padStart(3, '0');
            return `${backgroundImageUrl}/ezgif-frame-${frameNumber}.png`;
        }),
        []
    );

    useEffect(() => {
        frameUrls.forEach((url) => {
            const image = new Image();
            image.src = url;
        });
    }, [frameUrls]);

    useEffect(() => {
        const handleScroll = () => {
            const scrollableHeight = Math.max(document.documentElement.scrollHeight - window.innerHeight, 1);
            const progress = Math.min(Math.max(window.scrollY / scrollableHeight, 0), 1);
            const nextFrame = Math.min(totalFrames - 1, Math.floor(progress * (totalFrames - 1)));
            setFrameIndex(nextFrame);
        };

        handleScroll();
        window.addEventListener('scroll', handleScroll, { passive: true });
        window.addEventListener('resize', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleScroll);
        };
    }, []);

    useEffect(() => {
        const nextFrame = frameUrls[frameIndex] || bgImage;
        const currentVisibleFrame = activeLayer === 'primary' ? primaryFrame : secondaryFrame;

        if (nextFrame === currentVisibleFrame) {
            return undefined;
        }

        const preloadImage = new Image();
        preloadImage.src = nextFrame;
        preloadImage.onload = () => {
            if (activeLayer === 'primary') {
                setSecondaryFrame(nextFrame);
                setActiveLayer('secondary');
            } else {
                setPrimaryFrame(nextFrame);
                setActiveLayer('primary');
            }
        };
        preloadImage.onerror = () => {
            if (activeLayer === 'primary') {
                setSecondaryFrame(bgImage);
                setActiveLayer('secondary');
            } else {
                setPrimaryFrame(bgImage);
                setActiveLayer('primary');
            }
        };

        return () => {
            preloadImage.onload = null;
            preloadImage.onerror = null;
        };
    }, [activeLayer, frameIndex, frameUrls, primaryFrame, secondaryFrame]);

    return (
        <div className="linkedin-page-shell home-page-bg">
            <div className="home-page-media" aria-hidden="true">
                <img
                    src={primaryFrame}
                    alt=""
                    className={`projects-page-media-image ${activeLayer === 'primary' ? 'is-active' : ''}`}
                    onError={(event) => {
                        event.currentTarget.onerror = null;
                        event.currentTarget.src = bgImage;
                    }}
                />
                <img
                    src={secondaryFrame}
                    alt=""
                    className={`projects-page-media-image ${activeLayer === 'secondary' ? 'is-active' : ''}`}
                    onError={(event) => {
                        event.currentTarget.onerror = null;
                        event.currentTarget.src = bgImage;
                    }}
                />
                <div className="home-page-media-overlay" />
            </div>
            <div className="linkedin-layout home-page-layout">
                <div className="linkedin-main-column">
                    <motion.section
                        id="overview"
                        className="linkedin-card linkedin-profile-card"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.45 }}
                    >
                        <div className="linkedin-cover">
                            <img src={bgImage} alt="Profile banner" className="linkedin-cover-image" />
                        </div>
                        <div className="linkedin-profile-body">
                            <img src={myImage} alt="Sankavi Thayaparan" className="linkedin-avatar" />
                            <div className="linkedin-profile-header">
                                <div className="linkedin-profile-copy">
                                    <h1>Sankavi Thayaparan</h1>
                                    <p className="linkedin-headline">
                                        Full-Stack Developer building practical products across web, mobile, and backend systems
                                    </p>
                                    <p className="linkedin-meta">
                                        <FaMapMarkerAlt />
                                        Colombo, Sri Lanka
                                        <span className="linkedin-meta-dot">•</span>
                                        Open to work
                                    </p>
                                </div>
                                <div className="linkedin-actions">
                                    <a href="/contact" className="linkedin-btn linkedin-btn-primary">Contact</a>
                                    <a href="/SankaviThayaparan_SE.pdf" download className="linkedin-btn linkedin-btn-secondary">Resume</a>
                                </div>
                            </div>
                            <div className="linkedin-highlight-row">
                                {profileHighlights.map((item) => (
                                    <span key={item} className="linkedin-chip">{item}</span>
                                ))}
                            </div>
                        </div>
                    </motion.section>

                    <section className="linkedin-card linkedin-section-card">
                        <div className="linkedin-section-header">
                            <h2>About</h2>
                        </div>
                        <p className="linkedin-body-copy">
                            I build software that is meant to be used in the real world, not only shown in a portfolio. My work spans
                            public transport, finance, safety, and community-focused systems, with attention to clean interfaces,
                            reliable backend implementation, and product decisions that make sense in context.
                        </p>
                    </section>

                    <section id="tracks" className="linkedin-card linkedin-section-card">
                        <div className="linkedin-section-header">
                            <h2>Featured</h2>
                            <a href="/projects" className="linkedin-inline-link">See all projects</a>
                        </div>
                        <div className="linkedin-featured-list">
                            {featuredProjects.map((project) => (
                                <article key={project.id} className="linkedin-featured-item">
                                    <img src={project.image} alt={project.title} className="linkedin-featured-image" />
                                    <div className="linkedin-featured-content">
                                        <h3>{project.title}</h3>
                                        <p className="linkedin-item-subtitle">{project.subtitle}</p>
                                        <p className="linkedin-body-copy">{project.programFocus}</p>
                                        <div className="linkedin-tag-row">
                                            {project.tech.slice(0, 5).map((item) => (
                                                <span key={item} className="linkedin-tag">{item}</span>
                                            ))}
                                        </div>
                                        <div className="linkedin-link-row">
                                            <a href={`/projects/${project.slug}`} className="linkedin-inline-link">Details</a>
                                            {project.liveUrl ? (
                                                <a href={project.liveUrl} target="_blank" rel="noreferrer" className="linkedin-inline-link">
                                                    Live
                                                    <FaExternalLinkAlt />
                                                </a>
                                            ) : null}
                                            <a href={project.link} target="_blank" rel="noreferrer" className="linkedin-inline-link">
                                                Code
                                                <FaGithub />
                                            </a>
                                        </div>
                                    </div>
                                </article>
                            ))}
                        </div>
                    </section>

                    <section id="journey" className="linkedin-card linkedin-section-card">
                        <div className="linkedin-section-header">
                            <h2>Experience Style</h2>
                        </div>
                        <div className="linkedin-timeline">
                            {workflow.map((step) => (
                                <div key={step.title} className="linkedin-timeline-item">
                                    <div className="linkedin-timeline-marker" />
                                    <div>
                                        <h3>{step.title}</h3>
                                        <p className="linkedin-body-copy">{step.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    <section id="stories" className="linkedin-card linkedin-section-card">
                        <div className="linkedin-section-header">
                            <h2>Skills</h2>
                        </div>
                        <div className="linkedin-skill-list">
                            {strengths.map((item) => (
                                <div key={item} className="linkedin-skill-item">
                                    <strong>{item}</strong>
                                    <span>Core capability</span>
                                </div>
                            ))}
                        </div>
                    </section>

                    <section id="faqs" className="linkedin-card linkedin-section-card">
                        <div className="linkedin-section-header">
                            <h2>People Also Ask</h2>
                        </div>
                        <div className="linkedin-faq-list">
                            {faqs.map((item) => (
                                <div key={item.question} className="linkedin-faq-item">
                                    <h3>{item.question}</h3>
                                    <p className="linkedin-body-copy">{item.answer}</p>
                                </div>
                            ))}
                        </div>
                    </section>
                </div>

                <aside className="linkedin-sidebar">
                    <section className="linkedin-card linkedin-section-card">
                        <div className="linkedin-section-header">
                            <h2>Contact</h2>
                        </div>
                        <div className="linkedin-sidebar-list">
                            <a href="mailto:sankavithayaparan1605@gmail.com" className="linkedin-sidebar-link">
                                <FaEnvelope />
                                sankavithayaparan1605@gmail.com
                            </a>
                            <a
                                href="https://www.linkedin.com/in/sankavi-thayaparan-b257392a0/"
                                target="_blank"
                                rel="noreferrer"
                                className="linkedin-sidebar-link"
                            >
                                <FaLinkedin />
                                LinkedIn Profile
                            </a>
                            <a href="https://github.com/Sankavi1605" target="_blank" rel="noreferrer" className="linkedin-sidebar-link">
                                <FaGithub />
                                GitHub Portfolio
                            </a>
                        </div>
                    </section>

                    <section className="linkedin-card linkedin-section-card">
                        <div className="linkedin-section-header">
                            <h2>Highlights</h2>
                        </div>
                        <ul className="linkedin-sidebar-points">
                            {quickFacts.map((fact) => (
                                <li key={fact}>{fact}</li>
                            ))}
                        </ul>
                    </section>

                    <section className="linkedin-card linkedin-section-card">
                        <div className="linkedin-section-header">
                            <h2>Education</h2>
                        </div>
                        <div className="linkedin-education-card">
                            <h3>Software Engineering Path</h3>
                            <p className="linkedin-item-subtitle">Academic and project-based development</p>
                            <p className="linkedin-body-copy">
                                Built portfolio work through hands-on development in full-stack, backend security, mobile apps,
                                and collaborative product delivery.
                            </p>
                            <a href="/education" className="linkedin-inline-link">View education details</a>
                        </div>
                    </section>
                </aside>
            </div>
        </div>
    );
}
