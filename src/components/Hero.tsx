import { motion } from "framer-motion";
import { Clock, Cpu, Award, ChevronDown } from "lucide-react";

const cards = [
  { icon: Cpu, title: "IT-специальности", desc: "Программирование, сети, администрирование" },
  { icon: Award, title: "Технические профессии", desc: "Авторемонт, электрооборудование, сварка" },
  { icon: Clock, title: "Сроки обучения", desc: "От 10 мес. до 3 лет 10 мес." },
  { icon: Award, title: "Гос. аккредитация", desc: "Лицензия бессрочно" },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.8 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] as const } },
};

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-brand overflow-hidden pt-16">
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-white rounded-full blur-3xl" />
      </div>

      <div className="section-container w-full relative z-10">
        <div className="grid md:grid-cols-[1.1fr_1fr] gap-8 md:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            className="text-white py-6 md:py-10"
          >
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 py-1.5 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-medium border border-white/10 mb-4 md:mb-6"
            >
              <Clock className="w-3.5 h-3.5" />
              2025/2026 Приёмная кампания открыта
            </motion.div>

            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black leading-[1.05] tracking-tight mb-4 md:mb-6">
              <span className="bg-gradient-to-r from-white via-white/90 to-white/70 bg-clip-text text-transparent">
                Краснодарский информационно-технологический техникум
              </span>
            </h1>

            <p className="text-base md:text-lg text-white/80 max-w-xl leading-relaxed mb-6 md:mb-10">
              Государственное образовательное учреждение среднего профессионального образования.
              12 современных специальностей и профессий. Диплом государственного образца.
            </p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-3"
            >
              <a
                href="#admissions"
                onClick={(e) => { e.preventDefault(); document.querySelector("#admissions")?.scrollIntoView({ behavior: "smooth" }); }}
                className="btn btn-white btn-lg text-center"
              >
                Подать заявку онлайн
              </a>
              <a
                href="#specialties"
                onClick={(e) => { e.preventDefault(); document.querySelector("#specialties")?.scrollIntoView({ behavior: "smooth" }); }}
                className="btn btn-lg text-center"
                style={{ borderColor: "rgba(255,255,255,0.4)", color: "#fff", border: "2px solid rgba(255,255,255,0.4)" }}
              >
                Специальности
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="order-first md:order-last"
          >
            <div className="grid grid-cols-2 gap-3 md:gap-4 max-w-md mx-auto md:mx-0 md:ml-auto">
              {cards.map((c) => (
                <motion.div
                  key={c.title}
                  variants={item}
                  className="bg-white/10 backdrop-blur-md border border-white/10 rounded-xl md:rounded-2xl p-4 md:p-6 text-white hover:bg-white/15 transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="w-9 h-9 md:w-11 md:h-11 rounded-lg bg-white/10 flex items-center justify-center mb-2.5 md:mb-3.5">
                    <c.icon className="w-4 h-4 md:w-5.5 md:h-5.5 text-white" />
                  </div>
                  <h3 className="text-sm md:text-base font-bold mb-1 md:mb-1.5">{c.title}</h3>
                  <p className="text-xs md:text-sm text-white/70 leading-snug">{c.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 text-white/40 text-xs"
      >
        <span>Листайте</span>
        <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 2, repeat: Infinity }}>
          <ChevronDown className="w-4 h-4" />
        </motion.div>
      </motion.div>
    </section>
  );
}
