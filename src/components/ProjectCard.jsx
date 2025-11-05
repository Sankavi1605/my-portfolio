import React, { useEffect, useRef } from 'react';

export default function ProjectCard({ title, subtitle, status, image, tech, description, highlights = [], link, liveUrl }) {
    const cardRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('animate-fade-in');
                    }
                });
            },
            {
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px'
            }
        );

        if (cardRef.current) {
            observer.observe(cardRef.current);
        }

        return () => {
            if (cardRef.current) {
                observer.unobserve(cardRef.current);
            }
        };
    }, []);

    return (
        <div
            ref={cardRef}
            className="bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 border border-gray-700 hover:border-green-500 group opacity-0 transform translate-y-8 animate-fade-in h-full flex flex-col"
            style={{
                scrollBehavior: 'smooth'
            }}
        >
            <div className="relative overflow-hidden">
                <img
                    src={image}
                    alt={title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                {/* REMOVED LIVE DEMO FUNCTIONALITY ****FOR NOW***** */}
                {/* <div className="absolute top-4 right-4 bg-green-500/90 backdrop-blur-sm px-3 py-1 rounded-full text-white text-xs font-medium transform translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out">
                    Live Demo
                </div> */}
            </div>

            <div className="p-6 transform group-hover:translate-y-[-4px] transition-transform duration-500 ease-out flex-1 flex flex-col">
                <div className="flex items-center gap-2 mb-3">
                    {status && (
                        <span className="px-3 py-1 rounded-full text-xs font-semibold bg-green-500/20 text-green-300 border border-green-500/40">
                            {status}
                        </span>
                    )}
                    {subtitle && (
                        <span className="text-xs uppercase tracking-[0.2em] text-gray-400">
                            {subtitle}
                        </span>
                    )}
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-green-400 transition-colors duration-300 relative">
                    {title}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-400 group-hover:w-full transition-all duration-500 ease-out"></span>
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-4 group-hover:text-gray-300 transition-colors duration-300">
                    {description}
                </p>

                {highlights.length > 0 && (
                    <ul className="space-y-2 text-gray-300 text-sm mb-5">
                        {highlights.map((point, index) => (
                            <li key={index} className="flex items-start gap-2">
                                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-green-400"></span>
                                <span>{point}</span>
                            </li>
                        ))}
                    </ul>
                )}

                <div className="flex flex-wrap gap-2 mb-4">
                    {tech.map((t, idx) => (
                        <span
                            key={idx}
                            className="bg-green-600 text-white px-3 py-1 rounded-full text-xs font-medium hover:bg-green-500 transition-all duration-300 hover:scale-105 hover:shadow-lg transform hover:-translate-y-0.5"
                            style={{
                                animationDelay: `${idx * 100}ms`
                            }}
                        >
                            {t}
                        </span>
                    ))}
                </div>

                <div className="flex flex-wrap items-center gap-3 mt-auto">
                    {liveUrl && (
                        <a
                            href={liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 rounded-lg bg-green-500/90 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-green-500/30 transition-transform duration-300 hover:bg-green-500 hover:-translate-y-0.5"
                        >
                            <span>View Live</span>
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M12 5l7 7-7 7" />
                            </svg>
                        </a>
                    )}
                    {link && (
                        <a
                            href={link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 border-b border-transparent pb-0.5 text-sm font-medium text-green-400 transition-all duration-300 hover:border-green-400 hover:text-green-300"
                        >
                            {liveUrl ? 'View Code' : 'View Project'}
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
}
