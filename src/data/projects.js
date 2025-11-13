import imgBusHub from "../assets/private_buses_in_sri_lanka.jpg";
import imgAgroMart from "../assets/agromart.jpg";
import imgApex from "../assets/apex.jpeg";
import imgSameepa from "../assets/sameepa.jpg";
import imgSecureLogin from "../assets/login.jpg";
import imgTerraSafe from "../assets/terrasafe.jpg";

export const projects = [
    {
        id: 1,
        slug: "bus-hub-lk",
        title: "BusHub LK",
        subtitle: "Full Stack Public Transport Management System",
        status: "2025 Launch",
        description:
            "Dual-platform solution modernizing the Sri Lanka Transport Board with real-time operations visibility and passenger tooling.",
        highlights: [
            "Replaced paper-heavy processes with a web-based admin cockpit and a React Native passenger app.",
            "Delivered live fleet monitoring, route lookups, and fare estimation backed by scalable AWS-hosted APIs.",
            "Deployed to production at bus-hub-lk.vercel.app with observability and modern CI pipelines.",
        ],
        tech: ["Node.js", "React.js", "React Native", "PostgreSQL", "AWS", "Git/GitHub"],
        link: "https://github.com/MurshidAkram/BusHubLK",
        liveUrl: "https://bus-hub-lk.vercel.app/",
        categories: ["web", "mobile", "fullstack"],
        tags: ["transport", "maps", "realtime", "admin"],
        role: "Full‑stack engineer",
        teamSize: 3,
        timeline: "2024–2025",
        keyMetric: null,
        impact: "Digitised bus operations and passenger experience with a unified platform.",
        caseStudy: {
            problem: "Paper-based workflows and fragmented tools slowed down dispatching and rider information.",
            approach: [
                "Built a web admin console for routes, schedules, and fleet visibility.",
                "Shipped a React Native rider app with search, fares, and live location.",
                "Hosted APIs on AWS with CI/CD and basic observability in place."
            ],
            impact: [
                "Centralised operations; reduced manual steps for common tasks.",
                "Improved rider self‑service via route lookups and fare estimation."
            ],
            lessons: [
                "Structured API contracts early to parallelise frontend and backend work.",
                "Added feature flags to iterate on live location safely."
            ]
        },
        image: imgBusHub,
    },
    {
        id: 2,
        slug: "apex-finance",
        title: "Apex Finance",
        subtitle: "Full-Stack Personal Finance Dashboard",
        status: "2025",
        description:
            "Secure dashboard experience for tracking and visualising personal finances with rich motion design.",
        highlights: [
            "Composed a responsive Next.js front end with Framer Motion transitions and Recharts insights.",
            "Built API Routes with Prisma ORM and NextAuth.js for protected, role-aware data access.",
        ],
        tech: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Prisma", "NextAuth.js", "SQLite", "Framer Motion", "Recharts"],
        link: "https://github.com/Sankavi1605/Apex-Finance",
        categories: ["web", "fullstack"],
        tags: ["finance", "dashboard", "charts", "auth"],
        role: "Frontend & API",
        teamSize: 2,
        timeline: "2025",
        keyMetric: null,
        impact: "Gives users a clear view of spending and trends with smooth UX.",
        caseStudy: {
            problem: "Users needed a private, simple way to understand spending patterns.",
            approach: [
                "Built Next.js UI with animated navigation and responsive charts.",
                "Implemented protected API routes with NextAuth and Prisma models.",
                "Added categories, notes, and basic search across transactions."
            ],
            impact: [
                "Reduced friction to track expenses and inspect categories.",
                "Clearer trend insights through animated charts."
            ],
            lessons: [
                "Kept data modelling simple to ensure fast iteration.",
                "Invested in empty states and loading skeletons for perceived speed."
            ]
        },
        image: imgApex,
    },
    {
        id: 3,
        title: "Secure Login & Authorization API",
        subtitle: "Backend Security Services",
        status: "2025",
        description:
            "Stateless authentication and authorization service hardened with Spring Security and JWT flows.",
        highlights: [
            "Implemented BCrypt password hashing with layered RBAC-protected endpoints.",
            "Packaged comprehensive integration tests over H2 with Maven-driven CI scripts.",
        ],
        tech: ["Java", "Spring Boot", "Spring Security", "JWT", "Maven", "H2", "REST"],
        link: "https://github.com/Sankavi1605/Loginpage_springboot",
        categories: ["backend", "fullstack"],
        image: imgSecureLogin,
    },
    {
        id: 4,
        slug: "terrasafe",
        title: "TerraSafe - Safe Place Finder",
        subtitle: "Mobile App Development",
        status: "2025",
        description:
            "Location-aware Flutter application that surfaces nearby safe zones with contextual assistance.",
        highlights: [
            "Orchestrated Google Maps and Places APIs for live discovery with custom markers and detail sheets.",
            "Shipped an embedded chatbot for rapid safety guidance integrated with geolocation services.",
        ],
        tech: ["Flutter", "Dart", "Google Maps API", "Google Places API", "Dio", "Geolocator"],
        link: "https://github.com/Sankavi1605/terrasafe",
        categories: ["mobile"],
        tags: ["safety", "maps", "flutter"],
        role: "Mobile engineer",
        teamSize: 1,
        timeline: "2025",
        keyMetric: null,
        impact: "Helps users quickly discover safe locations nearby with guidance.",
        caseStudy: {
            problem: "Finding safe nearby spots during stressful moments is hard.",
            approach: [
                "Integrated Maps and Places APIs; added custom markers and detail sheets.",
                "Embedded a lightweight chatbot for guidance tied to location.",
                "Handled permissions, errors, and offline messaging."
            ],
            impact: [
                "Faster discovery with clear markers and concise detail views."
            ],
            lessons: [
                "Early attention to permission states simplified edge cases.",
                "Kept animations subtle to maintain clarity under stress."
            ]
        },
        image: imgTerraSafe,
    },
    {
        id: 5,
        title: "Sameepa",
        subtitle: "Closed Community Management Platform",
        status: "2024",
        description:
            "Digitised resident, admin, and staff collaboration with streamlined workflows for gated communities.",
        highlights: [
            "Built role-based experiences for facility bookings, visitor passes, and maintenance tracking.",
            "Delivered fully responsive PHP and MySQL stack with Figma-driven UI deliverables.",
        ],
        tech: ["PHP", "MySQL", "JavaScript", "HTML", "CSS", "Apache", "Git/GitHub", "Figma"],
        link: "https://github.com/MurshidAkram/sameepa",
        categories: ["web", "fullstack"],
        image: imgSameepa,
    },
    {
        id: 6,
        title: "AgroMart E-commerce Platform",
        subtitle: "Full-Stack Development",
        status: "2024",
        description:
            "End-to-end MERN commerce experience with secure payments and administrative tooling.",
        highlights: [
            "Provisioned REST APIs for catalogue, user, and order lifecycles with JWT-secured flows.",
            "Integrated Stripe checkout and dashboards for real-time transaction visibility.",
        ],
        tech: ["Node.js", "Express.js", "React", "MongoDB", "Stripe API", "JWT"],
        link: "https://github.com/lagithan/AgroMart1",
        categories: ["web", "fullstack"],
        image: imgAgroMart,
    },
];

export const featuredProjectIds = [1, 2, 4];
