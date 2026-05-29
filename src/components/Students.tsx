import { motion } from "framer-motion";
import { useReveal } from "../hooks/useReveal";

const students = [
  { img: "https://s.fotora.ru/78d41d609a3dd9a6.jpeg", title: "Современное обучение", desc: "Оснащённые лаборатории и мастерские" },
  { img: "https://s.fotora.ru/4761c7167142df11.jpeg", title: "Спорт и здоровье", desc: "Секции, спортзалы, студенческие лиги" },
  { img: "https://s.fotora.ru/0fae072a2b9a2b27.jpeg", title: "События и творчество", desc: "Конкурсы, концерты, встречи" },
];

export function Students() {
  const { ref, visible } = useReveal();

  return (
    <section id="students" className="section-padding bg-white">
      <div className="section-container">
        <div ref={ref} className="text-center mb-10 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={visible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="section-label section-label-center">Студентам</div>
            <h2 className="section-title">Студенческая жизнь в КИТТ</h2>
            <p className="section-subtitle mx-auto">Учёба, спорт, творчество — каждый студент найдёт дело по душе</p>
          </motion.div>
        </div>

        <div className="grid sm:grid-cols-3 gap-4 md:gap-6">
          {students.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              animate={visible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15, ease: [0.25, 0.1, 0.25, 1] }}
              className="group relative rounded-xl md:rounded-2xl overflow-hidden aspect-[4/3] cursor-pointer shadow-md"
            >
              <img src={s.img} alt={s.title} loading="lazy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-900/90 via-brand-900/30 to-transparent flex flex-col justify-end p-5 md:p-7">
                <h3 className="text-white font-display font-bold text-base md:text-lg mb-1">{s.title}</h3>
                <p className="text-white/80 text-xs md:text-sm">{s.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
