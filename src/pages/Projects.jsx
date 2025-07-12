import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import ProjectCard from '../components/ProjectCard';
import img1 from "../assets/5.png";
import img2 from "../assets/4.jpg";

const Projects = () => {
    const [filter, setFilter] = useState('all');
    const [isScrolling, setIsScrolling] = useState(false);
    const { scrollY } = useScroll();
    const y = useTransform(scrollY, [0, 1000], [0, -100]);

    useEffect(() => {
        let timeoutId;
        const handleScroll = () => {
            setIsScrolling(true);
            clearTimeout(timeoutId);
            timeoutId = setTimeout(() => setIsScrolling(false), 150);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => {
            window.removeEventListener('scroll', handleScroll);
            clearTimeout(timeoutId);
        };
    }, []);

    const projects = [
        {
            id: 1,
            title: "PetConnect",
            description: "An AI-powered platform to help pet owners diagnose diseases at home and rehome stray pets with ease.",
            image: "https://images.unsplash.com/photo-1558788353-f76d92427f16?w=500&h=300&fit=crop",
            tech: ["React", "Node.js", "MongoDB", "Express", "AI API"],
            link: "https://github.com/Nilina2002/petconnect",
            category: "ai"
        },
        {
            id: 2,
            title: "Imgr",
            description: "A text-to-image generator using AI APIs, built on the MERN stack (Stripe integration yet to be implemented).",
            image: "https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?w=500&h=300&fit=crop",
            tech: ["React", "Node.js", "MongoDB", "AI API", "Stripe"],
            link: "https://github.com/Nilina2002/imgr",
            category: "ai"
        },
        {
            id: 3,
            title: "AuditFlow",
            description: "A robust audit management system with client tracking, expiry alerts",
            image: img2,
            tech: ["React", "Node.js", "MongoDB"],
            link: "https://github.com/Nilina2002/AuditFlowV2",
            category: "web"
        },
        {
            id: 4,
            title: "SPNDR",
            description: "A fully functional finance tracker Android app for managing expenses and generating reports.",
            image: "https://images.unsplash.com/photo-1556740772-1a741367b93e?w=500&h=300&fit=crop",
            tech: ["Kotlin", "SQLite", "Android Studio"],
            link: "https://github.com/Nilina2002/SPNDR-Finance-Tracker-App",
            category: "mobile"
        },
        {
            id: 5,
            title: "To-Do List",
            description: "A minimalist and fast task manager built using Vite and Tailwind CSS.",
            image: "https://images.unsplash.com/photo-1506784365847-bbad939e9335?w=500&h=300&fit=crop",
            tech: ["Vite", "Tailwind", "JavaScript"],
            link: "https://github.com/Nilina2002/to-do-list",
            category: "web"
        },
        {
            id: 6,
            title: "TripSplendor",
            description: "A travel and tourism management system with booking and itinerary features built using PHP and vanilla web technologies.",
            image: "https://images.unsplash.com/photo-1526772662000-3f88f10405ff?w=500&h=300&fit=crop",
            tech: ["HTML", "CSS", "JavaScript", "PHP"],
            link: "https://github.com/Nilina2002/TravelAndTourismManagementSystem-Trip-Splendor",
            category: "web"
        },
        {
            id: 7,
            title: "React Chat App",
            description: "A real-time chat application using React and Firebase for auth, with Clerk for image uploads and media sharing.",
            image: img1,
            tech: ["React", "Firebase Auth", "Clerk", "Tailwind"],
            link: "https://github.com/Nilina2002/react-chat-app",
            category: "web"
        },
        {
            id: 8,
            title: "Spotify Clone",
            description: "A full-stack music streaming web app inspired by Spotify, built with the MERN stack and Google authentication.",
            image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=500&h=300&fit=crop",
            tech: ["React", "Node.js", "MongoDB", "Express", "Google Auth"],
            // link: "https://github.com/Nilina2002/spotify-clone", // update if repo name differs
            category: "web"
        }
    ];


    const categories = [
        { id: 'all', label: 'All Projects' },
        { id: 'web', label: 'Web Development' },
        { id: 'mobile', label: 'Mobile Apps' },
        { id: 'ai', label: 'AI/ML' },

    ];

    const filteredProjects = filter === 'all'
        ? projects
        : projects.filter(project => project.category === filter);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: {
            opacity: 0,
            y: 50,
            scale: 0.95
        },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        }
    };

    const filterVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                ease: "easeOut"
            }
        }
    };

    const handleFilterChange = (newFilter) => {
        // Smooth scroll to top when changing filters
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });

        // Add a small delay before changing filter for smooth transition
        setTimeout(() => {
            setFilter(newFilter);
        }, 300);
    };

    return (
        <motion.div
            className="max-w-6xl mx-auto px-4"
            style={{ y }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
        >
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="text-center space-y-6 mb-16"
            >
                <motion.h1
                    className="text-4xl md:text-6xl font-bold text-white"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    My Projects
                </motion.h1>
                <motion.p
                    className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                >
                    Here are some of the projects I've worked on. Each one represents a unique challenge
                    and learning opportunity that has shaped my development journey.
                </motion.p>
            </motion.div>

            {/* Filter Buttons */}
            <motion.div
                className="flex flex-wrap justify-center gap-4 mb-16"
                variants={filterVariants}
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.6 }}
            >
                {categories.map((category, index) => (
                    <motion.button
                        key={category.id}
                        onClick={() => handleFilterChange(category.id)}
                        className={`px-6 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 ${filter === category.id
                            ? 'bg-green-500 text-white shadow-lg shadow-green-500/25'
                            : 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white border border-gray-700 hover:border-green-500'
                            }`}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8 + index * 0.1 }}
                    >
                        {category.label}
                    </motion.button>
                ))}
            </motion.div>

            {/* Projects Grid */}
            <motion.div
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-fr"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                key={filter} // Re-trigger animation when filter changes
            >
                {filteredProjects.map((project, index) => (
                    <motion.div
                        key={project.id}
                        variants={itemVariants}
                        whileHover={{
                            scale: 1.02,
                            transition: { duration: 0.2 }
                        }}
                        className="h-full flex"
                    >
                        <ProjectCard
                            title={project.title}
                            description={project.description}
                            image={project.image}
                            tech={project.tech}
                            link={project.link}
                        />
                    </motion.div>
                ))}
            </motion.div>

            {/* Call to Action */}
            {filteredProjects.length === 0 && (
                <motion.div
                    className="text-center py-16"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    <p className="text-gray-400 text-lg">No projects found in this category.</p>
                </motion.div>
            )}

            <motion.div
                className="text-center mt-20"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true, margin: "-100px" }}
            >
                <motion.h3
                    className="text-3xl font-bold text-white mb-6"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    Interested in working together?
                </motion.h3>
                <motion.p
                    className="text-gray-400 mb-8 text-lg"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                >
                    Let's discuss your project and see how I can help bring your ideas to life.
                </motion.p>
                <motion.a
                    href="/contact"
                    className="inline-block bg-green-500 hover:bg-green-600 text-white px-10 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl shadow-lg"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    viewport={{ once: true }}
                >
                    Get In Touch
                </motion.a>
            </motion.div>
        </motion.div>
    );
};

export default Projects;