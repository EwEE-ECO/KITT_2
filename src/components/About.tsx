import { motion } from "framer-motion";
import { useReveal } from "../hooks/useReveal";

const stats = [
  { number: "12", suffix: "+", label: "Специальностей" },
  { number: "3", suffix: "", label: "Учебных корпуса" },
  { number: "2000", suffix: "+", label: "Студентов ежегодно" },
];

export function About() {
  const { ref, visible } = useReveal();

  return (
    <section id="about" className="section-padding bg-gradient-surface">
      <div className="section-container">
        <div ref={ref} className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={visible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3]">
              <img
                src="https://s.fotora.ru/6524e7eb2160a9a2.jpeg"
                alt="Студенты техникума"
                loading="lazy"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-900/20 to-transparent" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={visible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <div className="section-label">О техникуме</div>
            <h2 className="section-title">
              Готовим профессионалов для цифровой экономики и промышленности
            </h2>
            <p className="section-subtitle mb-5">
              ГАПОУ КК «Краснодарский информационно-технологический техникум» —
              современное образовательное учреждение, сочетающее фундаментальную
              подготовку с практическими навыками.
            </p>
            <p className="text-brand-600 text-sm md:text-base leading-relaxed mb-6">
              Три учебных корпуса, оснащённых современным оборудованием.
              Сотрудничество с ведущими предприятиями Краснодара и края.
              Возможность получить дополнительную рабочую профессию во время
              обучения.
            </p>
            <a
              href="#specialties"
              onClick={(e) => { e.preventDefault(); document.querySelector("#specialties")?.scrollIntoView({ behavior: "smooth" }); }}
              className="btn btn-primary"
            >
              Наши специальности
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={visible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="grid grid-cols-3 gap-4 md:gap-8 mt-8 md:mt-16"
        >
          {stats.map((s) => (
            <div
              key={s.label}
              className="text-center p-4 md:p-8 bg-white rounded-xl md:rounded-2xl shadow-sm border border-brand-100 hover:-translate-y-1 hover:shadow-md transition-all duration-300"
            >
              <div className="font-display text-3xl md:text-5xl font-black text-brand-600 leading-none">
                {s.number}
                <span className="text-accent">{s.suffix}</span>
              </div>
              <div className="text-xs md:text-sm text-brand-500 font-medium mt-2 md:mt-3">{s.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
