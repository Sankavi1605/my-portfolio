import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

export default function ProjectCard({ title, subtitle, status, image, tech, description, highlights = [], link, liveUrl, slug }) {
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
            className="panel animate-fade-in group flex h-full flex-col overflow-hidden rounded-[1.75rem] shadow-lg transition-all duration-500 hover:-translate-y-1 hover:border-[#0a66c2]/30"
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
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a66c2]/20 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>
            </div>

            <div className="flex flex-1 flex-col p-6 transition-transform duration-500 ease-out group-hover:translate-y-[-2px]">
                <div className="flex items-center gap-2 mb-3">
                    {status && (
                        <span className="rounded-full border border-[#8eb4da] bg-[#edf3f8] px-3 py-1 text-xs font-semibold text-[#0a66c2]">
                            {status}
                        </span>
                    )}
                    {subtitle && (
                        <span className="text-xs uppercase tracking-[0.2em] text-[#6b7785]">
                            {subtitle}
                        </span>
                    )}
                </div>
                <h3 className="relative mb-3 text-xl font-bold text-[#191919] transition-colors duration-300 group-hover:text-[#0a66c2]">
                    {title}
                    <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-[#0a66c2] transition-all duration-500 ease-out group-hover:w-full"></span>
                </h3>
                <p className="mb-4 text-sm leading-7 text-[#5f6b7a] transition-colors duration-300 group-hover:text-[#425466]">
                    {description}
                </p>

                {highlights.length > 0 && (
                    <ul className="mb-5 space-y-2 text-sm text-[#425466]">
                        {highlights.map((point, index) => (
                            <li key={index} className="flex items-start gap-2">
                                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#0a66c2]"></span>
                                <span>{point}</span>
                            </li>
                        ))}
                    </ul>
                )}

                <div className="flex flex-wrap gap-2 mb-4">
                    {tech.map((t, idx) => (
                        <span
                            key={idx}
                            className="rounded-full border border-[#d9e0e6] bg-[#f8fafc] px-3 py-1 text-xs font-medium text-[#425466] transition-all duration-300 hover:border-[#8eb4da] hover:text-[#0a66c2]"
                            style={{
                                animationDelay: `${idx * 100}ms`
                            }}
                        >
                            {t}
                        </span>
                    ))}
                </div>

                <div className="flex flex-wrap items-center gap-3 mt-auto">
                    {slug && (
                        <Link
                            to={`/projects/${slug}`}
                            className="inline-flex items-center gap-2 rounded-xl border border-[#d9e0e6] px-4 py-2 text-sm font-medium text-[#425466] transition-colors duration-300 hover:border-[#0a66c2] hover:text-[#0a66c2]"
                        >
                            View Details
                        </Link>
                    )}
                    {liveUrl && (
                        <a
                            href={liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 rounded-xl bg-[#0a66c2] px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-[#0a66c2]/15 transition-transform duration-300 hover:-translate-y-0.5 hover:bg-[#004182]"
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
                            className="inline-flex items-center gap-2 border-b border-transparent pb-0.5 text-sm font-medium text-[#0a66c2] transition-all duration-300 hover:border-[#0a66c2] hover:text-[#004182]"
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
