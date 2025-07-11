import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Certifications = () => {
    const [filter, setFilter] = useState('all');

    const certifications = [
        {
            id: 1,
            name: "AWS Certified Solutions Architect - Associate",
            issuer: "Amazon Web Services",
            date: "March 2024",
            expiry: "March 2027",
            credential: "AWS-SAA-2024",
            category: "cloud",
            level: "Associate",
            description: "Demonstrates expertise in designing distributed systems on AWS. Covers services like EC2, S3, RDS, and Lambda.",
            skills: ["AWS", "Cloud Architecture", "DevOps", "Security"],
            logo: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=100&h=100&fit=crop"
        },
        {
            id: 2,
            name: "Google Cloud Professional Developer",
            issuer: "Google Cloud",
            date: "January 2024",
            expiry: "January 2027",
            credential: "GCP-PD-2024",
            category: "cloud",
            level: "Professional",
            description: "Validates skills in developing and deploying applications on Google Cloud Platform with best practices.",
            skills: ["Google Cloud", "App Engine", "Cloud Functions", "Kubernetes"],
            logo: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=100&h=100&fit=crop"
        },
        {
            id: 3,
            name: "Microsoft Certified: Azure Developer Associate",
            issuer: "Microsoft",
            date: "December 2023",
            expiry: "December 2026",
            credential: "AZ-204-2023",
            category: "cloud",
            level: "Associate",
            description: "Proves ability to design, build, test, and maintain cloud applications using Azure services.",
            skills: ["Azure", "C#", ".NET", "Azure DevOps"],
            logo: "https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=100&h=100&fit=crop"
        },
        {
            id: 4,
            name: "Certified Kubernetes Administrator (CKA)",
            issuer: "Cloud Native Computing Foundation",
            date: "November 2023",
            expiry: "November 2026",
            credential: "CKA-2023",
            category: "devops",
            level: "Professional",
            description: "Demonstrates expertise in Kubernetes administration, troubleshooting, and cluster management.",
            skills: ["Kubernetes", "Docker", "Container Orchestration", "Linux"],
            logo: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=100&h=100&fit=crop"
        },
        {
            id: 5,
            name: "MongoDB Certified Developer",
            issuer: "MongoDB",
            date: "October 2023",
            expiry: "October 2026",
            credential: "MDB-DEV-2023",
            category: "database",
            level: "Associate",
            description: "Validates skills in MongoDB development, data modeling, and application integration.",
            skills: ["MongoDB", "NoSQL", "Data Modeling", "Aggregation"],
            logo: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=100&h=100&fit=crop"
        },
        {
            id: 6,
            name: "React Developer Certification",
            issuer: "Meta",
            date: "September 2023",
            expiry: "September 2026",
            credential: "REACT-DEV-2023",
            category: "frontend",
            level: "Professional",
            description: "Demonstrates advanced React skills including hooks, context, and performance optimization.",
            skills: ["React", "JavaScript", "TypeScript", "Redux"],
            logo: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=100&h=100&fit=crop"
        }
    ];

    const categories = [
        { id: 'all', label: 'All Certifications' },
        { id: 'cloud', label: 'Cloud & DevOps' },
        { id: 'frontend', label: 'Frontend Development' },
        { id: 'database', label: 'Database' },
        { id: 'devops', label: 'DevOps' }
    ];

    const filteredCertifications = filter === 'all' 
        ? certifications 
        : certifications.filter(cert => cert.category === filter);

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
                <h1 className="text-4xl md:text-5xl font-bold text-white">Professional Certifications</h1>
                <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                    Industry-recognized certifications that validate my expertise across various technologies and platforms.
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

            {/* Certifications Grid */}
            <motion.div
                className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                {filteredCertifications.map((cert) => (
                    <motion.div
                        key={cert.id}
                        variants={itemVariants}
                        className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:bg-gray-700 transition-all duration-300"
                    >
                        <div className="flex items-start justify-between mb-4">
                            <div className="flex items-center space-x-3">
                                <div className="w-12 h-12 bg-gray-700 rounded-lg flex items-center justify-center">
                                    <span className="text-2xl">🏆</span>
                                </div>
                                <div>
                                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                                        cert.level === 'Professional' 
                                            ? 'bg-purple-600 text-white' 
                                            : 'bg-blue-600 text-white'
                                    }`}>
                                        {cert.level}
                                    </span>
                                </div>
                            </div>
                            <span className="text-green-400 text-sm font-medium">{cert.date}</span>
                        </div>

                        <h3 className="text-xl font-bold text-white mb-2">{cert.name}</h3>
                        <p className="text-green-400 font-medium mb-2">{cert.issuer}</p>
                        <p className="text-gray-400 text-sm mb-3">Credential: {cert.credential}</p>
                        <p className="text-gray-300 text-sm mb-4 leading-relaxed">{cert.description}</p>

                        <div className="mb-4">
                            <h4 className="text-white font-semibold mb-2">Skills Covered</h4>
                            <div className="flex flex-wrap gap-2">
                                {cert.skills.map((skill) => (
                                    <span key={skill} className="bg-gray-700 text-gray-300 px-2 py-1 rounded-full text-xs">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="flex items-center justify-between text-sm text-gray-400">
                            <span>Expires: {cert.expiry}</span>
                            <span className="text-green-400">✓ Active</span>
                        </div>
                    </motion.div>
                ))}
            </motion.div>

            {/* Certification Stats */}
            <motion.section
                className="mt-16 border-t border-gray-800 pt-16"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
            >
                <h2 className="text-3xl font-bold text-white text-center mb-12">Certification Overview</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    <motion.div
                        className="text-center"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        viewport={{ once: true }}
                    >
                        <div className="text-3xl md:text-4xl font-bold text-green-400">6</div>
                        <div className="text-gray-400">Active Certifications</div>
                    </motion.div>
                    <motion.div
                        className="text-center"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        <div className="text-3xl md:text-4xl font-bold text-green-400">4</div>
                        <div className="text-gray-400">Technology Areas</div>
                    </motion.div>
                    <motion.div
                        className="text-center"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        viewport={{ once: true }}
                    >
                        <div className="text-3xl md:text-4xl font-bold text-green-400">3</div>
                        <div className="text-gray-400">Cloud Platforms</div>
                    </motion.div>
                    <motion.div
                        className="text-center"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        viewport={{ once: true }}
                    >
                        <div className="text-3xl md:text-4xl font-bold text-green-400">2027</div>
                        <div className="text-gray-400">Latest Expiry</div>
                    </motion.div>
                </div>
            </motion.section>
        </div>
    );
};

export default Certifications;