
import { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Menu, X, Moon, Sun, Globe } from "lucide-react";
import { TypeAnimation } from 'react-type-animation';
import { useTheme } from "@/hooks/use-theme";
import { useLanguage } from "@/hooks/use-language";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const navItems = [
  { title: "About", href: "#about" },
  { title: "Experience", href: "#experience" },
  { title: "Education", href: "#education" },
  { title: "Skills", href: "#skills" },
  { title: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const { language, setLanguage, t } = useLanguage();
  const themeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrolled]);

  const handleThemeToggle = () => {
    toggleTheme();
    
    // Add animation class
    if (themeButtonRef.current) {
      themeButtonRef.current.classList.add("theme-toggle-animation");
      setTimeout(() => {
        themeButtonRef.current?.classList.remove("theme-toggle-animation");
      }, 500);
    }
  };

  return (
    <nav
      className={cn(
        "fixed top-0 z-50 w-full transition-all duration-300 px-4 md:px-8",
        scrolled
          ? "bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-sm py-2"
          : "bg-transparent py-4"
      )}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <a
          href="#"
          className="text-lg md:text-xl  font-bold text-secondary dark:text-white"
        >
          <TypeAnimation
            sequence={[
              'Abdelrhman.ph',
              5000,
              '',
              'Abdelrhman.Dev',
              2000,
            ]}
            speed={1}
            repeat={Infinity}
            
          />
          <span className="text-primary">Ph</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-8">
          {navItems.map((item) => (
            <a
              key={item.title}
              href={item.href}
              className="text-muted-foreground dark:text-gray-300 hover:text-primary dark:hover:text-primary font-medium transition-colors"
            >
              {t(item.title)}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-4">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" aria-label="Select Language">
                <Globe className="h-5 w-5" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => setLanguage('en')}>
                English {language === 'en' && '✓'}
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setLanguage('ar')}>
                العربية {language === 'ar' && '✓'}
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setLanguage('de')}>
                Deutsch {language === 'de' && '✓'}
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* <Button 
            ref={themeButtonRef}
            variant="ghost" 
            size="icon"
            onClick={handleThemeToggle}
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </Button> */}

          <Button asChild>
            <a href="#contact">{t('Hire Me')}</a>
          </Button>
        </div>

        {/* Mobile Nav Toggle */}
        <div className="flex md:hidden items-center gap-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" aria-label="Select Language">
                <Globe className="h-5 w-5" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => setLanguage('en')}>
                English {language === 'en' && '✓'}
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setLanguage('ar')}>
                العربية {language === 'ar' && '✓'}
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setLanguage('de')}>
                Deutsch {language === 'de' && '✓'}
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <Button 
            ref={themeButtonRef}
            variant="ghost" 
            size="icon"
            onClick={handleThemeToggle}
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </Button>

          <button
            className="focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Nav */}
        {isOpen && (
          <div className="absolute top-full left-0 right-0 bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-md py-4 flex flex-col items-center gap-4 md:hidden">
            {navItems.map((item) => (
              <a
                key={item.title}
                href={item.href}
                className="text-muted-foreground dark:text-gray-300 hover:text-primary dark:hover:text-primary font-medium transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {t(item.title)}
              </a>
            ))}
            <Button asChild>
              <a href="#contact" onClick={() => setIsOpen(false)}>
                {t('Hire Me')}
              </a>
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
}
