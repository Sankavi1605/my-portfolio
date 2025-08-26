import React from 'react';
import { motion } from 'framer-motion';

const Education = () => {
    const education = [
       
        {
            id: 1,
            degree: "Bachelor of Science in Computer Science",
            institution: "University of Colombo School of Computing",
            period: "2023 - Present",
            gpa: "3.06/4.0", // Adjust as needed
            description:"Focused on software development principles, algorithms, and data structures. Engaged in hands-on projects to apply theoretical knowledge.",
            courses: ["Rapid Application Development(React)", "Advanced Computer Architecture", "Software Engineering Principles", "Database", "Data Structure and Algorithms"],
            achievements:[
                "Successfully balanced interdisciplinary coursework",
                "High performance in lab-based modules",
                "Actively engaged in ICT-related student projects",
            ]
        },
    ];



    const onlineCourses = [
        {
            id: 1,
            title: "HTML, CSS, and JavaScript for Web Developers ",
            platform: "Coursera",
            duration: "Self-Paced",
            completion: "Finished",
            description: "Demonstrates expertise in JavaScript, HTML, and CSS."
        },
        {
            id: 2,
            title: "Next.js Essential Training",
            platform: "LinkedIn Learning",
            duration: "Self-Paced",
            completion: "Finished",
            description: "Demonstrates expertise in Next.js and server-side rendering."
        },
        {
            id: 3,
            title: "Machine Learning with Python: Foundations",
            platform: "LinkedIn Learning",
            duration: "Self-Paced",
            completion: "Finished",
            description: "Demonstrates expertise in machine learning concepts and Python programming."
        },
        {
            id: 4,
            title: "Front End Development Libraries",
            platform: "freeCodeCamp",
            duration: "Self-Paced",
            completion: "Finished",
            description: "Demonstrates and projects expertise in front-end development libraries."
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
                <h1 className="text-4xl md:text-5xl font-bold text-white">Education & Learning</h1>
                <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                    My academic journey and continuous learning path that has shaped my expertise in software development.
                </p>
            </motion.div>

            {/* Formal Education */}
            <motion.section
                className="mb-16"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
            >
                <h2 className="text-3xl font-bold text-white mb-8">Education</h2>
                <div className="space-y-8">
                    {education.map((edu) => (
                        <motion.div
                            key={edu.id}
                            className="bg-gray-800 rounded-xl p-8 border border-gray-700"
                            variants={itemVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                        >
                            <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                                <div>
                                    <h3 className="text-2xl font-bold text-white mb-2">{edu.degree}</h3>
                                    <p className="text-green-400 text-lg font-medium">{edu.institution}</p>
                                    <p className="text-gray-400">{edu.period}</p>
                                </div>
                                <div className="mt-4 md:mt-0">
                                    <span className="bg-green-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                                        GPA: {edu.gpa}
                                    </span>
                                </div>
                            </div>

                            <p className="text-gray-300 mb-6 leading-relaxed">{edu.description}</p>

                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <h4 className="text-white font-semibold mb-3">Key Courses</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {edu.courses.map((course) => (
                                            <span key={course} className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm">
                                                {course}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                                <div>
                                    <h4 className="text-white font-semibold mb-3">Achievements</h4>
                                    <ul className="space-y-2">
                                        {edu.achievements.map((achievement) => (
                                            <li key={achievement} className="text-gray-300 flex items-center">
                                                <span className="text-green-400 mr-2">✓</span>
                                                {achievement}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.section>


            {/* Online Learning */}
            <motion.section
                className="mb-16 border-t border-gray-800 pt-16"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
            >
                <h2 className="text-3xl font-bold text-white mb-8">Online Learning & Courses</h2>
                <div className="space-y-6">
                    {onlineCourses.map((course) => (
                        <motion.div
                            key={course.id}
                            className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:bg-gray-700 transition-all duration-300"
                            variants={itemVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                        >
                            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                                <div className="flex-1">
                                    <h3 className="text-xl font-bold text-white mb-2">{course.title}</h3>
                                    <p className="text-green-400 font-medium mb-1">{course.platform}</p>
                                    <p className="text-gray-400 text-sm mb-3">
                                        {course.duration} • {course.completion}
                                    </p>
                                    <p className="text-gray-300 leading-relaxed">{course.description}</p>
                                </div>
                                <div className="mt-4 md:mt-0 md:ml-6">
                                    <span className="bg-green-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                                        Ongoing
                                    </span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.section>

            {/* Learning Philosophy */}
            <motion.section
                className="border-t border-gray-800 pt-16"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
            >
                <div className="bg-gray-800 rounded-xl p-8 border border-gray-700">
                    <h2 className="text-3xl font-bold text-white mb-6">My Learning Philosophy</h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div>
                            <h3 className="text-xl font-bold text-white mb-4">Continuous Learning</h3>
                            <p className="text-gray-300 leading-relaxed">
                                I believe in the power of continuous learning and staying updated with the latest
                                technologies and industry trends. This commitment to growth has been the foundation
                                of my career success.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-white mb-4">Practical Application</h3>
                            <p className="text-gray-300 leading-relaxed">
                                Learning is most effective when applied to real-world problems. I focus on
                                hands-on projects and practical implementations to reinforce theoretical knowledge.
                            </p>
                        </div>
                    </div>
                </div>
            </motion.section>
        </div>
    );
};

export default Education;