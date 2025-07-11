import React from 'react';
import { motion } from 'framer-motion';

const Education = () => {
    const education = [
        {
            id: 1,
            degree: "Master of Science in Computer Science",
            institution: "Stanford University",
            period: "2020 - 2022",
            gpa: "3.9/4.0",
            description: "Specialized in Artificial Intelligence and Machine Learning. Completed thesis on 'Advanced Neural Network Architectures for Natural Language Processing'.",
            courses: ["Advanced Algorithms", "Machine Learning", "Computer Vision", "Distributed Systems"],
            achievements: ["Graduated with Distinction", "Research Assistant", "Teaching Assistant"]
        },
        {
            id: 2,
            degree: "Bachelor of Science in Computer Science",
            institution: "University of California, Berkeley",
            period: "2016 - 2020",
            gpa: "3.8/4.0",
            description: "Focused on Software Engineering and Web Technologies. Led multiple team projects and hackathons.",
            courses: ["Data Structures", "Software Engineering", "Database Systems", "Web Development"],
            achievements: ["Dean's List", "Hackathon Winner", "Student Organization President"]
        }
    ];

    const certifications = [
        {
            id: 1,
            name: "AWS Certified Solutions Architect",
            issuer: "Amazon Web Services",
            date: "2023",
            credential: "AWS-SAA-2023",
            description: "Demonstrates expertise in designing distributed systems on AWS."
        },
        {
            id: 2,
            name: "Google Cloud Professional Developer",
            issuer: "Google Cloud",
            date: "2023",
            credential: "GCP-PD-2023",
            description: "Validates skills in developing and deploying applications on Google Cloud Platform."
        },
        {
            id: 3,
            name: "Microsoft Certified: Azure Developer Associate",
            issuer: "Microsoft",
            date: "2022",
            credential: "AZ-204-2022",
            description: "Proves ability to design, build, test, and maintain cloud applications."
        }
    ];

    const onlineCourses = [
        {
            id: 1,
            title: "Advanced React Patterns",
            platform: "Frontend Masters",
            duration: "8 weeks",
            completion: "2024",
            description: "Deep dive into advanced React concepts including hooks, context, and performance optimization."
        },
        {
            id: 2,
            title: "Machine Learning Specialization",
            platform: "Coursera",
            duration: "6 months",
            completion: "2023",
            description: "Comprehensive course covering supervised learning, unsupervised learning, and neural networks."
        },
        {
            id: 3,
            title: "System Design Interview",
            platform: "Educative",
            duration: "12 weeks",
            completion: "2023",
            description: "Mastered scalable system design principles and distributed systems architecture."
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
                <h2 className="text-3xl font-bold text-white mb-8">Formal Education</h2>
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

            {/* Professional Certifications */}
            <motion.section
                className="mb-16 border-t border-gray-800 pt-16"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
            >
                <h2 className="text-3xl font-bold text-white mb-8">Professional Certifications</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {certifications.map((cert) => (
                        <motion.div
                            key={cert.id}
                            className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:bg-gray-700 transition-all duration-300"
                            variants={itemVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                        >
                            <div className="flex items-start justify-between mb-4">
                                <div className="text-2xl">🏆</div>
                                <span className="text-green-400 text-sm font-medium">{cert.date}</span>
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">{cert.name}</h3>
                            <p className="text-green-400 font-medium mb-2">{cert.issuer}</p>
                            <p className="text-gray-400 text-sm mb-3">Credential: {cert.credential}</p>
                            <p className="text-gray-300 text-sm leading-relaxed">{cert.description}</p>
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
                                        {course.duration} • Completed {course.completion}
                                    </p>
                                    <p className="text-gray-300 leading-relaxed">{course.description}</p>
                                </div>
                                <div className="mt-4 md:mt-0 md:ml-6">
                                    <span className="bg-green-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                                        Completed
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