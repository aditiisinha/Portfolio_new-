import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { ThemeToggle } from "./ThemeToggle";

const navItems = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed w-full z-50 top-0 left-0 right-0 transition-all duration-500"
      )}
    >
      <div
        className={cn(
          "w-full flex items-center justify-center transition-all duration-500 rounded-full",
          isScrolled
            ? "bg-black/50 backdrop-blur-xl border border-white/10 shadow-lg py-3 px-6"
            : "bg-transparent py-3 px-6"
        )}
      >
        {/* desktop nav */}
        <div className="hidden md:flex items-center space-x-1">
          {navItems.map((item, key) => (
            <a
              key={key}
              href={item.href}
              className={cn(
                "relative px-4 py-2 text-sm font-medium transition-colors duration-300 group overflow-hidden rounded-full hover:bg-black/5 dark:hover:bg-white/5",
                isScrolled ? "text-white/80 hover:text-white" : "text-foreground/80 hover:text-foreground"
              )}
            >
              <span className="relative z-10 transition-transform duration-300 group-hover:-translate-y-[120%] block">
                {item.name}
              </span>
              <span className="absolute inset-0 z-10 flex items-center justify-center text-primary translate-y-[120%] transition-transform duration-300 group-hover:translate-y-0 font-bold">
                {item.name}
              </span>
            </a>
          ))}
          <ThemeToggle className="ml-2 hover:bg-white/10 dark:hover:bg-white/10" />
        </div>



        {/* mobile nav trigger - Absolute positioned to right effectively or separate */}
        <button
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className="md:hidden absolute right-4 p-2 text-white hover:bg-white/10 rounded-full transition-colors z-50"
          aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* mobile nav overlay */}
        <div
          className={cn(
            "fixed inset-0 bg-black/95 backdrop-blur-2xl z-40 flex flex-col items-center justify-center gap-8",
            "transition-all duration-500 md:hidden",
            isMenuOpen
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-full pointer-events-none"
          )}
        >
          {navItems.map((item, key) => (
            <a
              key={key}
              href={item.href}
              className="text-2xl font-bold text-white/60 hover:text-primary transition-all duration-300 hover:scale-110"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};
