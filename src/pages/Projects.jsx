import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import ProjectCard from '../components/ProjectCard';
import img1 from "../assets/private_buses_in_sri_lanka.jpg";
import img2 from "../assets/agromart.jpg";
import img3 from "../assets/apex.jpeg";
import img4 from "../assets/sameepa.jpg";
import img5 from "../assets/login.jpg";


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
            title: "BusHub LK",
            description: "A full-stack platform to modernize Sri Lanka's public transport system, featuring a web admin dashboard for management and a cross-platform mobile app for passengers with live bus tracking, route searching, and fare calculation.",
            image:img1,
            tech: ["React.js", "React Native", "Node.js", "PostgreSQL", "AWS"],
            link: "https://github.com/MurshidAkram/BusHubLK",
            category: ["web","mobile"]
        },
        {
            id: 2,
            title: "AgroMart E-commerce Platform",
            description: "A full-stack MERN e-commerce site featuring a secure RESTful API to manage products, users, and orders. Integrates JWT for authentication and the Stripe API for seamless payment processing.",
            image:img2,
            tech: ["React", "Node.js", "Express.js", "MongoDB", "Stripe API", "JWT"],
            link: "https://github.com/lagithan/AgroMart1",
            category: "web"
        },
        {
            id: 3,
            title: "Secure Login & Authorization API",
            description: "A secure, stateless backend API using Spring Boot for user authentication and authorization. Implements Spring Security, JWT for session management, and Role-Based Access Control (RBAC).",
            image: img5,
            tech: ["Java", "Spring Boot", "Spring Security", "JWT", "Maven", "H2"],
            link: "https://github.com/Sankavi1605/Loginpage_springboot",
            category: "backend"
        },
        {
            id: 4,
            title: "Apex Finance",
            description: "A full-stack personal finance dashboard to securely manage and visualize financial data, featuring a responsive front-end with data visualization and a secure back-end with NextAuth.js authentication.",
            image: img3,
            tech: ["Next.js", "TypeScript", "Tailwind CSS", "Prisma", "NextAuth.js", "SQLite"],
            link: "https://github.com/Sankavi1605/Apex-Finance",
            category: "web"
        },
        {
            id: 5,
            title: "Sameepa",
            description: "A full-stack platform to digitize operations in closed residential communities, featuring role-based access for facility booking, visitor management, maintenance requests, and community forums.",
            image: img4,
            tech: ["PHP", "MySQL", "JavaScript", "HTML", "CSS"],
            link: "https://github.com/MurshidAkram/sameepa",
            category: "web"
        },
       
    ];


    const categories = [
        { id: 'all', label: 'All Projects' },
        { id: 'web', label: 'Web Development' },
        { id: 'mobile', label: 'Mobile Apps' },
        { id: 'backend', label: 'Backend Development' },

    ];

    // UPDATED FILTERING LOGIC
    const filteredProjects = filter === 'all'
        ? projects
        : projects.filter(project => {
            // Check if the category is an array and includes the filter
            if (Array.isArray(project.category)) {
                return project.category.includes(filter);
            }
            // Fallback for categories that are still strings
            return project.category === filter;
        });

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