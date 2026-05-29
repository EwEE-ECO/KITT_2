import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { navLinks } from "../data/site";

export function Navbar() {
  const [open, setOpen] = useState(false);

  const handleClick = (href: string) => {
    setOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm border-b border-brand-100">
      <div className="max-w-7xl mx-auto px-5 md:px-8 h-16 flex items-center justify-between">
        <a
          href="#"
          onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
          className="flex items-center gap-2.5 font-display font-extrabold text-sm md:text-lg text-brand-800 shrink-0"
        >
          <img
            src="https://tech-kitt-r03.gosweb.gosuslugi.ru/netcat_files/generated/catalogue/1/40x40/1/9a4a05ee513367f71bc5b4c397633696.png"
            alt=""
            className="w-7 h-7 md:w-9 md:h-9 rounded-lg shrink-0"
          />
          <span className="flex flex-col leading-tight">
            ГАПОУ КК КИТТ
            <small className="text-[9px] md:text-[10px] font-medium text-brand-500 tracking-wide">
              Краснодарский информационно-технологический техникум
            </small>
          </span>
        </a>

        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((l) => (
            <button
              key={l.href}
              onClick={() => handleClick(l.href)}
              className="px-3.5 py-2 text-sm font-medium text-brand-600 rounded-lg hover:text-brand-700 hover:bg-brand-50 transition-all"
            >
              {l.label}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <a
            href="#admissions"
            onClick={(e) => { e.preventDefault(); handleClick("#admissions"); }}
            className="hidden md:inline-flex btn btn-accent text-xs px-4 py-2"
          >
            Подать заявку
          </a>
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden p-2 rounded-lg hover:bg-brand-50 transition-colors"
            aria-label={open ? "Закрыть меню" : "Открыть меню"}
          >
            {open ? <X className="w-5 h-5 text-brand-800" /> : <Menu className="w-5 h-5 text-brand-800" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-b border-brand-100 shadow-lg overflow-hidden"
          >
            <div className="px-5 py-3 flex flex-col gap-1">
              {navLinks.map((l) => (
                <button
                  key={l.href}
                  onClick={() => handleClick(l.href)}
                  className="w-full text-left px-4 py-3 text-base font-medium text-brand-700 rounded-lg hover:bg-brand-50 transition-all"
                >
                  {l.label}
                </button>
              ))}
              <a
                href="#admissions"
                onClick={(e) => { e.preventDefault(); handleClick("#admissions"); }}
                className="btn btn-accent w-full mt-2"
              >
                Подать заявку
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
