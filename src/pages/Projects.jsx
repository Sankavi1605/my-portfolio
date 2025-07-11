import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ProjectCard from '../components/ProjectCard';

const Projects = () => {
    const [filter, setFilter] = useState('all');

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
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center space-y-6 mb-12"
            >
                <h1 className="text-4xl md:text-5xl font-bold text-white">My Projects</h1>
                <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                    Here are some of the projects I've worked on. Each one represents a unique challenge 
                    and learning opportunity.
                </p>
            </motion.div>

            {/* Filter Buttons */}
            <motion.div 
                className="flex flex-wrap justify-center gap-4 mb-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
            >
                {categories.map((category) => (
                    <button
                        key={category.id}
                        onClick={() => setFilter(category.id)}
                        className={`px-6 py-2 rounded-full font-medium transition-all duration-200 ${
                            filter === category.id
                                ? 'bg-green-500 text-white'
                                : 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white'
                        }`}
                    >
                        {category.label}
                    </button>
                ))}
            </motion.div>

            {/* Projects Grid */}
            <motion.div
                className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                {filteredProjects.map((project) => (
                    <motion.div key={project.id} variants={itemVariants}>
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
                    className="text-center py-12"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                >
                    <p className="text-gray-400 text-lg">No projects found in this category.</p>
                </motion.div>
            )}

            <motion.div 
                className="text-center mt-16"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                viewport={{ once: true }}
            >
                <h3 className="text-2xl font-bold text-white mb-4">Interested in working together?</h3>
                <p className="text-gray-400 mb-6">Let's discuss your project and see how I can help bring your ideas to life.</p>
                <a 
                    href="/contact" 
                    className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105"
                >
                    Get In Touch
                </a>
            </motion.div>
        </div>
    );
};

export default Projects;