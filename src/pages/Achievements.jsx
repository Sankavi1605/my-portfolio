import React from 'react';
import { motion } from 'framer-motion';

const Achievements = () => {
    const achievements = [
        {
            id: 1,
            title: "Best Developer Award",
            organization: "Tech Conference 2024",
            date: "March 2024",
            description: "Recognized for outstanding contributions to open-source projects and innovative solutions.",
            category: "award",
            icon: "🏆"
        },
        {
            id: 2,
            title: "Hackathon Winner",
            organization: "CodeFest 2023",
            date: "November 2023",
            description: "First place in the 48-hour hackathon for developing an AI-powered accessibility tool.",
            category: "competition",
            icon: "🥇"
        },
        {
            id: 3,
            title: "Speaker at ReactConf",
            organization: "React Conference",
            date: "October 2023",
            description: "Presented on 'Advanced State Management Patterns' to 500+ developers.",
            category: "speaking",
            icon: "🎤"
        },
        {
            id: 4,
            title: "Open Source Contributor",
            organization: "GitHub",
            date: "Ongoing",
            description: "Contributed to 50+ open source projects with 1000+ stars across repositories.",
            category: "contribution",
            icon: "🌟"
        },
        {
            id: 5,
            title: "Mentor of the Year",
            organization: "Coding Bootcamp",
            date: "December 2023",
            description: "Mentored 20+ junior developers, helping them transition into successful careers.",
            category: "mentorship",
            icon: "👨‍🏫"
        },
        {
            id: 6,
            title: "Technical Blog Writer",
            organization: "Medium",
            date: "2023-2024",
            description: "Published 25+ technical articles with 50K+ total reads and 2K+ followers.",
            category: "writing",
            icon: "✍️"
        }
    ];

    const milestones = [
        {
            year: "2024",
            title: "Senior Developer Promotion",
            description: "Promoted to Senior Software Engineer after leading multiple successful projects."
        },
        {
            year: "2023",
            title: "100+ Projects Completed",
            description: "Reached the milestone of completing over 100 professional projects."
        },
        {
            year: "2022",
            title: "First Tech Conference Talk",
            description: "Delivered first technical presentation at a major industry conference."
        },
        {
            year: "2021",
            title: "Open Source Recognition",
            description: "Received recognition for significant contributions to popular open source projects."
        }
    ];

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
                <h1 className="text-4xl md:text-5xl font-bold text-white">Achievements & Recognition</h1>
                <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                    A collection of awards, recognitions, and milestones that mark my journey in software development.
                </p>
            </motion.div>

            {/* Achievements Grid */}
            <motion.div
                className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                {achievements.map((achievement) => (
                    <motion.div
                        key={achievement.id}
                        variants={itemVariants}
                        className="bg-gray-800 rounded-xl p-6 hover:bg-gray-700 transition-all duration-300 border border-gray-700"
                    >
                        <div className="flex items-start space-x-4">
                            <div className="text-3xl">{achievement.icon}</div>
                            <div className="flex-1">
                                <h3 className="text-xl font-bold text-white mb-2">{achievement.title}</h3>
                                <p className="text-green-400 font-medium mb-1">{achievement.organization}</p>
                                <p className="text-gray-400 text-sm mb-3">{achievement.date}</p>
                                <p className="text-gray-300 leading-relaxed">{achievement.description}</p>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </motion.div>

            {/* Career Milestones */}
            <motion.section
                className="py-16 border-t border-gray-800"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
            >
                <h2 className="text-3xl font-bold text-white text-center mb-12">Career Milestones</h2>
                <div className="relative">
                    {/* Timeline Line */}
                    <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gray-700"></div>
                    
                    <div className="space-y-12">
                        {milestones.map((milestone, index) => (
                            <motion.div
                                key={milestone.year}
                                className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.2 }}
                                viewport={{ once: true }}
                            >
                                <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                                    <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
                                        <div className="text-2xl font-bold text-green-400 mb-2">{milestone.year}</div>
                                        <h3 className="text-xl font-bold text-white mb-2">{milestone.title}</h3>
                                        <p className="text-gray-300">{milestone.description}</p>
                                    </div>
                                </div>
                                
                                {/* Timeline Dot */}
                                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-green-500 rounded-full border-4 border-gray-900"></div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </motion.section>

            {/* Stats Section */}
            <motion.section
                className="py-16 border-t border-gray-800"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
            >
                <h2 className="text-3xl font-bold text-white text-center mb-12">Impact Numbers</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    <motion.div
                        className="text-center"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        viewport={{ once: true }}
                    >
                        <div className="text-3xl md:text-4xl font-bold text-green-400">15+</div>
                        <div className="text-gray-400">Awards Won</div>
                    </motion.div>
                    <motion.div
                        className="text-center"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        <div className="text-3xl md:text-4xl font-bold text-green-400">25+</div>
                        <div className="text-gray-400">Conference Talks</div>
                    </motion.div>
                    <motion.div
                        className="text-center"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        viewport={{ once: true }}
                    >
                        <div className="text-3xl md:text-4xl font-bold text-green-400">50+</div>
                        <div className="text-gray-400">Open Source Contributions</div>
                    </motion.div>
                    <motion.div
                        className="text-center"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        viewport={{ once: true }}
                    >
                        <div className="text-3xl md:text-4xl font-bold text-green-400">100+</div>
                        <div className="text-gray-400">Developers Mentored</div>
                    </motion.div>
                </div>
            </motion.section>
        </div>
    );
};

export default Achievements;