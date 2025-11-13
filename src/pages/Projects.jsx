import React, { useMemo, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import ProjectCard from '../components/ProjectCard';
import { projects } from '../data/projects';

const Projects = () => {
    const [filter, setFilter] = useState('all');
    const [query, setQuery] = useState('');
    const [sort, setSort] = useState('newest');
    const { scrollY } = useScroll();
    const y = useTransform(scrollY, [0, 1000], [0, -100]);

    const categories = [
        { id: 'all', label: 'All Projects' },
        { id: 'fullstack', label: 'Full Stack' },
        { id: 'web', label: 'Web' },
        { id: 'mobile', label: 'Mobile' },
        { id: 'backend', label: 'Backend' },
    ];

    const filteredProjects = useMemo(() => {
        let list = projects;
        // category filter
        if (filter !== 'all') {
            list = list.filter(project => Array.isArray(project.categories) ? project.categories.includes(filter) : project.categories === filter);
        }
        // search query
        const q = query.trim().toLowerCase();
        if (q) {
            list = list.filter(p => {
                const hay = [p.title, p.subtitle, p.description, ...(p.tech||[]), ...(p.tags||[])].join(' ').toLowerCase();
                return hay.includes(q);
            });
        }
        // sort
        if (sort === 'a-z') {
            list = [...list].sort((a,b) => a.title.localeCompare(b.title));
        } else if (sort === 'z-a') {
            list = [...list].sort((a,b) => b.title.localeCompare(a.title));
        } else if (sort === 'newest') {
            list = [...list].sort((a,b) => (b.id||0) - (a.id||0));
        } else if (sort === 'oldest') {
            list = [...list].sort((a,b) => (a.id||0) - (b.id||0));
        }
        return list;
    }, [filter, query, sort]);

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
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
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

            {/* Controls: Search + Sort + Filter Buttons */}
            <div className="sticky top-16 z-10 glass rounded-xl border border-gray-800/80 mb-10">
              <div className="flex flex-col md:flex-row md:items-center gap-4 p-4">
                <input
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search by title, tech, or summary"
                  className="flex-1 px-4 py-3 rounded-lg bg-gray-800 text-gray-200 placeholder-gray-500 border border-gray-700 focus:border-green-500 focus:outline-none"
                  aria-label="Search projects"
                />
                <select
                  value={sort}
                  onChange={(e) => setSort(e.target.value)}
                  className="px-4 py-3 rounded-lg bg-gray-800 text-gray-200 border border-gray-700 focus:border-green-500 focus:outline-none"
                  aria-label="Sort projects"
                >
                  <option value="newest">Newest</option>
                  <option value="oldest">Oldest</option>
                  <option value="a-z">A–Z</option>
                  <option value="z-a">Z–A</option>
                </select>
              </div>
              <motion.div
                className="flex flex-wrap justify-center gap-3 p-4 pt-0"
                variants={filterVariants}
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.2 }}
              >
                {categories.map((category, index) => (
                  <motion.button
                    key={category.id}
                    onClick={() => handleFilterChange(category.id)}
                    className={`px-5 py-2 rounded-full font-medium transition-all duration-300 transform hover:scale-105 ${filter === category.id
                      ? 'bg-green-500 text-white shadow-lg shadow-green-500/25'
                      : 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white border border-gray-700 hover:border-green-500'
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + index * 0.05 }}
                  >
                    {category.label}
                  </motion.button>
                ))}
                {(filter !== 'all' || query || sort !== 'newest') && (
                  <button
                    onClick={() => { setFilter('all'); setQuery(''); setSort('newest'); }}
                    className="px-4 py-2 rounded-full bg-gray-700 text-gray-200 border border-gray-600 hover:bg-gray-600 transition-colors"
                  >
                    Clear
                  </button>
                )}
              </motion.div>
            </div>

            {/* Projects Grid */}
            <motion.div
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-fr"
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
                        className="h-full flex"
                    >
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
                            keyMetric={project.keyMetric}
                            tags={project.tags}
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
