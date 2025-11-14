import React from 'react';
import { motion } from 'framer-motion';

export default function JourneyTimeline({ steps = [] }) {
    if (!steps.length) {
        return null;
    }

    return (
        <div className="relative" aria-label="journey timeline">
            <div className="absolute left-4 top-0 hidden h-full w-0.5 bg-gradient-to-b from-green-400/60 via-green-400/10 to-transparent md:block" aria-hidden="true"></div>
            <div className="space-y-10">
                {steps.map((step, index) => (
                    <motion.div
                        key={step.title}
                        className="grid gap-4 rounded-3xl border border-white/10 bg-white/5 p-6 md:grid-cols-[auto_1fr] md:items-center"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 * index, duration: 0.6 }}
                        viewport={{ once: true, margin: '-120px' }}
                    >
                        <div className="flex items-center gap-4">
                            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-500/20 text-lg font-semibold text-green-300">
                                {String(index + 1).padStart(2, '0')}
                            </div>
                            <div>
                                <p className="text-xs uppercase tracking-[0.4em] text-green-300">{step.phase}</p>
                                <h3 className="text-lg font-semibold text-white">{step.title}</h3>
                            </div>
                        </div>
                        <div className="md:pl-8">
                            <p className="text-sm text-gray-300 leading-relaxed">{step.description}</p>
                            {step.highlights?.length ? (
                                <ul className="mt-4 space-y-2 text-sm text-gray-300">
                                    {step.highlights.map(item => (
                                        <li key={item} className="flex gap-3">
                                            <span className="mt-1 block h-1.5 w-1.5 rounded-full bg-green-400"></span>
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            ) : null}
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
