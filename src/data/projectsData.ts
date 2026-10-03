export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  tools: string;
  image: string;
  link?: string;     // Live Demo or deployment URL
  github?: string;   // GitHub repository URL
  video?: string;    // Optional video file name in src/assets
}

export const projectsData: ProjectItem[] = [
  {
    id: "01",
    title: "CodeLens AI – GitHub Repo Breakdown for Beginners",
    category: "AI Codebase Intelligence & Developer Onboarding",
    tools: "React 18, Google Gemini AI, ReactFlow, Monaco Editor, Express.js, TypeScript, Zustand",
    image: "/images/codelens.jpg",
    link: "https://1drv.ms/f/c/39963ddb148faa20/IgAcJeNLBMX_Saa3uhNlhc-OASjfiR5rr1zhgOTJJbMARSk?e=AvbzbW",
    github: "https://github.com/deepakpandey0053",
  },
  {
    id: "02",
    title: "DocuLens AI: Enterprise Document Intelligence & Hybrid-RAG",
    category: "Full Stack AI / Enterprise RAG & Document Intelligence",
    tools: "React 18, Node.js, FastAPI, MongoDB Vector Search, Redis, BullMQ, Gemini Vision, Docker",
    image: "/images/doculens.jpg",
    link: "https://github.com/deepakpandey0053/doculens-ai",
    github: "https://github.com/deepakpandey0053/doculens-ai",
  },

  {
    id: "03",
    title: "MicroNotes App",
    category: "Full Stack / Productivity Web App",
    tools: "JavaScript, HTML5, CSS3, LocalStorage / REST APIs",
    image: "/images/micronotes.jpg",
    link: "https://github.com/deepakpandey0053/micronotes",
    github: "https://github.com/deepakpandey0053/micronotes",
  },
  {
    id: "04",
    title: "Aesthetic 3D Portfolio",
    category: "Creative Web Design",
    tools: "React.js, Three.js, GSAP, CSS3",
    image: "/images/aesthetic_portfolio.jpg",
    link: "https://asthetic-portfolio-zeta.vercel.app",
    github: "https://github.com/deepakpandey0053/Asthetic--portfolio",
  },
];
