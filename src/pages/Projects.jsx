import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ProjectCard from '../components/ProjectCard';
import { projects } from '../data/projects';

const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'fullstack', label: 'Full Stack' },
    { id: 'web', label: 'Web' },
    { id: 'mobile', label: 'Mobile' },
    { id: 'backend', label: 'Backend' },
];

const Projects = () => {
    const [filter, setFilter] = useState('all');

    const filteredProjects = filter === 'all'
        ? projects
        : projects.filter(project => {
            if (Array.isArray(project.categories)) {
                return project.categories.includes(filter);
            }
            return project.categories === filter;
        });

    return (
        <div className="page-shell">
            <motion.div
                className="page-hero"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                <span className="section-label section-label-centered">Projects</span>
                <h1>Selected work across web, backend, and mobile development.</h1>
                <p>
                    These case studies reflect the types of products I like to build: useful, technically grounded, and designed around real user needs.
                </p>
            </motion.div>

            <motion.div
                className="mb-12 flex flex-wrap justify-center gap-3"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.1 }}
            >
                {categories.map((category) => (
                    <button
                        key={category.id}
                        onClick={() => setFilter(category.id)}
                        className={`rounded-full px-5 py-3 text-sm font-medium transition-all duration-200 ${
                            filter === category.id
                                ? 'bg-[#0a66c2] text-white shadow-[0_8px_18px_rgba(10,102,194,0.18)]'
                                : 'border border-[#d9e0e6] bg-white text-[#5f6b7a] hover:border-[#0a66c2] hover:text-[#0a66c2]'
                        }`}
                    >
                        {category.label}
                    </button>
                ))}
            </motion.div>

            <motion.div
                className="grid grid-cols-1 gap-8 pb-8 md:grid-cols-2 lg:grid-cols-3"
                key={filter}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
            >
                {filteredProjects.map((project) => (
                    <div key={project.id} className="flex h-full">
                        <ProjectCard
                            title={project.title}
                            subtitle={project.subtitle}
                            status={project.status}
                            description={project.description}
                            highlights={project.highlights}
                            image={project.image}
                            tech={project.tech}
                            link={project.link}
                            liveUrl={project.liveUrl}
                            slug={project.slug}
                        />
                    </div>
                ))}
            </motion.div>

            {filteredProjects.length === 0 && (
                <div className="py-12 text-center text-slate-400">
                    No projects match this category yet.
                </div>
            )}

            <div className="section-shell px-0">
                <div className="panel mx-auto max-w-4xl rounded-[2rem] px-8 py-12 text-center">
                    <h2 className="text-3xl font-semibold text-[#191919]">Interested in building something together?</h2>
                    <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-[#5f6b7a]">
                        If your team needs a developer who can contribute across product thinking, implementation, and delivery, I would be glad to talk.
                    </p>
                    <a href="/contact" className="btn-primary mt-8">
                        Get In Touch
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Projects;
