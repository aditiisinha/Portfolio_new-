import {
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
  Github,
  MessageSquare,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

export const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.target);
    const name = formData.get("name");
    const senderEmail = formData.get("email");
    const message = formData.get("message");

    const subject = `Portfolio Contact from ${name}`;
    const body = `Name: ${name}\nEmail: ${senderEmail}\n\nMessage:\n${message}`;

    setTimeout(() => {
      window.location.href = `mailto:aditisinha778@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

      toast({
        title: "Opening Email Client",
        description: "Please send the pre-filled email to contact me!",
      });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section id="contact" className="py-24 px-4 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-primary/20 rounded-full blur-[100px] -z-10" />
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-64 h-64 bg-purple-500/20 rounded-full blur-[80px] -z-10" />

      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <span className="text-sm font-bold tracking-widest text-primary uppercase">Connect</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-6">
            Get In <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-600">Touch</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">
          {/* Left Side: Info Cards */}
          <div className="space-y-8">
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-purple-600 rounded-xl opacity-50 blur group-hover:opacity-100 transition duration-500"></div>
              <div className="relative bg-card p-6 rounded-xl border border-border/50 flex items-center gap-6">
                <div className="bg-primary/10 p-4 rounded-full group-hover:scale-110 transition-transform duration-300">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="text-sm font-medium text-muted-foreground uppercase tracking-wide">Email Me</h4>
                  <a href="mailto:aditisinha778@gmail.com" className="text-lg md:text-xl font-bold hover:text-primary transition-colors">
                    aditisinha778@gmail.com
                  </a>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Socials */}
              <a href="https://www.linkedin.com/in/aditi-sinha-63404a202/" target="_blank" className="group bg-card hover:bg-card/80 border border-border/50 p-6 rounded-xl flex flex-col items-center justify-center gap-4 transition-all hover:-translate-y-1 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5">
                <div className="p-3 bg-blue-500/10 rounded-full text-blue-500 group-hover:scale-110 transition-transform">
                  <Linkedin className="h-6 w-6" />
                </div>
                <span className="font-semibold">LinkedIn</span>
              </a>

              <a href="https://github.com/aditiisinha" target="_blank" className="group bg-card hover:bg-card/80 border border-border/50 p-6 rounded-xl flex flex-col items-center justify-center gap-4 transition-all hover:-translate-y-1 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5">
                <div className="p-3 bg-gray-500/10 rounded-full text-foreground group-hover:scale-110 transition-transform">
                  <Github className="h-6 w-6" />
                </div>
                <span className="font-semibold">GitHub</span>
              </a>
            </div>

            <div className="bg-secondary/20 p-6 rounded-xl border border-border/50 backdrop-blur-sm">
              <h4 className="font-semibold mb-4 flex items-center gap-2">
                <MapPin className="h-4 w-4 text-primary" />
                Location
              </h4>
              <p className="text-muted-foreground">Bengaluru, Karnataka, India</p>
            </div>
          </div>

          {/* Right Side: Glass Form */}
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-br from-primary/30 to-purple-600/30 rounded-2xl blur-xl opacity-20" />

            <div className="relative bg-card/60 backdrop-blur-xl p-8 rounded-2xl border border-border shadow-2xl">
              <div className="flex items-center gap-3 mb-8">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <MessageSquare className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-2xl font-bold">Send a Message</h3>
              </div>

              <form className="space-y-6" onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2 pl-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-5 py-3 rounded-lg border border-border bg-secondary/50 focus:bg-background focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all outline-none"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2 pl-1">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-5 py-3 rounded-lg border border-border bg-secondary/50 focus:bg-background focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all outline-none"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2 pl-1">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    className="w-full px-5 py-3 rounded-lg border border-border bg-secondary/50 focus:bg-background focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all outline-none resize-none"
                    placeholder="Hi, I'd like to discuss..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={cn(
                    "w-full py-4 rounded-lg bg-gradient-to-r from-primary to-purple-600 text-primary-foreground font-bold shadow-lg shadow-primary/25 hover:shadow-primary/40 hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center gap-2",
                    isSubmitting && "opacity-70 cursor-not-allowed"
                  )}
                >
                  {isSubmitting ? "Opening Mail..." : "Send Message"}
                  <Send className="h-5 w-5" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
