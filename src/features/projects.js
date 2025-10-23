import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    projects: [
        {
            id: 'space-pulse',
            title: "Space Pulse • Exoplanet AI",
            subtitle: "Next.js 15, TypeScript, FastAPI, Python, Lightkurve, Astropy, NASA APIs",
            description: [
                "Full-stack web application to explore exoplanets using live NASA data (TESS, Kepler, K2).",
                "Frontend with Next.js App Router + Plotly.js for interactive charts.",
                "Backend FastAPI + Python; integrated light curve analysis and KOI dataset training.",
                "Implemented Box Least Squares (BLS) algorithm; all features use real (non-mock) data."
            ],
            imageUrl: "/projects-media/portfolio/space live.jpeg",
            projectUrl: "https://github.com/ahmadrzaa/Space-Pulse-Bahrain",
            githubUrl: "https://github.com/ahmadrzaa/Space-Pulse-Bahrain",
            media: ["space live"]
        },
        
        {
            id: 'bscm-award',
            title: "BSCM Excellence Award 2025 Website",
            subtitle: "React, TypeScript, Tailwind CSS (team collaboration)",
            description: [
                "Contributed to front-end components: homepage, award categories, submission steps, eligibility.",
                "Worked with PHP backend, designers, and editors; delivered before public launch."
            ],
            imageUrl: "/projects-media/portfolio/bcm.png",
            projectUrl: "https://award.bscm.bh",
            githubUrl: "https://github.com/Ahmadrzaa",
            media: ["bcm.png"]
        },

        {
            id: 'acf-webapp',
            title: "INTERMID ACF Web App",
            subtitle: "React (Vite), Node.js (Express), SQLite",
            description: [
                "Digitized internal Action Cycle Framework with a 3-panel workspace: process flow, inline-editable action table, and 2×2 priority matrix with drag-and-drop.",
                "Dashboard for live KPIs and task progress; role-based access (admin/manager/team).",
                "CSV/PDF exports and token-based authentication (dev)."
            ],
            imageUrl: "/projects-media/portfolio/acf.png",
            projectUrl: "https://github.com/ahmadrzaa/intermid-acfweb",
            githubUrl: "https://github.com/ahmadrzaa/intermid-acfweb",
            media: ["acf.png"]
        },
        {
            id: 'goev-bh',
            title: "GOEV.BH – EV Charging Station Map",
            subtitle: "Google Maps API, React, PHP backend integration",
            description: [
                "Built interactive UI for Bahrain EV charging locator: stations, status, power (kW), routes & ETA.",
                "Users can view provider, plug types, and nearby services; includes 'Request to Add Station' form.",
                "Integrated with backend to fetch and display real-time station data."
            ],
            imageUrl: "/projects-media/portfolio/goev.png",
            projectUrl: "https://goev.bh",
            githubUrl: "https://github.com/Ahmadrzaa",
            media: ["goev.png"]
        },
    ],
};

const projectsSlice = createSlice({
    name: "projects",
    initialState,
    reducers: {},
});

export default projectsSlice.reducer;
