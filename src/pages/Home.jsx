import { motion } from 'framer-motion';
import React from 'react';
export default function Home() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center space-y-6"
        >
            <h1 className="text-4xl md:text-6xl font-bold text-white">Hi, I'm Your Name</h1>
            <p className="text-xl md:text-2xl text-green-400">Software Engineer</p>
            <p className="text-gray-400 max-w-xl mx-auto">Building modern, scalable, and impactful digital experiences.</p>
        </motion.div>
    );
}
