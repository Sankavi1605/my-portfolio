import React from 'react';
import { motion } from 'framer-motion';

export default function StoryCard({ title, subtitle, description, quote, author, role, link }) {
    return (
        <motion.div
            className="panel flex h-full flex-col justify-between rounded-[1.75rem] p-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: '-100px' }}
        >
            <div className="space-y-4">
                <p className="text-xs uppercase tracking-[0.3em] text-emerald-200">{subtitle}</p>
                <h3 className="text-2xl font-semibold text-white">{title}</h3>
                {description && <p className="text-sm leading-7 text-slate-300">{description}</p>}
                {quote && (
                    <blockquote className="rounded-2xl border border-white/8 bg-black/20 p-4 text-sm leading-7 text-slate-200">
                        "{quote}"
                    </blockquote>
                )}
            </div>
            <div className="mt-6 flex items-center justify-between text-sm text-slate-400">
                <div>
                    <p className="font-medium text-white">{author}</p>
                    <p>{role}</p>
                </div>
                {link && (
                    <a
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-medium text-emerald-200 hover:text-white"
                    >
                        Explore
                    </a>
                )}
            </div>
        </motion.div>
    );
}
