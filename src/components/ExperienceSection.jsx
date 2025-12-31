import { useState, useEffect } from "react";
import { Briefcase, Calendar, MapPin, X, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

const experiences = [
    {
        id: 1,
        role: "Frontend Developer",
        company: "SirpiDataScience",
        period: "Oct 2025 - Present",
        location: "Bengaluru, Karnataka, India",
        type: "Full-time",
        skills: ["TypeScript", "Angular", "Shadcn UI", "CSS"],
        description: [
            "As a core contributor to the TGDeX (Telangana Data Exchange) initiative, developed 12+ core modules for Discussions and Challenges pages using Angular and TypeScript, supporting competition creation, participation, discussion management, and solution submission/resubmission, handling 500+ active users with stable and scalable workflows.",
            "Built an admin-side review system to manage 100+ user discussions, introducing 3 moderation states (Accepted, Rejected, Pending Review) and fixing critical UI and workflow bugs, improving content governance and application reliability.",
            "Implemented Pending Review and Review History modules with 10+ search, sort, and filter options, enabling real-time updates and controlled content visibility, increasing admin review efficiency by 40% through faster verification and decision-making.",
            "Implemented user authentication and premium access using React and the Razorpay Payment Gateway, supporting 100+ registered users and enabling trial–to–paid conversion, providing secure access to premium features."
        ]
    },
    {
        id: 2,
        role: "Web Developer",
        company: "Shunya Digital",
        period: "Oct 2025 - Oct 2025",
        location: "Remote",
        type: "Internship",
        skills: ["JavaScript", "React.js", "Tailwind CSS"],
        description: [
            "During my tenure at Shunya Digital, I revamped client web platforms to meet modern performance and aesthetic standards. I executed a complete redesign of the user interface using React.js and Tailwind CSS, establishing a consistent and engaging visual identity.",
            "My work focused on rebuilding critical sections, such as course listings and program details, to improve information architecture and navigational intuition. By optimizing UI components and streamlined rendering paths, I achieved significant improvements in load times and interaction smoothness, directly contributing to increased user engagement and retention."
        ]
    },
    {
        id: 3,
        role: "MERN Stack Developer",
        company: "OutriX",
        period: "Jun 2025 - Jul 2025",
        location: "Remote",
        type: "Internship",
        skills: ["React.js", "Node.js", "Express.js", "MongoDB", "Socket.IO"],
        description: [
            "I gained extensive hands-on experience building scalable full-stack applications as a MERN Stack Developer. For 'Blog Wave', I developed a feature-rich blogging platform complete with secure user authentication, profile management, and real-time notifications, ensuring a seamless content creation experience.",
            "I also architected 'MERN Messenger', a real-time chat application leveraging Socket.IO for instant messaging, live typing indicators, and dynamic room management. I was responsible for designing RESTful APIs and managing complex data flows in MongoDB, ensuring high performance and reliability across both applications."
        ]
    },
    {
        id: 4,
        role: "Frontend Developer Intern",
        company: "Futuristic Framework",
        period: "Jan 2024 - Feb 2024",
        location: "Ranchi, Jharkhand, India",
        type: "Internship",
        skills: ["Next.js", "React", "Tailwind CSS", "JavaScript", "RBAC"],
        description: [
            "At Futuristic Framework, I focused on building enterprise-grade user interfaces for a government HRMS platform. I developed dynamic, reusable components using React and Tailwind CSS, adhering to strict component-driven architecture principles. My contributions included implementing core modules like Payroll Processing and Leave Management, which automated manual workflows for hundreds of monthly requests.",
            "I also integrated a secure Role-Based Access Control (RBAC) system using NextAuth.js to manage granular permissions. Through rigorous performance optimization techniques like code splitting and lazy loading, I successfully improved the platform's operational efficiency by 40%."
        ]
    },
];

export const ExperienceSection = () => {
    const [selectedExperience, setSelectedExperience] = useState(null);

    // Lock body scroll when modal is open
    useEffect(() => {
        if (selectedExperience) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [selectedExperience]);

    return (
        <section id="experience" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    Work <span className="text-primary"> Experience</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {experiences.map((exp) => (
                        <div
                            key={exp.id}
                            onClick={() => setSelectedExperience(exp)}
                            className="group bg-card p-6 rounded-lg shadow-sm border border-border/50 hover:border-primary/50 cursor-pointer transition-all duration-300 transform hover:-translate-y-1 h-full flex flex-col text-left"
                        >
                            <div className="flex justify-between items-start mb-4">
                                <div className="p-3 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                                    <Briefcase className="h-6 w-6 text-primary" />
                                </div>
                                <ChevronRight className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                            </div>

                            <div className="flex-grow">
                                <h3 className="text-xl font-bold mb-1 group-hover:text-primary transition-colors">
                                    {exp.role}
                                </h3>
                                <p className="text-lg font-medium text-muted-foreground mb-4">
                                    {exp.company}
                                </p>
                            </div>

                            <div className="flex items-center justify-between text-sm text-muted-foreground mt-auto pt-4 border-t border-border/50">
                                <div className="flex items-center gap-1">
                                    <Calendar className="h-4 w-4" />
                                    {exp.period}
                                </div>
                                <span className="px-2 py-0.5 rounded-full bg-secondary text-xs">
                                    {exp.type}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Modal Overlay */}
            <div
                className={cn(
                    "fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm transition-all duration-300",
                    selectedExperience
                        ? "opacity-100 pointer-events-auto"
                        : "opacity-0 pointer-events-none"
                )}
                onClick={() => setSelectedExperience(null)}
            >
                <div
                    className={cn(
                        "bg-card w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-xl shadow-2xl border border-border transition-all duration-300 transform text-left",
                        selectedExperience ? "scale-100 translate-y-0" : "scale-95 translate-y-4"
                    )}
                    onClick={(e) => e.stopPropagation()}
                >
                    {selectedExperience && (
                        <div className="relative">
                            <button
                                onClick={() => setSelectedExperience(null)}
                                className="absolute top-4 right-4 p-2 rounded-full hover:bg-secondary transition-colors z-10"
                            >
                                <X className="h-6 w-6" />
                            </button>

                            <div className="p-6 md:p-8">
                                <div className="mb-8 border-b border-border/50 pb-6">
                                    <div className="flex flex-col gap-2 items-start">
                                        <h3 className="text-2xl md:text-3xl font-bold text-primary">
                                            {selectedExperience.role}
                                        </h3>
                                        <div className="text-xl font-semibold text-muted-foreground">
                                            {selectedExperience.company}
                                        </div>
                                    </div>

                                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mt-4">
                                        <div className="flex items-center gap-1 bg-secondary/50 px-3 py-1 rounded-full">
                                            <Calendar className="h-4 w-4" />
                                            {selectedExperience.period}
                                        </div>
                                        <div className="flex items-center gap-1 bg-secondary/50 px-3 py-1 rounded-full">
                                            <MapPin className="h-4 w-4" />
                                            {selectedExperience.location}
                                        </div>
                                        <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium border border-primary/20">
                                            {selectedExperience.type}
                                        </span>
                                    </div>
                                </div>

                                <div className="space-y-6">
                                    <div>
                                        <h4 className="text-lg font-semibold mb-4 flex items-center gap-2 text-left">
                                            Key Responsibilities
                                        </h4>
                                        <div className="space-y-4 text-muted-foreground text-left">
                                            {selectedExperience.description.map((item, index) => (
                                                <p key={index} className="leading-relaxed text-base">
                                                    {item}
                                                </p>
                                            ))}
                                        </div>
                                    </div>

                                    <div>
                                        <h4 className="text-lg font-semibold mb-4 text-left">Technologies</h4>
                                        <div className="flex flex-wrap gap-2">
                                            {selectedExperience.skills.map((skill, index) => (
                                                <span
                                                    key={index}
                                                    className="px-3 py-1 text-sm font-medium border rounded-full bg-secondary text-secondary-foreground hover:bg-secondary/80 transition-colors"
                                                >
                                                    {skill}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};
