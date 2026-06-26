import imgCipherLux from "../assets/cipherlux.jpg";
import imgBusHub from "../assets/private_buses_in_sri_lanka.jpg";
import imgAgroMart from "../assets/agromart.jpg";
import imgApex from "../assets/apex.jpeg";
import imgSameepa from "../assets/sameepa.jpg";
import imgSecureLogin from "../assets/login.jpg";
import imgTerraSafe from "../assets/terrasafe.jpg";

export const projects = [
    {
        id: 7,
        slug: "cipherlux-crypto-exchange",
        title: "CipherLux",
        subtitle: "Professional Crypto Exchange Platform",
        status: "2025 - Live",
        badge: "Fintech Track",
        duration: "Ongoing",
        region: "Remote",
        description:
            "Full-featured cryptocurrency exchange platform for trading Bitcoin, Ethereum, and 350+ digital assets with a fast matching engine, real-time market data, and AI-powered trading workflows.",
        highlights: [
            "Built a professional-grade exchange UI with real-time price feeds, order books, and trading pairs.",
            "Implemented secure authentication, portfolio tracking, and multi-asset wallet management.",
            "Integrated AI-driven trading features with automated strategy execution and market analysis.",
            "Designed for scalability with modern cloud infrastructure and low-latency architecture.",
        ],
        tech: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Node.js", "PostgreSQL", "Redis", "WebSocket", "REST API", "AI/ML"],
        link: "",
        liveUrl: "https://app.cipherlux.com/",
        programFocus: "Building the future of crypto trading with speed, security, and intelligence.",
        categories: ["web", "fullstack", "ai"],
        image: imgCipherLux,
    },
    {
        id: 1,
        slug: "bushub-lk",
        title: "BusHub LK",
        subtitle: "Full-Stack Public Transport Management System",
        status: "2025 Launch",
        badge: "Flagship Mobility Track",
        duration: "12-month build",
        region: "Sri Lanka - Remote",
        description:
            "Dual-platform transport solution for improving operations visibility, route access, and passenger support within the Sri Lanka Transport Board context.",
        highlights: [
            "Replaced paper-heavy processes with a web-based admin dashboard and a React Native passenger app.",
            "Delivered live fleet monitoring, route lookups, and fare estimation backed by scalable AWS-hosted APIs.",
            "Deployed to production with observability and modern CI workflows.",
        ],
        tech: ["Node.js", "React.js", "React Native", "PostgreSQL", "AWS", "Git/GitHub"],
        link: "https://github.com/MurshidAkram/BusHubLK",
        liveUrl: "https://bus-hub-lk.vercel.app/",
        programFocus: "Reimagining public transport through digital operations and passenger tooling.",
        categories: ["web", "mobile", "fullstack"],
        image: imgBusHub,
    },
    {
        id: 2,
        slug: "apex-finance",
        title: "Apex Finance",
        subtitle: "Full-Stack Personal Finance Dashboard",
        status: "2025",
        badge: "Financial Intelligence Track",
        duration: "10-week sprint",
        region: "Remote-first",
        description:
            "Secure personal finance dashboard for tracking spending, visualising trends, and managing financial activity with a polished interface.",
        highlights: [
            "Built a responsive Next.js front end with Framer Motion and Recharts-based insights.",
            "Implemented API routes with Prisma ORM and NextAuth.js for protected, role-aware access.",
        ],
        tech: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Prisma", "NextAuth.js", "SQLite", "Framer Motion", "Recharts"],
        link: "https://github.com/Sankavi1605/Apex-Finance",
        programFocus: "Making personal finance tracking clearer and more approachable.",
        categories: ["web", "fullstack"],
        image: imgApex,
    },
    {
        id: 3,
        slug: "secure-login-authorization-api",
        title: "Secure Login and Authorization API",
        subtitle: "Backend Security Services",
        status: "2025",
        badge: "Security Platform Track",
        duration: "6-week build",
        region: "Global",
        description:
            "Stateless authentication and authorization service hardened with Spring Security and JWT-based access control.",
        highlights: [
            "Implemented BCrypt password hashing with layered RBAC-protected endpoints.",
            "Packaged integration tests using H2 and Maven-driven workflows.",
        ],
        tech: ["Java", "Spring Boot", "Spring Security", "JWT", "Maven", "H2", "REST"],
        link: "https://github.com/Sankavi1605/Loginpage_springboot",
        programFocus: "Building trust into modern application backends.",
        categories: ["backend", "fullstack"],
        image: imgSecureLogin,
    },
    {
        id: 4,
        slug: "terrasafe-safe-place-finder",
        title: "TerraSafe",
        subtitle: "Mobile Safety Application",
        status: "2025",
        badge: "Safety and Resilience",
        duration: "8-week iteration",
        region: "Global",
        description:
            "Location-aware Flutter application for surfacing nearby safe places and contextual assistance during urgent situations.",
        highlights: [
            "Integrated Google Maps and Places APIs for live discovery with custom markers and detailed location views.",
            "Added chatbot-supported guidance connected to geolocation workflows.",
        ],
        tech: ["Flutter", "Dart", "Google Maps API", "Google Places API", "Dio", "Geolocator"],
        link: "https://github.com/Sankavi1605/terrasafe",
        programFocus: "Supporting safer decisions during moments that matter.",
        categories: ["mobile"],
        image: imgTerraSafe,
    },
    {
        id: 5,
        slug: "sameepa",
        title: "Sameepa",
        subtitle: "Closed Community Management Platform",
        status: "2024",
        badge: "Community Experience",
        duration: "Semester collaboration",
        region: "Hybrid",
        description:
            "Community management platform for residents, administrators, and staff with more efficient operational workflows.",
        highlights: [
            "Built role-based experiences for facility bookings, visitor passes, and maintenance tracking.",
            "Delivered a responsive PHP and MySQL stack supported by Figma-led UI planning.",
        ],
        tech: ["PHP", "MySQL", "JavaScript", "HTML", "CSS", "Apache", "Git/GitHub", "Figma"],
        link: "https://github.com/MurshidAkram/sameepa",
        programFocus: "Improving communication and operational clarity for residential communities.",
        categories: ["web", "fullstack"],
        image: imgSameepa,
    },
    {
        id: 6,
        slug: "agromart-ecommerce-platform",
        title: "AgroMart E-commerce Platform",
        subtitle: "Full-Stack Development",
        status: "2024",
        badge: "Digital Commerce",
        duration: "12-week build",
        region: "Sri Lanka",
        description:
            "End-to-end MERN commerce experience with secure payments, order handling, and administrative tooling.",
        highlights: [
            "Provisioned REST APIs for catalogue, user, and order lifecycles with JWT-secured flows.",
            "Integrated Stripe checkout and dashboards for transaction visibility.",
        ],
        tech: ["Node.js", "Express.js", "React", "MongoDB", "Stripe API", "JWT"],
        link: "https://github.com/lagithan/AgroMart1",
        programFocus: "Supporting digital commerce and direct-to-market workflows.",
        categories: ["web", "fullstack"],
        image: imgAgroMart,
    },
];

export const featuredProjectIds = [7, 1, 2, 4];
