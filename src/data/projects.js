import imgBusHub from "../assets/private_buses_in_sri_lanka.jpg";
import imgAgroMart from "../assets/agromart.jpg";
import imgApex from "../assets/apex.jpeg";
import imgSameepa from "../assets/sameepa.jpg";
import imgSecureLogin from "../assets/login.jpg";
import imgTerraSafe from "../assets/terrasafe.jpg";

export const projects = [
    {
        id: 1,
        title: "BusHub LK",
        subtitle: "Full Stack Public Transport Management System",
        status: "2025 Launch",
        badge: "Flagship Mobility Track",
        duration: "12-month build",
        region: "Sri Lanka • Remote",
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
        programFocus: "Reimagining national mobility digitally.",
        categories: ["web", "mobile", "fullstack"],
        image: imgBusHub,
    },
    {
        id: 2,
        title: "Apex Finance",
        subtitle: "Full-Stack Personal Finance Dashboard",
        status: "2025",
        badge: "Financial Intelligence Track",
        duration: "10-week sprint",
        region: "Remote-first",
        description:
            "Secure dashboard experience for tracking and visualising personal finances with rich motion design.",
        highlights: [
            "Composed a responsive Next.js front end with Framer Motion transitions and Recharts insights.",
            "Built API Routes with Prisma ORM and NextAuth.js for protected, role-aware data access.",
        ],
        tech: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Prisma", "NextAuth.js", "SQLite", "Framer Motion", "Recharts"],
        link: "https://github.com/Sankavi1605/Apex-Finance",
        programFocus: "Humanising financial wellness with secure tooling.",
        categories: ["web", "fullstack"],
        image: imgApex,
    },
    {
        id: 3,
        title: "Secure Login & Authorization API",
        subtitle: "Backend Security Services",
        status: "2025",
        badge: "Security Platform Track",
        duration: "6-week build",
        region: "Global",
        description:
            "Stateless authentication and authorization service hardened with Spring Security and JWT flows.",
        highlights: [
            "Implemented BCrypt password hashing with layered RBAC-protected endpoints.",
            "Packaged comprehensive integration tests over H2 with Maven-driven CI scripts.",
        ],
        tech: ["Java", "Spring Boot", "Spring Security", "JWT", "Maven", "H2", "REST"],
        link: "https://github.com/Sankavi1605/Loginpage_springboot",
        programFocus: "Scaling trust for modern platforms.",
        categories: ["backend", "fullstack"],
        image: imgSecureLogin,
    },
    {
        id: 4,
        title: "TerraSafe - Safe Place Finder",
        subtitle: "Mobile App Development",
        status: "2025",
        badge: "Safety & Resilience",
        duration: "8-week iteration",
        region: "Global",
        description:
            "Location-aware Flutter application that surfaces nearby safe zones with contextual assistance.",
        highlights: [
            "Orchestrated Google Maps and Places APIs for live discovery with custom markers and detail sheets.",
            "Shipped an embedded chatbot for rapid safety guidance integrated with geolocation services.",
        ],
        tech: ["Flutter", "Dart", "Google Maps API", "Google Places API", "Dio", "Geolocator"],
        link: "https://github.com/Sankavi1605/terrasafe",
        programFocus: "Guiding communities to safe decisions in moments that matter.",
        categories: ["mobile"],
        image: imgTerraSafe,
    },
    {
        id: 5,
        title: "Sameepa",
        subtitle: "Closed Community Management Platform",
        status: "2024",
        badge: "Community Experience",
        duration: "Semester collaboration",
        region: "Hybrid",
        description:
            "Digitised resident, admin, and staff collaboration with streamlined workflows for gated communities.",
        highlights: [
            "Built role-based experiences for facility bookings, visitor passes, and maintenance tracking.",
            "Delivered fully responsive PHP and MySQL stack with Figma-driven UI deliverables.",
        ],
        tech: ["PHP", "MySQL", "JavaScript", "HTML", "CSS", "Apache", "Git/GitHub", "Figma"],
        link: "https://github.com/MurshidAkram/sameepa",
        programFocus: "Designing belonging and operational clarity.",
        categories: ["web", "fullstack"],
        image: imgSameepa,
    },
    {
        id: 6,
        title: "AgroMart E-commerce Platform",
        subtitle: "Full-Stack Development",
        status: "2024",
        badge: "Digital Commerce",
        duration: "12-week build",
        region: "Sri Lanka",
        description:
            "End-to-end MERN commerce experience with secure payments and administrative tooling.",
        highlights: [
            "Provisioned REST APIs for catalogue, user, and order lifecycles with JWT-secured flows.",
            "Integrated Stripe checkout and dashboards for real-time transaction visibility.",
        ],
        tech: ["Node.js", "Express.js", "React", "MongoDB", "Stripe API", "JWT"],
        link: "https://github.com/lagithan/AgroMart1",
        programFocus: "Elevating farmers with direct-to-market tooling.",
        categories: ["web", "fullstack"],
        image: imgAgroMart,
    },
];

export const featuredProjectIds = [1, 2, 4];
