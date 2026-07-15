import imgCipherLux from "../assets/cipherlux.jpg";
import imgBusHub from "../assets/bushublk_new.jpg";
import imgAgroMart from "../assets/agromart.jpg";
import imgApex from "../assets/apex.jpeg";
import imgSameepa from "../assets/sameepa.jpg";
import imgSecureLogin from "../assets/login.jpg";
import imgTerraSafe from "../assets/terrasafe.jpg";
import imgAlphintra3D from "../assets/alphintra_3d.png";
import imgAlphintraCorp from "../assets/alphintra_corporate.png";

export const projects = [
    {
        id: 8,
        slug: "alphintra-3d-experience",
        title: "Alphintra Interactive 3D Brand Experience",
        subtitle: "Immersive WebGL-based 3D web experience",
        status: "2026",
        badge: "3D Web",
        duration: "Completed",
        region: "Global",
        description:
            "Engineered an immersive WebGL-based 3D web experience using Three.js and JavaScript. Developed custom parallax navigation, viewport transitions, and interactive visual effects.",
        highlights: [
            "Implemented rendering optimizations for desktop and mobile devices.",
            "Built touch, swipe, and scroll navigation systems for improved user interaction.",
        ],
        tech: ["Three.js", "JavaScript", "WebGL", "HTML5", "CSS3"],
        link: "https://github.com/Sankavi1605",
        liveUrl: "https://alphintra.com",
        programFocus: "Delivering high-performance, interactive 3D web experiences.",
        categories: ["web", "3d"],
        image: imgAlphintra3D,
    },
    {
        id: 9,
        slug: "alphintra-corporate-website",
        title: "Alphintra Corporate Website & AI Assistant",
        subtitle: "Responsive corporate website with AI Chatbot",
        status: "2026",
        badge: "Corporate Track",
        duration: "Completed",
        region: "Global",
        description:
            "Developed a responsive corporate website using Django, Python, JavaScript, HTML5, and CSS3. Built a custom full-screen slideshow with touch, keyboard, and scroll navigation.",
        highlights: [
            "Designed modern responsive UI components with a clean dark-themed interface.",
            "Integrated a FastAPI Retrieval-Augmented Generation chatbot hosted on Google Cloud Run.",
            "Implemented secure proxy routing and session management for reliable API communication.",
        ],
        tech: ["Django", "Python", "JavaScript", "FastAPI", "Google Cloud Run", "HTML5", "CSS3"],
        link: "https://github.com/Sankavi1605",
        liveUrl: "https://welcome-alphintra-kappa.vercel.app/",
        programFocus: "Blending modern web architecture with AI integrations.",
        categories: ["web", "fullstack", "ai"],
        image: imgAlphintraCorp,
    },
    {
        id: 7,
        slug: "cipherlux-crypto-exchange",
        title: "CipherLux",
        subtitle: "Real-Time Trading Platform",
        status: "2025 - Present",
        badge: "Fintech Track",
        duration: "Ongoing",
        region: "Remote",
        description:
            "Developed frontend and full-stack features using Next.js, React.js, TypeScript, and REST APIs. Built reusable UI components and responsive trading dashboard layouts.",
        highlights: [
            "Integrated backend services and optimized frontend state management.",
            "Improved application performance, usability, and user experience across devices.",
        ],
        tech: ["Next.js", "React.js", "TypeScript", "REST APIs"],
        link: "",
        liveUrl: "https://app.cipherlux.com/",
        programFocus: "Building the future of crypto trading with speed, security, and intelligence.",
        categories: ["web", "fullstack"],
        image: imgCipherLux,
    },
    {
        id: 1,
        slug: "bushub-lk",
        title: "BusHub LK",
        subtitle: "Transport Management Platform",
        status: "2025 Launch",
        badge: "Flagship Mobility Track",
        duration: "12-month build",
        region: "Sri Lanka - Remote",
        description:
            "Developed responsive web and mobile applications using React and React Native. Integrated APIs for booking management, authentication, and live tracking.",
        highlights: [
            "Worked with MongoDB-backed services and database-driven features.",
            "Improved accessibility and usability across multiple screen sizes.",
        ],
        tech: ["React", "React Native", "MongoDB", "REST APIs"],
        link: "https://github.com/MurshidAkram/BusHubLK",
        liveUrl: "https://bus-hub-lk.vercel.app/",
        programFocus: "Reimagining public transport through digital operations and passenger tooling.",
        categories: ["web", "mobile", "fullstack"],
        image: imgBusHub,
    },
    {
        id: 3,
        slug: "secure-login-authorization-api",
        title: "Secure Login & Authorization API",
        subtitle: "Backend Security Services",
        status: "2025",
        badge: "Security Platform Track",
        duration: "6-week build",
        region: "Global",
        description:
            "Developed secure JWT-based authentication and authorization services. Built RESTful APIs and implemented user credential validation.",
        highlights: [
            "Integrated relational databases and tested API endpoints using Postman.",
        ],
        tech: ["Java", "Spring Boot", "JWT", "REST API", "PostgreSQL", "Postman"],
        link: "https://github.com/Sankavi1605/Loginpage_springboot",
        programFocus: "Building trust into modern application backends.",
        categories: ["backend", "fullstack"],
        image: imgSecureLogin,
    },
];

export const featuredProjectIds = [8, 9, 7, 1, 3];
