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
                    className="panel relative rounded-[1.75rem] p-6"
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.08 * index, duration: 0.45 }}
                    viewport={{ once: true, margin: '-100px' }}
                    role="listitem"
                >
                    <span className="mb-4 inline-flex items-center rounded-full bg-emerald-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-emerald-200">
                        {benefit.tag}
                    </span>
                    <h3 className="text-xl font-semibold text-white">{benefit.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-slate-300">{benefit.description}</p>
                </motion.div>
            ))}
        </div>
    );
}
