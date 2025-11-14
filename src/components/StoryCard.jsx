import React from 'react';
import { motion } from 'framer-motion';

export default function StoryCard({ title, subtitle, description, quote, author, role, link }) {
    return (
        <motion.div
            className="flex h-full flex-col justify-between rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: '-100px' }}
        >
            <div className="space-y-4">
                <p className="text-xs uppercase tracking-[0.3em] text-green-300">{subtitle}</p>
                <h3 className="text-2xl font-semibold text-white">{title}</h3>
                {description && <p className="text-sm text-gray-300 leading-relaxed">{description}</p>}
                {quote && (
                    <blockquote className="rounded-2xl border border-white/10 bg-black/30 p-4 text-sm text-gray-200">
                        “{quote}”
                    </blockquote>
                )}
            </div>
            <div className="mt-6 flex items-center justify-between text-sm text-gray-400">
                <div>
                    <p className="font-medium text-white">{author}</p>
                    <p>{role}</p>
                </div>
                {link && (
                    <a
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-green-300 hover:text-white font-medium"
                    >
                        Explore
                    </a>
                )}
            </div>
        </motion.div>
    );
}
