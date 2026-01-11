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
        "fixed w-full z-50 top-0 left-0 right-0 px-4 pt-4"
      )}
    >
      <div
        className={cn(
          "w-full max-w-5xl mx-auto flex items-center justify-center rounded-full transition-all duration-300",
          isScrolled
            ? "bg-background/80 backdrop-blur-xl border border-border shadow-lg py-3 px-6"
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
                "relative px-4 py-2 text-sm font-medium rounded-full transition-colors duration-300",
                "text-foreground/80 hover:text-primary"
              )}
            >
              <span>{item.name}</span>
            </a>
          ))}
          <ThemeToggle className="ml-2" />
        </div>

        {/* mobile nav trigger */}
        <button
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className="md:hidden absolute right-8 p-2 text-foreground hover:bg-primary/10 rounded-full transition-colors z-50"
          aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* mobile nav overlay */}
        <div
          className={cn(
            "fixed inset-0 bg-background/95 backdrop-blur-2xl z-40 flex flex-col items-center justify-center gap-8",
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
              className="text-2xl font-bold text-foreground/60 hover:text-primary transition-all duration-300 hover:scale-110"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.name}
            </a>
          ))}
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
};
