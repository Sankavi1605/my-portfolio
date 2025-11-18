import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import myImage from '../assets/me.jpg';
import ProjectCard from '../components/ProjectCard';
import StatsPanel from '../components/StatsPanel';
import JourneyTimeline from '../components/JourneyTimeline';
import BenefitHighlights from '../components/BenefitHighlights';
import FAQAccordion from '../components/FAQAccordion';
import StoryCard from '../components/StoryCard';
import Starfield from '../components/Starfield';
import ParticleAnimation from '../components/ParticleAnimation';
import { featuredProjectIds, projects } from '../data/projects';

export default function Home() {
    const [displayText, setDisplayText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();
    const fullName = 'Sankavi Thayaparan';

    const stats = [
        {
            label: 'Projects',
            value: '07',
            description: 'Full-stack applications deployed in production.',
        },
        {
            label: 'Tech Stack',
            value: 'Modern',
            description: 'React, Flutter, Spring Boot, AWS, and PostgreSQL.',
        },
        {
            label: 'Focus',
            value: 'Impact',
            description: 'Transport, finance, and community solutions.',
        },
    ];

    const benefits = [
        {
            tag: 'Experience',
            title: 'Real-world projects',
            description: 'Built applications for public transport, financial management, and safety systems.',
        },
        {
            tag: 'Tech Skills',
            title: 'Modern development',
            description: 'React, Next.js, Flutter for mobile, Spring Boot APIs, and cloud deployment.',
        },
        {
            tag: 'Problem Solving',
            title: 'User-focused solutions',
            description: 'From bus fleet tracking to personal finance tools and emergency response systems.',
        },
        {
            tag: 'Design',
            title: 'Clean interfaces',
            description: 'Responsive layouts, smooth animations, and intuitive user experiences.',
        },
        {
            tag: 'Learning',
            title: 'Continuous growth',
            description: 'Exploring new frameworks, cloud services, and development best practices.',
        },
        {
            tag: 'Open Source',
            title: 'Community projects',
            description: 'All code available on GitHub with documentation and demos.',
        },
    ];

    const journeySteps = [
        {
            phase: 'Research',
            title: 'Understanding the problem',
            description: 'Start with user needs and technical requirements.',
            highlights: [
                'Interview users and analyze workflows',
                'Define goals and success metrics',
            ],
        },
        {
            phase: 'Design',
            title: 'Planning the solution',
            description: 'Create mockups and choose the right tech stack.',
            highlights: [
                'Design interfaces in Figma',
                'Plan database schema and API structure',
            ],
        },
        {
            phase: 'Build',
            title: 'Writing the code',
            description: 'Develop features, test functionality, and fix bugs.',
            highlights: [
                'Build responsive front-end and APIs',
                'Set up CI/CD and cloud hosting',
            ],
        },
        {
            phase: 'Launch',
            title: 'Going live',
            description: 'Deploy to production and gather feedback.',
            highlights: [
                'Monitor performance and errors',
                'Iterate based on user feedback',
            ],
        },
    ];

    const stories = [
        {
            title: 'BusHub LK',
            subtitle: 'Public Transport',
            description: 'Fleet management and route planning for Sri Lanka Transport Board.',
            quote: '"Makes tracking buses and schedules much easier."',
            author: 'Project feedback',
            role: 'Transport team',
            link: 'https://bus-hub-lk.vercel.app/',
        },
        {
            title: 'Apex Finance',
            subtitle: 'Finance Tracker',
            description: 'Track expenses, budgets, and spending patterns.',
            quote: '"Clean design and useful insights."',
            author: 'Beta tester',
            role: 'User',
            link: 'https://github.com/Sankavi1605/Apex-Finance',
        },
        {
            title: 'TerraSafe',
            subtitle: 'Safety App',
            description: 'Find safe locations during emergencies with AI help.',
            quote: '"Simple and works when needed."',
            author: 'Test user',
            role: 'Pilot participant',
            link: 'https://github.com/Sankavi1605/terrasafe',
        },
    ];

    const faqs = [
        {
            tag: 'Work',
            question: 'What kind of opportunities are you looking for?',
            answer: 'Internships or full-time roles in software development, particularly in full-stack or mobile development.',
        },
        {
            tag: 'Tech',
            question: 'What technologies do you work with?',
            answer: 'React and Next.js for web, Flutter for mobile, Spring Boot for backend, and AWS/Vercel for deployment.',
        },
        {
            tag: 'Process',
            question: 'How do you approach new projects?',
            answer: 'Start with understanding requirements, design the solution, build iteratively, and deploy with monitoring.',
        },
        {
            tag: 'Timeline',
            question: 'How long does it take to build a project?',
            answer: 'Depends on scope, but typically 3-6 weeks from initial design to launch for mid-sized applications.',
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

    useEffect(() => {
        const targetId = location.state?.targetId;
        if (targetId) {
            const timer = setTimeout(() => {
                const element = document.getElementById(targetId);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
                navigate(location.pathname, { replace: true, state: {} });
            }, 150);
            return () => clearTimeout(timer);
        }
    }, [location, navigate]);

    return (
        <div className="relative w-full">
            {/* Three.js Starfield Background */}
            <Starfield />
            
            {/* Particle Animations */}
            <ParticleAnimation />
            
            <div className="fixed inset-0 -z-10 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-gray-900 to-black"></div>
                <div className="absolute -top-32 left-1/2 h-[32rem] w-[32rem] -translate-x-1/2 rounded-full bg-green-500/10 blur-3xl"></div>
            </div>

            <motion.section
                id="overview"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
                className="relative z-10 flex min-h-screen items-center"
            >
                <div className="w-full px-6 py-24">
                    <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.1fr_auto] xl:gap-20">
                        <div className="space-y-10">
                            <motion.span
                                className="inline-flex items-center gap-3 rounded-full border border-green-500/40 bg-green-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.4em] text-green-300"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 }}
                            >
                                Full-Stack Developer
                            </motion.span>

                            <motion.h1
                                className="text-4xl font-black text-white tracking-tight sm:text-5xl xl:text-6xl"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                            >
                                Hi, I'm <span className="text-green-400 drop-shadow-lg">{displayText}</span>
                                <span className="animate-pulse">|</span>
                                <br />Full-stack developer building real-world solutions.
                            </motion.h1>

                            <motion.p
                                className="max-w-2xl text-lg leading-relaxed text-gray-300 md:text-xl"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 }}
                            >
                                I build web and mobile applications for transport, finance, and safety sectors. Currently leading BusHub LK and Alphintra to production.
                            </motion.p>

                            <motion.div
                                className="flex flex-col gap-4 sm:flex-row"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4 }}
                            >
                                <a
                                    href="/contact"
                                    className="rounded-lg bg-green-500 px-8 py-3 font-semibold text-white shadow-lg shadow-green-500/20 transition-all duration-200 hover:bg-green-600 hover:shadow-green-500/30"
                                >
                                    Start a conversation
                                </a>
                                <a
                                    href="/SankaviThayaparan_SE.pdf"
                                    download
                                    className="rounded-lg border border-green-500 px-8 py-3 font-semibold text-green-300 transition-all duration-200 hover:bg-green-500 hover:text-white"
                                >
                                    Download résumé
                                </a>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5 }}
                            >
                                <StatsPanel stats={stats} />
                            </motion.div>
                        </div>

                        <motion.div
                            className="relative hidden justify-center lg:flex"
                            initial={{ opacity: 0, x: 40 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                        >
                            <div className="aspect-[3/4] w-[300px] overflow-hidden rounded-[2.25rem] border border-white/10 bg-gradient-to-br from-white/10 via-white/5 to-transparent shadow-2xl xl:w-[360px] relative group">
                                <img src={myImage} alt="Sankavi Thayaparan" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </motion.section>

            <section id="program" className="relative z-10 border-t border-white/5 py-24">
                <div className="mx-auto flex max-w-6xl flex-col gap-12 px-6">
                    <div className="max-w-3xl space-y-4">
                        <p className="text-xs uppercase tracking-[0.35em] text-green-300">What I Do</p>
                        <h2 className="text-3xl font-semibold text-white md:text-4xl">Building practical solutions</h2>
                        <p className="text-lg leading-relaxed text-gray-300">
                            I create web and mobile applications that solve real problems in transport, finance, and safety.
                        </p>
                    </div>
                    <BenefitHighlights benefits={benefits} />
                </div>
            </section>

            <section id="tracks" className="relative z-10 border-t border-white/5 py-24">
                <div className="mx-auto max-w-6xl space-y-12 px-6">
                    <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
                        <div>
                            <p className="text-xs uppercase tracking-[0.35em] text-green-300">Projects</p>
                            <h2 className="text-3xl font-semibold text-white md:text-4xl">Featured work</h2>
                        </div>
                        <a
                            href="/projects"
                            className="inline-flex items-center gap-2 rounded-full border border-white/10 px-5 py-2 text-sm font-semibold text-green-300 transition-colors duration-200 hover:border-green-400 hover:text-white"
                        >
                            Explore all case studies
                            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                                badge={project.badge}
                                duration={project.duration}
                                region={project.region}
                                description={project.programFocus}
                                highlights={project.highlights}
                                image={project.image}
                                tech={project.tech}
                                link={project.link}
                                liveUrl={project.liveUrl}
                            />
                        ))}
                    </div>
                </div>
            </section>

            <section id="journey" className="relative z-10 border-t border-white/5 py-24">
                <div className="mx-auto flex max-w-6xl flex-col gap-12 px-6">
                    <div className="max-w-3xl space-y-4">
                        <p className="text-xs uppercase tracking-[0.35em] text-green-300">Development Process</p>
                        <h2 className="text-3xl font-semibold text-white md:text-4xl">How I build projects</h2>
                        <p className="text-lg leading-relaxed text-gray-300">
                            My approach to building applications from idea to launch.
                        </p>
                    </div>
                    <JourneyTimeline steps={journeySteps} />
                </div>
            </section>

            <section id="stories" className="relative z-10 border-t border-white/5 py-24">
                <div className="mx-auto max-w-6xl space-y-12 px-6">
                    <div className="max-w-3xl space-y-4">
                        <p className="text-xs uppercase tracking-[0.35em] text-green-300">Project Highlights</p>
                        <h2 className="text-3xl font-semibold text-white md:text-4xl">What users say</h2>
                        <p className="text-lg leading-relaxed text-gray-300">
                            Feedback from testing and real-world use.
                        </p>
                    </div>
                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {stories.map(story => (
                            <StoryCard key={story.title} {...story} />
                        ))}
                    </div>
                </div>
            </section>

            <section id="faqs" className="relative z-10 border-t border-white/5 py-24">
                <div className="mx-auto max-w-5xl space-y-8 px-6">
                    <div className="space-y-4 text-center">
                        <p className="text-xs uppercase tracking-[0.35em] text-green-300">FAQ</p>
                        <h2 className="text-3xl font-semibold text-white md:text-4xl">Common questions</h2>
                        <p className="text-lg leading-relaxed text-gray-300">
                            Quick answers about my work and availability.
                        </p>
                    </div>
                    <FAQAccordion items={faqs} />
                </div>
            </section>

            <section className="relative z-10 border-t border-white/5 py-24">
                <div className="mx-auto max-w-4xl px-6 text-center">
                    <p className="text-xs uppercase tracking-[0.35em] text-green-300">Get in touch</p>
                    <h2 className="mt-4 text-3xl font-semibold text-white md:text-4xl">Let's work together</h2>
                    <p className="mt-4 text-lg leading-relaxed text-gray-300">
                        I'm open to internships, freelance projects, and full-time opportunities.
                    </p>
                    <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
                        <a
                            href="/contact"
                            className="rounded-lg bg-green-500 px-8 py-3 font-semibold text-white shadow-lg shadow-green-500/20 transition-all duration-200 hover:bg-green-600"
                        >
                            Get in touch
                        </a>
                        <a
                            href="mailto:sankavithayaparan1605@gmail.com"
                            className="rounded-lg border border-white/20 px-8 py-3 font-semibold text-white transition-all duration-200 hover:border-green-500 hover:text-green-300"
                        >
                            Email me
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
}
