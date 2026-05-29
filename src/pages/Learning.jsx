import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaRocket, FaGraduationCap, FaLightbulb, FaLaptopCode } from 'react-icons/fa';

export default function Learning() {
    const learningTopics = [
        {
            title: 'Full-Stack Web Development',
            description: 'Strengthening end-to-end product development across frontend, backend, and deployment.',
            progress: 80,
            icon: <FaCode className="text-3xl" />,
            skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js', 'Express.js', 'MongoDB'],
        },
        {
            title: 'Advanced React',
            description: 'Improving component architecture, state management, and performance decisions in modern React apps.',
            progress: 65,
            icon: <FaCode className="text-3xl" />,
            skills: ['React Hooks', 'Context API', 'Performance', 'Testing'],
        },
        {
            title: 'Mobile Development',
            description: 'Building stronger mobile product skills through cross-platform development workflows.',
            progress: 60,
            icon: <FaLaptopCode className="text-3xl" />,
            skills: ['Flutter', 'React Native', 'Mobile UI', 'APIs'],
        },
    ];

    const goals = [
        {
            title: 'Strengthen JavaScript depth',
            target: '2026',
            status: 'In Progress',
            icon: <FaGraduationCap />,
        },
        {
            title: 'Develop an applied AI project',
            target: '2026',
            status: 'Planned',
            icon: <FaRocket />,
        },
    ];

    return (
        <div className="page-shell">
            <motion.div
                className="page-hero"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                <span className="section-label section-label-centered">Learning</span>
                <h1>What I am actively improving right now.</h1>
                <p>
                    I treat learning as part of engineering practice. These are the areas I am currently developing to become a stronger product-minded developer.
                </p>
            </motion.div>

            <motion.section
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="pb-10"
            >
                <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
                    {learningTopics.map((topic) => (
                        <div key={topic.title} className="panel rounded-[1.75rem] p-8">
                            <div className="flex items-center gap-4">
                                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-400/10 text-emerald-200">
                                    {topic.icon}
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold text-white">{topic.title}</h3>
                                    <p className="text-sm text-slate-400">{topic.description}</p>
                                </div>
                            </div>

                            <div className="mt-6">
                                <div className="mb-2 flex items-center justify-between text-sm">
                                    <span className="text-slate-400">Progress</span>
                                    <span className="font-semibold text-emerald-200">{topic.progress}%</span>
                                </div>
                                <div className="h-2 rounded-full bg-white/8">
                                    <motion.div
                                        className="h-2 rounded-full bg-emerald-400"
                                        initial={{ width: 0 }}
                                        animate={{ width: `${topic.progress}%` }}
                                        transition={{ duration: 0.8 }}
                                    />
                                </div>
                            </div>

                            <div className="mt-6 flex flex-wrap gap-2">
                                {topic.skills.map((skill) => (
                                    <span key={skill} className="rounded-full border border-white/8 bg-white/4 px-3 py-1 text-xs text-slate-300">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </motion.section>

            <section className="section-divider py-12">
                <h2 className="mb-8 text-center text-3xl font-semibold text-white">Current learning goals</h2>
                <div className="grid gap-6 md:grid-cols-2">
                    {goals.map((goal) => (
                        <div key={goal.title} className="panel rounded-[1.5rem] p-6">
                            <div className="flex items-start gap-4">
                                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-400/10 text-emerald-200">
                                    {goal.icon}
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-lg font-semibold text-white">{goal.title}</h3>
                                    <p className="mt-1 text-sm text-slate-400">Target: {goal.target}</p>
                                </div>
                                <span className="rounded-full border border-emerald-400/25 bg-emerald-400/10 px-3 py-1 text-xs font-medium text-emerald-200">
                                    {goal.status}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <section className="section-divider py-12">
                <div className="panel rounded-[1.75rem] p-8">
                    <div className="text-center">
                        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-400/10 text-emerald-200">
                            <FaLightbulb className="text-3xl" />
                        </div>
                        <h2 className="mt-4 text-3xl font-semibold text-white">How I approach growth</h2>
                    </div>

                    <div className="mt-8 grid gap-8 md:grid-cols-2">
                        <div>
                            <h3 className="text-xl font-semibold text-white">Build around fundamentals</h3>
                            <p className="mt-3 text-sm leading-7 text-slate-300">
                                I focus on improving the fundamentals behind good software: clear problem framing, strong JavaScript and React habits, and better engineering judgment.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold text-white">Learn through execution</h3>
                            <p className="mt-3 text-sm leading-7 text-slate-300">
                                New concepts become valuable when they show up in real code. I try to turn every learning goal into something I can apply through a project or feature.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
