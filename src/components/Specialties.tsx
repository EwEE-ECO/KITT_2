import { motion } from "framer-motion";
import { Clock, BookOpen, Shield } from "lucide-react";
import { useReveal } from "../hooks/useReveal";
import { specialties } from "../data/site";

const iconMap = { "Специальность": BookOpen, "Профессия": Shield };

export function Specialties() {
  const { ref, visible } = useReveal(0.05);

  return (
    <section id="specialties" className="section-padding bg-brand-50">
      <div className="section-container">
        <div ref={ref} className="text-center mb-10 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={visible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="section-label section-label-center">Специальности и профессии</div>
            <h2 className="section-title">Выбери свою будущую профессию</h2>
            <p className="section-subtitle mx-auto">Обучение на базе 9 и 11 классов. Диплом государственного образца.</p>
          </motion.div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {specialties.map((s, i) => {
            const Icon = iconMap[s.type] || BookOpen;
            return (
              <motion.div
                key={s.code}
                initial={{ opacity: 0, y: 30 }}
                animate={visible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.05, ease: [0.25, 0.1, 0.25, 1] }}
                className="card card-hover p-5 md:p-7 flex flex-col group"
              >
                <div className="text-xs font-bold text-accent tracking-wider uppercase mb-2">{s.code}</div>
                <h3 className="font-display text-base md:text-lg font-bold text-brand-800 leading-snug mb-2 group-hover:text-brand-600 transition-colors">
                  {s.name}
                </h3>
                <div className="text-sm text-brand-500 mb-4 leading-relaxed">{s.qual}</div>
                <div className="flex flex-wrap gap-2 mt-auto pt-4 md:pt-5 border-t border-brand-100">
                  <span className="inline-flex items-center gap-1.5 text-xs font-medium text-brand-400 bg-brand-50 px-2.5 py-1 rounded-full">
                    <Clock className="w-3 h-3" /> {s.duration}
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-xs font-medium text-brand-400 bg-brand-50 px-2.5 py-1 rounded-full">
                    <Icon className="w-3 h-3" /> {s.type}
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-xs font-medium text-brand-400 bg-brand-50 px-2.5 py-1 rounded-full">
                    <Shield className="w-3 h-3" /> {s.base}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
