import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import ProjectCard from '../components/ProjectCard';

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
            title: "E-Commerce Platform",
            description: "A full-stack e-commerce platform with payment integration, user authentication, and admin dashboard.",
            image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop",
            tech: ["React", "Node.js", "MongoDB", "Stripe"],
            link: "#",
            category: "web"
        },
        {
            id: 2,
            title: "Task Management App",
            description: "A collaborative task management application with real-time updates and team features.",
            image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=500&h=300&fit=crop",
            tech: ["React", "Firebase", "TypeScript", "Tailwind"],
            link: "#",
            category: "web"
        },
        {
            id: 3,
            title: "AI Chat Assistant",
            description: "An intelligent chatbot powered by machine learning for customer support automation.",
            image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=500&h=300&fit=crop",
            tech: ["Python", "TensorFlow", "Flask", "NLP"],
            link: "#",
            category: "ai"
        },
        {
            id: 4,
            title: "Mobile Fitness App",
            description: "A cross-platform mobile app for tracking workouts and nutrition with social features.",
            image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500&h=300&fit=crop",
            tech: ["React Native", "Redux", "Node.js", "MongoDB"],
            link: "#",
            category: "mobile"
        },
        {
            id: 5,
            title: "Data Analytics Dashboard",
            description: "Interactive dashboard for visualizing business metrics and KPIs with real-time data.",
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop",
            tech: ["React", "D3.js", "Python", "PostgreSQL"],
            link: "#",
            category: "data"
        },
        {
            id: 6,
            title: "Blockchain Wallet",
            description: "A secure cryptocurrency wallet with multi-chain support and transaction history.",
            image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=500&h=300&fit=crop",
            tech: ["React", "Web3.js", "Solidity", "Ethereum"],
            link: "#",
            category: "blockchain"
        }
    ];

    const categories = [
        { id: 'all', label: 'All Projects' },
        { id: 'web', label: 'Web Development' },
        { id: 'mobile', label: 'Mobile Apps' },
        { id: 'ai', label: 'AI/ML' },
        { id: 'data', label: 'Data Analytics' },
        { id: 'blockchain', label: 'Blockchain' }
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
                        className={`px-6 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 ${
                            filter === category.id
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
                className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
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
                        style={{ animationDelay: `${index * 0.1}s` }}
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