import React from 'react';
import { motion } from 'framer-motion';

const Education = () => {
    const education = [
        {
            id: 1,
            degree: 'Bachelor of Science in Computer Science',
            institution: 'University of Colombo School of Computing',
            period: '2023 - Present',
            gpa: '3.06 / 4.0',
            description: 'Studying core software engineering, algorithms, and systems while applying that knowledge through practical project work.',
            courses: ['React Development', 'Advanced Computer Architecture', 'Software Engineering', 'Databases', 'Data Structures and Algorithms'],
            achievements: [
                'Maintained consistent progress across technical coursework',
                'Performed strongly in hands-on development modules',
                'Applied academic learning through software-focused projects',
            ],
        },
    ];

    const onlineCourses = [
        {
            id: 1,
            title: 'HTML, CSS, and JavaScript for Web Developers',
            platform: 'Coursera',
            duration: 'Self-paced',
            completion: 'Completed',
            description: 'Strengthened front-end fundamentals across structure, styling, and browser-side scripting.',
        },
        {
            id: 2,
            title: 'Next.js Essential Training',
            platform: 'LinkedIn Learning',
            duration: 'Self-paced',
            completion: 'Completed',
            description: 'Expanded my understanding of modern React application structure and rendering strategies.',
        },
        {
            id: 3,
            title: 'Machine Learning with Python: Foundations',
            platform: 'LinkedIn Learning',
            duration: 'Self-paced',
            completion: 'Completed',
            description: 'Covered foundational machine learning concepts and the supporting Python workflow.',
        },
        {
            id: 4,
            title: 'Front End Development Libraries',
            platform: 'freeCodeCamp',
            duration: 'Self-paced',
            completion: 'Completed',
            description: 'Worked through front-end libraries and practical project exercises for modern UI development.',
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
                <span className="section-label section-label-centered">Education</span>
                <h1>Academic foundation and continuous learning.</h1>
                <p>
                    My education combines formal computer science study with practical learning through online courses and project work.
                </p>
            </motion.div>

            <section className="pb-10">
                <h2 className="mb-8 text-3xl font-semibold text-white">Formal education</h2>
                <div className="space-y-8">
                    {education.map((edu) => (
                        <motion.div
                            key={edu.id}
                            className="panel rounded-[1.75rem] p-8"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                                <div>
                                    <h3 className="text-2xl font-semibold text-white">{edu.degree}</h3>
                                    <p className="mt-2 text-base font-medium text-emerald-200">{edu.institution}</p>
                                    <p className="mt-1 text-sm text-slate-400">{edu.period}</p>
                                </div>
                                <span className="rounded-full border border-emerald-400/25 bg-emerald-400/10 px-4 py-2 text-sm font-medium text-emerald-200">
                                    GPA: {edu.gpa}
                                </span>
                            </div>

                            <p className="text-sm leading-7 text-slate-300">{edu.description}</p>

                            <div className="mt-8 grid gap-6 md:grid-cols-2">
                                <div>
                                    <h4 className="mb-3 text-base font-semibold text-white">Key courses</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {edu.courses.map((course) => (
                                            <span key={course} className="rounded-full border border-white/8 bg-white/4 px-3 py-1 text-sm text-slate-300">
                                                {course}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                                <div>
                                    <h4 className="mb-3 text-base font-semibold text-white">Highlights</h4>
                                    <ul className="space-y-2">
                                        {edu.achievements.map((achievement) => (
                                            <li key={achievement} className="flex gap-3 text-sm leading-7 text-slate-300">
                                                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-emerald-300"></span>
                                                <span>{achievement}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            <section className="section-divider pt-12">
                <h2 className="mb-8 text-3xl font-semibold text-white">Online courses</h2>
                <div className="space-y-6">
                    {onlineCourses.map((course) => (
                        <motion.div
                            key={course.id}
                            className="panel rounded-[1.5rem] p-6"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                                <div className="flex-1">
                                    <h3 className="text-xl font-semibold text-white">{course.title}</h3>
                                    <p className="mt-2 text-sm font-medium text-emerald-200">{course.platform}</p>
                                    <p className="mt-1 text-sm text-slate-400">{course.duration} - {course.completion}</p>
                                    <p className="mt-3 text-sm leading-7 text-slate-300">{course.description}</p>
                                </div>
                                <span className="rounded-full border border-emerald-400/25 bg-emerald-400/10 px-4 py-2 text-sm font-medium text-emerald-200">
                                    Completed
                                </span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            <section className="section-divider py-12">
                <div className="panel rounded-[1.75rem] p-8">
                    <h2 className="text-3xl font-semibold text-white">Learning mindset</h2>
                    <div className="mt-6 grid gap-8 md:grid-cols-2">
                        <div>
                            <h3 className="text-xl font-semibold text-white">Continuous improvement</h3>
                            <p className="mt-3 text-sm leading-7 text-slate-300">
                                I treat learning as part of the job. Staying current with tools, practices, and architecture helps me make better engineering decisions.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold text-white">Applied understanding</h3>
                            <p className="mt-3 text-sm leading-7 text-slate-300">
                                I learn best by building. Project work helps me turn theory into habits that improve code quality, usability, and delivery.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Education;
