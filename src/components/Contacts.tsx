import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Calendar, Users, ExternalLink } from "lucide-react";
import { useReveal } from "../hooks/useReveal";
import { contacts } from "../data/site";

const iconMap: Record<string, React.FC<{ className?: string }>> = {
  "map-pin": MapPin, phone: Phone, mail: Mail, calendar: Calendar, users: Users,
};

export function Contacts() {
  const { ref, visible } = useReveal();

  return (
    <section id="contacts" className="section-padding bg-brand-50">
      <div className="section-container">
        <div ref={ref} className="text-center mb-10 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={visible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="section-label section-label-center">Контакты</div>
            <h2 className="section-title">Свяжитесь с нами</h2>
            <p className="section-subtitle mx-auto">Мы всегда готовы ответить на ваши вопросы</p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-[1fr_1fr] gap-8 md:gap-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={visible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-col gap-4"
          >
            {contacts.map((c) => {
              const Icon = iconMap[c.icon] || MapPin;
              const isVk = c.label === "Мы в соцсетях";
              return (
                <div
                  key={c.label}
                  className={`flex items-start gap-4 p-4 md:p-5 bg-white rounded-xl border border-brand-100 shadow-sm transition-all duration-300 hover:shadow-md ${isVk ? "hover:border-accent" : "hover:translate-x-1"}`}
                >
                  <div className={`w-10 h-10 md:w-12 md:h-12 rounded-xl flex items-center justify-center shrink-0 ${isVk ? "bg-accent/10" : "bg-brand-50"}`}>
                    <Icon className={`w-4.5 h-4.5 md:w-5.5 md:h-5.5 ${isVk ? "text-accent" : "text-brand-600"}`} />
                  </div>
                  <div>
                    <h4 className="text-xs md:text-sm font-semibold text-brand-500 mb-0.5">{c.label}</h4>
                    {c.href ? (
                      <a href={c.href} className="text-sm md:text-base font-semibold text-brand-800 hover:text-brand-600 transition-colors">
                        {c.label === "Мы в соцсетях" ? (
                          <span className="inline-flex items-center gap-1.5">ВКонтакте <ExternalLink className="w-3.5 h-3.5" /></span>
                        ) : c.value}
                      </a>
                    ) : (
                      <p className="text-sm md:text-base font-semibold text-brand-800">{c.value}</p>
                    )}
                  </div>
                </div>
              );
            })}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={visible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="rounded-xl md:rounded-2xl overflow-hidden shadow-lg aspect-[4/3] bg-brand-100"
          >
            <iframe
              src="https://yandex.ru/map-widget/v1/?ll=38.967167%2C45.042500&z=17&pt=38.967167%2C45.042500%2Cpm2rdl&text=%D0%B3.%20%D0%9A%D1%80%D0%B0%D1%81%D0%BD%D0%BE%D0%B4%D0%B0%D1%80%2C%20%D1%83%D0%BB.%20%D0%9C%D0%BE%D1%81%D0%BA%D0%BE%D0%B2%D1%81%D0%BA%D0%B0%D1%8F%2C%2081"
              loading="lazy"
              title="Карта"
              className="w-full h-full border-0"
              allowFullScreen
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
