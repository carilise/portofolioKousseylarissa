import { useState, useEffect } from "react";
import { useTheme } from "../context/ThemeContext";

const NAV_LINKS = [
  { href: "#about", label: "À propos" },
  { href: "#skills", label: "Compétences" },
  { href: "#projects", label: "Projets" },
  { href: "#beyond", label: "Au-delà" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");
  const { dark, toggle } = useTheme();

  // Detecte quelle section est visible pour mettre a jours le lien actif
  useEffect(() => {
    const sections = NAV_LINKS.map(({ href }) =>
      document.querySelector(href),
    ).filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: "-40% 0px -55% 0px" },
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 h-[62px] flex items-center justify-between px-6 md:px-10 border-b border-gray-200 bg-[rgba(240,239,234,0.92)] backdrop-blur-md">
      <span className="font-bold text-2xl text-dark">L.K</span>

      {/* Liens desktop */}
      <ul className="hidden md:flex gap-8 list-none">
        {NAV_LINKS.map(({ href, label }) => (
          <li key={href}>
            <a
              href={href}
              className={`text-sm font-medium transition-colors duration-200
                ${
                  active === href
                    ? "text-orange"
                    : "text-dark hover:text-orange"
                }`}
            >
              {label}
            </a>
          </li>
        ))}
      </ul>

      {/* Boutons droite */}
      <div className="flex items-center gap-3">
        <button
          onClick={toggle}
          className="w-9 h-9 rounded-full flex items-center justify-center border border-gray-200 hover:border-orange transition-all duration-200 text-base cursor-pointer"
        >
          {dark ? "☀️" : "🌙"}
        </button>

        <button
          onClick={() => setOpen(!open)}
          className="flex md:hidden flex-col gap-[5px] p-1 cursor-pointer bg-transparent border-none"
        >
          <span
            className={`block w-6 h-[2px] bg-dark rounded-full transition-all duration-300 ${open ? "translate-y-[7px] rotate-45" : ""}`}
          />
          <span
            className={`block w-6 h-[2px] bg-dark rounded-full transition-all duration-300 ${open ? "opacity-0" : ""}`}
          />
          <span
            className={`block w-6 h-[2px] bg-dark rounded-full transition-all duration-300 ${open ? "-translate-y-[7px] -rotate-45" : ""}`}
          />
        </button>
      </div>

      {/* Menu mobile */}
      {open && (
        <div className="absolute top-[62px] left-0 right-0 md:hidden bg-light border-b border-gray-200 flex flex-col">
          {NAV_LINKS.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              className={`px-6 py-4 text-sm font-medium border-b border-gray-100 transition-colors duration-200
                ${
                  active === href
                    ? "text-orange"
                    : "text-dark hover:text-orange"
                }`}
            >
              {label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
