import { ArrowRight, ExternalLink, Github } from "lucide-react";

import project1 from "@/assets/projects/project1.png";
import project2 from "@/assets/projects/project2.jpeg";
import project4 from "@/assets/projects/project4.png";
import summarium from "@/assets/projects/summarium_v2.png";
import rfp from "@/assets/projects/rfp_v2.png";
import techpilot from "@/assets/projects/techpilot_v2.png";
import datatable from "@/assets/projects/datatable_v2.png";

const projects = [
  {
    id: 1,
    title: "Summarium: AI SaaS PDF Summarizer",
    description:
      "Built a full-stack AI SaaS platform that enables secure PDF uploads and converts them into concise, visually appealing, and interactive summaries. Features role-based dashboards and optimized text processing.",
    image: summarium,
    tags: ["Next.js", "React 19", "TypeScript", "Tailwind", "OpenAI", "Gemini", "LangChain"],
    demoUrl: "https://pdf-summarizer-eta.vercel.app/",
    githubUrl: "https://github.com/aditiisinha/pdf_summarizer",
  },
  {
    id: 2,
    title: "AI-Powered RFP Management System",
    description:
      "Developed an AI-powered platform automating proposal creation from natural language. Features an intelligent ranking algorithm and automated SMTP/IMAP parsing for vendor responses.",
    image: rfp,
    tags: ["React", "Node.js", "Gemini", "MongoDB", "SMTP/IMAP"],
    demoUrl: "https://rfp-deployed.vercel.app/",
    githubUrl: "https://github.com/aditiisinha/RFP_DEPLOYED",
  },
  {
    id: 3,
    title: "E-retail Management Platform",
    description:
      "Architected a secure two-tier e-commerce platform with containerized React frontend and Node.js/Express backend. Automated AWS deployment with Terraform and Jenkins CI/CD.",
    image: project2,
    tags: ["React.js", "Node.js", "Docker", "AWS", "Terraform", "Jenkins"],
    demoUrl: null,
    githubUrl: "https://github.com/aditiisinha/E-Retail-Managment-Platfform",
  },
  {
    id: 4,
    title: "FinCrypt: DeFi Lending Platform",
    description:
      "Engineered a decentralized lending platform on Ethereum with real-time dashboards and an NFT marketplace. Integrated MetaMask for secure cryptocurrency transactions.",
    image: project1,
    tags: ["React.js", "Solidity", "Web3.js", "MongoDB", "Hardhat"],
    demoUrl: null,
    githubUrl: "https://github.com/aditiisinha/DeFi-Lending",
  },
  {
    id: 5,
    title: "AI-Powered Image Generator",
    description:
      "Built a browser-based AI image generation platform enabling high-quality visual creation from text prompts using advanced AI APIs with real-time rendering.",
    image: project4,
    tags: ["HTML", "CSS", "JavaScript", "AI API"],
    demoUrl: "https://ai-image-generator-gamma-five.vercel.app/",
    githubUrl: "https://github.com/aditiisinha/ai-image-generator",
  },
  {
    id: 6,
    title: "TechPilot: Educational Platform",
    description:
      "A modern educational platform showcasing courses and reviews. Features dynamic routing, interactive testimonials with Framer Motion, and a clean responsive UI.",
    image: techpilot,
    tags: ["React", "Vite", "Tailwind CSS", "Framer Motion", "Swiper"],
    demoUrl: "https://techpilot-oyew.vercel.app/",
    githubUrl: "https://github.com/aditiisinha/techpilot",
  },
  {
    id: 7,
    title: "PrimeReact Paginated DataTable",
    description:
      "A server-side paginated DataTable with persistent row selection across pages. optimized for performance by fetching data only when needed.",
    image: datatable,
    tags: ["React 18", "TypeScript", "Vite", "PrimeReact"],
    demoUrl: "https://art-table1.netlify.app/",
    githubUrl: "https://github.com/aditiisinha/art-table",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-32 px-4 relative bg-background/50">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-20 animate-fade-in-up">
          <span className="text-primary font-mono text-sm tracking-wider uppercase mb-2 block">
            Portfolio
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="text-primary">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            A collection of applications focusing on clean code, performance, and user experience.
          </p>
        </div>

        <div className="space-y-24">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`flex flex-col ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                } gap-8 md:gap-16 items-center group`}
            >
              {/* Image Side */}
              <div className="w-full md:w-3/5 relative">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-border/50 group-hover:border-primary/50 transition-colors duration-500">
                  <div className="absolute inset-0 bg-primary/10 mix-blend-overlay z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                {/* Decorative Blur */}
                <div className={`absolute -inset-4 bg-primary/20 blur-3xl -z-10 opacity-0 group-hover:opacity-40 transition-opacity duration-500 rounded-[3rem] ${index % 2 === 0 ? '-right-4' : '-left-4'}`} />
              </div>

              {/* Content Side */}
              <div className="w-full md:w-2/5 flex flex-col gap-6 text-left">
                <div>
                  <span className="text-primary font-mono text-xs tracking-widest uppercase mb-2 block">
                    0{index + 1}
                  </span>
                  <h3 className="text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70 group-hover:from-primary group-hover:to-purple-500 transition-all duration-300">
                    {project.title}
                  </h3>
                </div>

                <div className="p-6 bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl shadow-sm hover:shadow-md transition-shadow relative">
                  <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                    {project.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-xs font-medium text-primary bg-primary/10 rounded-full border border-primary/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-4 pt-2">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    className="flex items-center gap-2 text-sm font-semibold hover:text-primary transition-colors"
                  >
                    <Github className="h-5 w-5" />
                    Code
                  </a>
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="flex items-center gap-2 text-sm font-semibold hover:text-primary transition-colors"
                    >
                      <ExternalLink className="h-5 w-5" />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-24">
          <a href="https://github.com/aditiisinha" target="_blank" className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-primary text-primary-foreground font-bold hover:shadow-lg hover:shadow-primary/25 hover:-translate-y-1 transition-all duration-300">
            View All Projects <ArrowRight className="h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  );
};
