import { useState, useEffect } from "react";
import { X } from "lucide-react";

export function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem("cookies_accepted")) setVisible(true);
  }, []);

  const accept = () => {
    localStorage.setItem("cookies_accepted", "true");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 md:bottom-6 left-0 right-0 md:left-1/2 md:-translate-x-1/2 z-[9999] bg-brand-800 text-white px-5 py-4 md:py-3.5 md:px-6 md:rounded-xl md:max-w-lg md:w-[calc(100%-48px)] shadow-xl flex items-center gap-3 text-xs md:text-sm leading-relaxed">
      <span className="flex-1">
        Сайт использует cookie. Продолжая пользоваться сайтом, вы соглашаетесь на их использование.
      </span>
      <button onClick={accept} className="shrink-0 px-4 py-1.5 bg-accent text-white rounded-lg font-semibold text-xs hover:bg-accent-light transition-colors">
        Принять
      </button>
      <button onClick={accept} className="shrink-0 p-1.5 hover:bg-white/10 rounded-lg transition-colors md:hidden">
        <X className="w-4 h-4" />
      </button>
    </div>
  );
}
