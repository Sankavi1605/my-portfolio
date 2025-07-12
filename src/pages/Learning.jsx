import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaBook, FaCode, FaRocket, FaGraduationCap, FaLightbulb, FaBrain, FaChartLine, FaLaptopCode, FaMicrochip } from 'react-icons/fa';

export default function Learning() {
    const [currentLearning, setCurrentLearning] = useState(0);

    const learningTopics = [
        {
            title: "Arduino & Embedded Systems",
            description: "Exploring hardware programming, sensors, and IoT applications",
            progress: 25,
            icon: <FaMicrochip className="text-3xl" />,
            color: "from-yellow-500 to-orange-500",
            skills: ["Arduino", "C/C++", "Sensors", "IoT", "Hardware"]
        },
        {
            title: "Machine Learning & AI",
            description: "Exploring deep learning, neural networks, and AI applications",
            progress: 15,
            icon: <FaBrain className="text-3xl" />,
            color: "from-purple-500 to-pink-500",
            skills: ["TensorFlow", "PyTorch", "Scikit-learn", "Computer Vision"]
        },
        {
            title: "Advanced React",
            description: "Mastering React hooks, context, and performance optimization",
            progress: 65,
            icon: <FaCode className="text-3xl" />,
            color: "from-blue-500 to-cyan-500",
            skills: ["React Hooks", "Context API", "Performance", "Testing"]
        },
        {
            title: "Data Science",
            description: "Learning data analysis, visualization, and statistical modeling",
            progress: 20,
            icon: <FaChartLine className="text-3xl" />,
            color: "from-green-500 to-emerald-500",
            skills: ["Pandas", "NumPy", "Matplotlib", "Statistics"]
        },
        {
            title: "Mobile Development",
            description: "Building cross-platform mobile apps with React Native",
            progress: 85,
            icon: <FaLaptopCode className="text-3xl" />,
            color: "from-orange-500 to-red-500",
            skills: ["React Native", "Expo", "Mobile UI", "APIs"]
        }
    ];

    const goals = [
        {
            title: "Complete Arduino IoT Project",
            target: "Aug 2025",
            status: "In Progress",
            icon: <FaMicrochip />
        },
        {
            title: "Java Script",
            target: "Sept 2025",
            status: "In Progress",
            icon: <FaGraduationCap />
        },
        {
            title: "Build and Train an AI Model",
            target: "Oct 2025",
            status: "Planning",
            icon: <FaRocket />
        },


    ];

    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         setCurrentLearning((prev) => (prev + 1) % learningTopics.length);
    //     }, 4000);

    //     return () => clearInterval(interval);
    // }, []);

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
            {/* Hero Section */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center space-y-6 mb-16"
            >
                {/* <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                    className="inline-block p-4 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full mb-6" */}

                {/* <FaBook className="text-4xl text-white" /> */}
                {/* </motion.div> */}
                <h1 className="text-4xl md:text-6xl font-bold text-white">
                    Currently <span className="text-green-400">Learning</span>
                </h1>
                {/* <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                    I'm constantly expanding my skills and knowledge. Here's what I'm currently focused on learning and my goals for the future.
                </p> */}
            </motion.div>

            {/* Current Learning Section */}
            <motion.section
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="mb-16"
            >
                {/* <motion.h2
                    variants={itemVariants}
                    className="text-3xl font-bold text-white mb-8 text-center"
                >
                    What I'm Learning Now
                </motion.h2> */}

                <div className="grid md:grid-cols-2 gap-8">
                    {learningTopics.map((topic, index) => (
                        <motion.div
                            key={topic.title}
                            variants={itemVariants}
                            whileHover={{ scale: 1.02 }}
                            className={`relative overflow-hidden rounded-2xl p-8 border border-gray-700 bg-gray-800/50 backdrop-blur-sm ${index === currentLearning ? '' : ''
                                }`}
                        >
                            {/* Animated Background */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${topic.color} opacity-10 blur-xl`}></div>

                            <div className="relative z-10">
                                <div className="flex items-center space-x-4 mb-4">
                                    <div className={`p-3 rounded-xl bg-gradient-to-br ${topic.color} text-white`}>
                                        {topic.icon}
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-white">{topic.title}</h3>
                                        <p className="text-gray-400 text-sm">{topic.description}</p>
                                    </div>
                                </div>

                                {/* Progress Bar */}
                                <div className="mb-4">
                                    <div className="flex justify-between items-center mb-2">
                                        <span className="text-sm text-gray-400">Progress</span>
                                        <span className="text-sm font-semibold text-green-400">{topic.progress}%</span>
                                    </div>
                                    <div className="w-full bg-gray-700 rounded-full h-2">
                                        <motion.div
                                            className="bg-gradient-to-r from-green-500 to-emerald-500 h-2 rounded-full"
                                            initial={{ width: 0 }}
                                            animate={{ width: `${topic.progress}%` }}
                                            transition={{ duration: 1, delay: 0.5 }}
                                        />
                                    </div>
                                </div>

                                {/* Skills */}
                                <div className="flex flex-wrap gap-2">
                                    {topic.skills.map((skill) => (
                                        <span
                                            key={skill}
                                            className="px-3 py-1 bg-gray-700 text-green-400 text-xs rounded-full border border-gray-600"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.section>

            {/* Learning Goals Section */}
            <motion.section
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="mb-16"
            >
                <motion.h2
                    variants={itemVariants}
                    className="text-3xl font-bold text-white mb-8 text-center"
                >
                    Learning Goals
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 justify-items-center">
                    {goals.map((goal, index) => (
                        <motion.div
                            key={goal.title}
                            variants={itemVariants}
                            whileHover={{ scale: 1.05, y: -5 }}
                            className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-green-500/50 transition-all duration-300 h-full flex flex-col justify-between w-full max-w-xs"
                        >
                            <div className="flex items-start space-x-3 mb-4">
                                <div className="p-2 bg-green-600 rounded-lg text-white flex-shrink-0">
                                    {goal.icon}
                                </div>
                                <div className="flex-1 min-w-0">
                                    <h3 className="text-white font-semibold text-sm leading-tight mb-1">{goal.title}</h3>
                                    <p className="text-gray-400 text-xs">{goal.target}</p>
                                </div>
                            </div>
                            <div className="flex items-center justify-between mt-auto">
                                <span className="text-xs text-gray-400">Status</span>
                                <span className="text-xs px-2 py-1 bg-green-600/20 text-green-400 rounded-full">
                                    {goal.status}
                                </span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.section>

            {/* How I Stand Out Section */}
            <motion.section
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-2xl p-8 border border-gray-700"
            >
                <div className="max-w-4xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-8">
                        <motion.div
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            transition={{ delay: 0.2, type: "spring" }}
                            className="inline-block p-4 bg-green-600 rounded-full mb-4"
                        >
                            <FaLightbulb className="text-3xl text-white" />
                        </motion.div>
                        <h2 className="text-3xl font-bold text-white mb-4">How I Stand Out</h2>
                        <div className="w-20 h-1 bg-green-500 mx-auto rounded-full"></div>
                    </div>

                    {/* Main Content */}
                    <div className="grid md:grid-cols-2 gap-8 mb-8">
                        {/* Left Column */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.3 }}
                            className="space-y-6"
                        >
                            <div className="flex items-start space-x-4">
                                <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                                    <span className="text-white font-bold text-lg">1</span>
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold text-white mb-3">Theoretical Foundation</h3>
                                    <p className="text-gray-300 leading-relaxed text-base">
                                        My strong background in physics and mathematics gives me a deep understanding of the science behind technology. This allows me to approach problems with analytical thinking and creative solutions.
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                                    <span className="text-white font-bold text-lg">2</span>
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold text-white mb-3">Practical Experience</h3>
                                    <p className="text-gray-300 leading-relaxed text-base">
                                        Hands-on experience in software engineering and data science means I can bridge theory with real-world applications, creating impactful solutions that actually work.
                                    </p>
                                </div>
                            </div>
                        </motion.div>

                        {/* Right Column */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.4 }}
                            className="space-y-6"
                        >
                            <div className="flex items-start space-x-4">
                                <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                                    <span className="text-white font-bold text-lg">3</span>
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold text-white mb-3">Discipline & Focus</h3>
                                    <p className="text-gray-300 leading-relaxed text-base">
                                        Balancing double degrees has taught me exceptional time management and the ability to handle complex projects without losing focus or quality.
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                                    <span className="text-white font-bold text-lg">4</span>
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold text-white mb-3">Innovation Mindset</h3>
                                    <p className="text-gray-300 leading-relaxed text-base">
                                        I'm not just about learning new tech — I'm passionate about applying knowledge practically to build solutions that bridge theory and real-world impact.
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </div>


                </div>
            </motion.section>
        </div>
    );
} 