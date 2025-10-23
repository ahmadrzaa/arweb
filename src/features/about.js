import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    about: {
        title: "Hello, I'm Ahmad Raza!",
        subtitle: "Full‑Stack Web Developer",
        description: [
            "I'm a web developer with over 3 years of hands‑on experience building full‑stack websites and web apps. I work mainly with JavaScript, TypeScript, React, Next.js, and Node.js. I focus on building clean, responsive UIs and connecting them to reliable backend systems.",
            "I’ve worked with both MongoDB and SQL, customized ERP systems, and built chatbot interfaces (including recent work using AI and LLMs). I care about keeping things simple, usable, and efficient."
        ]
    },
};

const aboutSlice = createSlice({
    name: "about",
    initialState,
    reducers: {},
});

export default aboutSlice.reducer;
