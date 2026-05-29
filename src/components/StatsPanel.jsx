import React from 'react';
import { motion } from 'framer-motion';

export default function StatsPanel({ stats = [] }) {
    if (!stats.length) {
        return null;
    }

    return (
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3" role="list">
            {stats.map((stat, index) => (
                <motion.div
                    key={stat.label}
                    className="panel rounded-[1.75rem] px-6 py-6"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * index, duration: 0.5 }}
                    viewport={{ once: true, margin: '-100px' }}
                    role="listitem"
                >
                    <p className="text-3xl font-semibold text-white">{stat.value}</p>
                    <p className="mt-3 text-sm uppercase tracking-[0.3em] text-slate-400">{stat.label}</p>
                    {stat.description && (
                        <p className="mt-3 text-sm leading-7 text-slate-300">{stat.description}</p>
                    )}
                </motion.div>
            ))}
        </div>
    );
}
