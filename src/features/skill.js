import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    skills: [
        { category: "Languages", items: ["HTML5","CSS3","JavaScript (ES6+)","TypeScript","Python","PHP","Java","C#","SQL"] },
        { category: "Frontend", items: ["React","Next.js","Redux","Tailwind CSS","Ant Design","Bootstrap","Styled Components"] },
        { category: "Backend / APIs", items: ["Node.js (Express)","Django (basic)","REST APIs"] },
        { category: "Databases", items: ["PostgreSQL","MySQL","SQL Server","MongoDB"] },
        { category: "Build / Tools", items: ["Vite","Webpack","Babel","npm/yarn","Git/GitHub"] },
        { category: "Hosting", items: ["Vercel","Netlify","Bluehost","DigitalOcean"] },
        { category: "AI / LLM", items: ["Ollama","Basic chatbot integration"] },
    ]
};

const skillSlice = createSlice({
    name: "skills",
    initialState,
    reducers: {}
});

export default skillSlice.reducer;
