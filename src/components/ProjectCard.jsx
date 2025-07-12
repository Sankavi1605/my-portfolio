import React, { useEffect, useRef } from 'react';

export default function ProjectCard({ title, image, tech, description, link }) {
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
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-green-400 transition-colors duration-300 relative">
                    {title}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-400 group-hover:w-full transition-all duration-500 ease-out"></span>
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-4 group-hover:text-gray-300 transition-colors duration-300">
                    {description}
                </p>

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

                <div className="flex items-center justify-between mt-auto">
                    <a
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-green-400 text-sm font-medium hover:text-green-300 transition-all duration-300 flex items-center gap-2 group/link relative overflow-hidden"
                        onClick={(e) => {
                            e.preventDefault();
                            // Smooth scroll to top before opening link
                            window.scrollTo({
                                top: 0,
                                behavior: 'smooth'
                            });
                            setTimeout(() => {
                                window.open(link, '_blank');
                            }, 300);
                        }}
                    >
                        <span className="relative z-10">View Project</span>
                        <svg className="w-4 h-4 group-hover/link:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                        <div className="absolute inset-0 bg-green-400/20 transform scale-x-0 group-hover/link:scale-x-100 transition-transform duration-300 origin-left"></div>
                    </a>
                    <div className="text-gray-500 text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        Click to explore
                    </div>
                </div>
            </div>
        </div>
    );
}
