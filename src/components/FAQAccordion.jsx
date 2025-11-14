import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function FAQAccordion({ items = [] }) {
    const [activeIndex, setActiveIndex] = useState(0);

    const toggleIndex = (index) => {
        setActiveIndex(prev => (prev === index ? -1 : index));
    };

    return (
        <div className="space-y-4" role="list">
            {items.map((item, index) => {
                const isActive = index === activeIndex;
                return (
                    <div key={item.question} role="listitem" className="rounded-2xl border border-white/10 bg-white/5">
                        <button
                            className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                            onClick={() => toggleIndex(index)}
                            aria-expanded={isActive}
                        >
                            <div>
                                <p className="text-sm uppercase tracking-[0.3em] text-green-300">{item.tag}</p>
                                <h3 className="text-lg font-medium text-white">{item.question}</h3>
                            </div>
                            <motion.span
                                initial={false}
                                animate={{ rotate: isActive ? 45 : 0 }}
                                className="text-green-300 text-2xl"
                            >
                                +
                            </motion.span>
                        </button>
                        <AnimatePresence initial={false}>
                            {isActive && (
                                <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: 'auto', opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <p className="px-5 pb-5 text-sm text-gray-300 leading-relaxed">{item.answer}</p>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                );
            })}
        </div>
    );
}
