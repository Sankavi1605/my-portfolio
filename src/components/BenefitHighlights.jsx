import React from 'react';
import { motion } from 'framer-motion';

export default function BenefitHighlights({ benefits = [] }) {
    if (!benefits.length) {
        return null;
    }

    return (
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3" role="list">
            {benefits.map((benefit, index) => (
                <motion.div
                    key={benefit.title}
                    className="relative rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 via-white/[0.04] to-transparent p-6 backdrop-blur"
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.08 * index, duration: 0.45 }}
                    viewport={{ once: true, margin: '-100px' }}
                    role="listitem"
                >
                    <span className="mb-4 inline-flex items-center rounded-full bg-green-500/15 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-green-300">
                        {benefit.tag}
                    </span>
                    <h3 className="text-xl font-semibold text-white">{benefit.title}</h3>
                    <p className="mt-3 text-sm text-gray-300 leading-relaxed">{benefit.description}</p>
                </motion.div>
            ))}
        </div>
    );
}
