import { useState } from "react";
import { motion } from "framer-motion";
import { Clock, Sparkles } from "lucide-react";
import { useReveal } from "../hooks/useReveal";
import { specialties, calcMap } from "../data/site";

const questions = [
  { id: 1, text: "Какая сфера тебя интересует?", options: [
    { value: "it", label: "Информационные технологии" },
    { value: "bank", label: "Финансы и банки" },
    { value: "auto", label: "Автомобили и транспорт" },
    { value: "food", label: "Кулинария и питание" },
    { value: "electro", label: "Электрооборудование" },
  ]},
  { id: 2, text: "Что тебе больше нравится делать?", options: [
    { value: "code", label: "Писать код, работать с ПК" },
    { value: "repair", label: "Ремонтировать, настраивать" },
    { value: "create", label: "Создавать, готовить" },
    { value: "manage", label: "Управлять, организовывать" },
  ]},
  { id: 3, text: "Какой срок обучения комфортен?", options: [
    { value: "short", label: "До 1 года" },
    { value: "medium", label: "2–3 года" },
    { value: "long", label: "3–4 года" },
  ]},
  { id: 4, text: "Что важнее после выпуска?", options: [
    { value: "job", label: "Быстро найти работу" },
    { value: "career", label: "Построить карьеру" },
    { value: "business", label: "Открыть своё дело" },
  ]},
];

export function Calculator() {
  const { ref, visible } = useReveal();
  const [answers, setAnswers] = useState<Record<string, string>>({});

  const handleSelect = (qId: number, value: string) => {
    setAnswers((prev) => ({ ...prev, [`q${qId}`]: value }));
  };

  const result = (() => {
    if (Object.keys(answers).length < 4) return null;
    const key = `${answers.q1}_${answers.q2}`;
    const match = calcMap[key];
    if (!match) return null;
    const recs = match.recs
      .map((c) => specialties.find((s) => s.code === c))
      .filter(Boolean);
    return { match: match.match, recs };
  })();

  return (
    <section id="calculator" className="section-padding bg-white">
      <div className="section-container">
        <div ref={ref} className="text-center mb-10 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={visible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="section-label section-label-center">Калькулятор профессий</div>
            <h2 className="section-title">Какая специальность тебе подходит?</h2>
            <p className="section-subtitle mx-auto">Ответь на 4 вопроса — подберём направление обучения</p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-[1fr_1fr] gap-8 md:gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={visible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="card p-6 md:p-10 shadow-md"
          >
            <h3 className="font-display text-lg md:text-xl font-bold text-brand-800 mb-6">Ответь на вопросы:</h3>

            {questions.map((q) => (
              <div key={q.id} className="mb-5 pb-5 border-b border-brand-100 last:border-0 last:mb-0 last:pb-0">
                <p className="font-semibold text-sm md:text-base text-brand-800 mb-3">{q.id}. {q.text}</p>
                <div className="flex flex-wrap gap-2">
                  {q.options.map((o) => (
                    <button
                      key={o.value}
                      onClick={() => handleSelect(q.id, o.value)}
                      className={`px-3 py-1.5 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-medium border-2 transition-all duration-200 active:scale-95 ${
                        answers[`q${q.id}`] === o.value
                          ? "bg-brand-600 border-brand-600 text-white"
                          : "border-brand-200 text-brand-500 hover:border-brand-400 hover:text-brand-700 bg-white"
                      }`}
                    >
                      {o.label}
                    </button>
                  ))}
                </div>
              </div>
            ))}

            {result && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-6 p-5 md:p-6 bg-gradient-brand rounded-xl text-white"
              >
                <div className="flex items-center gap-2 mb-2">
                  <Sparkles className="w-5 h-5" />
                  <h4 className="font-bold text-base">Вам отлично подойдёт!</h4>
                </div>
                <p className="text-white/90 text-sm mb-1">
                  <strong className="text-white">{result.recs[0]?.name}</strong>
                </p>
                <div className="flex items-center gap-2 text-white/70 text-sm mt-2">
                  <div className="flex-1 h-2 bg-white/20 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-white rounded-full transition-all duration-700"
                      style={{ width: `${result.match}%` }}
                    />
                  </div>
                  <span className="font-bold text-white text-xs">Совпадение: {result.match}%</span>
                </div>
              </motion.div>
            )}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={visible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gradient-surface rounded-2xl p-8 md:p-10 border border-brand-100 h-full flex flex-col justify-center"
          >
            <Clock className="w-12 h-12 text-brand-400 mb-4" />
            <h3 className="font-display text-lg md:text-xl font-bold text-brand-800 mb-3">
              Не знаешь, что выбрать?
            </h3>
            <p className="text-brand-600 text-sm md:text-base leading-relaxed">
              Калькулятор профориентации определит, какая специальность подходит именно тебе.
              Просто выбери варианты слева и получи рекомендацию.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
