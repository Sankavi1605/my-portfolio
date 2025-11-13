import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaBolt, FaSearch, FaSync, FaCheckCircle } from 'react-icons/fa';
import myImage from "../assets/me.jpg";
import ProjectCard from '../components/ProjectCard';
import { featuredProjectIds, projects } from '../data/projects';

export default function Home() {
  const skills = [
    'React', 'Next.js', 'TypeScript', 'Node.js', 'React Native', 'Flutter', 'Spring Boot', 'PostgreSQL', 'MongoDB', 'AWS', 'Prisma', 'Stripe'
  ];

  const featuredProjects = projects.filter(p => featuredProjectIds.includes(p.id));

  const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <div className="w-full relative">
      <section className="relative max-w-7xl mx-auto px-6 pt-8 pb-16 md:pt-12">
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.4 }} variants={fadeUp}>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 border border-green-700/40 text-green-300 text-xs mb-4">
              <span>Software Engineer</span>
              <span className="text-gray-500">&bull;</span>
              <span>Web &middot; Mobile &middot; Backend</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-green-200 to-green-500">
              Sankavi Thayaparan
            </h1>
            <p className="mt-4 text-lg md:text-xl text-gray-300 leading-relaxed max-w-2xl">
              I build fast, accessible products and visually polished interfaces. Recent work includes BusHub LK, TerraSafe, and Apex Finance.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link to="/projects" className="inline-flex items-center gap-2 rounded-lg bg-green-500 px-5 py-3 text-white font-semibold shadow-lg shadow-green-500/30 hover:bg-green-600 transition-colors btn-shine">
                View Projects
              </Link>
              <a href="/SankaviThayaparan_SE.pdf" target="_blank" rel="noopener noreferrer" download className="inline-flex items-center gap-2 rounded-lg bg-gray-800 px-5 py-3 text-gray-200 border border-gray-700 hover:border-green-500 hover:text-white transition-colors">
                Download CV
              </a>
            </div>
          </motion.div>
          <motion.div className="relative" initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
            <div className="relative mx-auto w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden border border-gray-800 shadow-2xl">
              <img src={myImage} alt="Portrait" className="w-full h-full object-cover" loading="lazy" />
              <div className="absolute inset-0 ring-1 ring-white/5" />
            </div>
            <div className="absolute -z-10 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[22rem] h-[22rem] rounded-full bg-green-500/10 blur-2xl" />
          </motion.div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="max-w-7xl mx-auto px-6 pb-10">
        <div className="flex items-end justify-between mb-6">
          <h2 className="text-2xl md:text-3xl font-bold text-white">Featured Case Studies</h2>
          <Link to="/projects" className="text-green-400 hover:text-green-300">See all &rarr;</Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map(p => (
            <ProjectCard
              key={p.id}
              title={p.title}
              subtitle={p.subtitle}
              status={p.status}
              description={p.description}
              highlights={p.highlights}
              image={p.image}
              tech={p.tech}
              link={p.link}
              liveUrl={p.liveUrl}
              slug={p.slug}
              keyMetric={p.keyMetric}
              tags={p.tags}
            />
          ))}
        </div>
      </section>

      {/* Skills */}
      <section className="max-w-7xl mx-auto px-6 py-10">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Skills & Tools</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
          {skills.map((s, i) => (
            <motion.span
              key={s}
              className="px-3 py-2 rounded-lg border border-gray-800 bg-gray-900/60 text-gray-200 text-sm text-center hover:border-green-600 hover:text-white transition-colors"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.02 }}
            >
              {s}
            </motion.span>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="max-w-7xl mx-auto px-6 py-10">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">How I Work</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[{
            icon: <FaSearch className="text-green-400" />, title: 'Discover', text: 'Clarify problem, constraints, and success metrics.'
          }, {
            icon: <FaBolt className="text-green-400" />, title: 'Build', text: 'Ship in vertical slices with clean, testable code.'
          }, {
            icon: <FaCheckCircle className="text-green-400" />, title: 'Validate', text: 'Measure performance, accessibility, and UX fit.'
          }, {
            icon: <FaSync className="text-green-400" />, title: 'Iterate', text: 'Refine based on feedback and data.'
          }].map(step => (
            <div key={step.title} className="p-5 rounded-xl border border-gray-800 bg-gray-900/60 hover:border-green-600 transition-colors">
              <div className="mb-3 text-xl">{step.icon}</div>
              <h3 className="text-white font-semibold mb-1">{step.title}</h3>
              <p className="text-gray-300 text-sm">{step.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-6 py-14">
        <div className="rounded-2xl border border-green-700/40 bg-gradient-to-br from-green-600/10 via-gray-900 to-gray-900 p-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white">Let's build something great</h2>
          <p className="mt-2 text-gray-300">Open to software engineering roles and impactful collaborations.</p>
          <div className="mt-6 flex justify-center gap-4">
            <Link to="/projects" className="inline-flex items-center gap-2 rounded-lg bg-green-500 px-5 py-3 text-white font-semibold hover:bg-green-600 transition-colors">View Case Studies</Link>
            <Link to="/contact" className="inline-flex items-center gap-2 rounded-lg bg-gray-800 px-5 py-3 text-gray-200 border border-gray-700 hover:border-green-500 hover:text-white transition-colors">Contact</Link>
          </div>
        </div>
      </section>

    </div>
  );
}

