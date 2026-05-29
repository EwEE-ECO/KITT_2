import { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle, ExternalLink } from "lucide-react";
import { useReveal } from "../hooks/useReveal";
import { specialties } from "../data/site";

const items = [
  "Приём на базе 9 и 11 классов",
  "Вступительные испытания не проводятся",
  "Бюджетные и внебюджетные места",
  "Диплом государственного образца",
  "Стипендия и льготы",
];

export function Admissions() {
  const { ref, visible } = useReveal();
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", email: "", specialty: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.phone.trim()) {
      alert("Заполните ФИО и телефон.");
      return;
    }
    setSubmitted(true);
  };

  return (
    <section id="admissions" className="section-padding bg-gradient-surface">
      <div className="section-container">
        <div ref={ref} className="text-center mb-10 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={visible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="section-label section-label-center">Поступление</div>
            <h2 className="section-title">Как поступить в КИТТ</h2>
            <p className="section-subtitle mx-auto">Приём на бюджетной основе. Вступительные испытания не проводятся.</p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-[1fr_1fr] gap-8 md:gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={visible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="font-display text-xl md:text-2xl font-bold text-brand-800 mb-4">Условия приёма</h3>
            <ul className="flex flex-col gap-3 mb-6">
              {items.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm md:text-base text-brand-600">
                  <CheckCircle className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
            <a
              href="https://www.gosuslugi.ru/help/faq/college/10101011"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline inline-flex"
            >
              Как подать заявление на Госуслугах <ExternalLink className="w-4 h-4" />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={visible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {!submitted ? (
              <form
                onSubmit={handleSubmit}
                className="card p-6 md:p-10 shadow-lg border-brand-200"
              >
                <h3 className="font-display text-lg md:text-xl font-bold text-brand-800 mb-6">
                  Предварительная заявка
                </h3>

                <div className="grid sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-xs font-semibold text-brand-500 mb-1.5">ФИО *</label>
                    <input
                      type="text"
                      value={form.name}
                      onChange={(e) => setForm((p) => ({ ...p, name: e.target.value }))}
                      required
                      placeholder="Иванов Иван Иванович"
                      className="w-full px-3.5 py-2.5 rounded-lg border-2 border-brand-200 text-sm focus:border-brand-500 focus:ring-2 focus:ring-brand-500/10 outline-none transition-all bg-white text-brand-900 placeholder:text-brand-300"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-brand-500 mb-1.5">Телефон *</label>
                    <input
                      type="tel"
                      value={form.phone}
                      onChange={(e) => setForm((p) => ({ ...p, phone: e.target.value }))}
                      required
                      placeholder="+7 (999) 123-45-67"
                      className="w-full px-3.5 py-2.5 rounded-lg border-2 border-brand-200 text-sm focus:border-brand-500 focus:ring-2 focus:ring-brand-500/10 outline-none transition-all bg-white text-brand-900 placeholder:text-brand-300"
                    />
                  </div>
                </div>

                <div className="mb-4">
                  <label className="block text-xs font-semibold text-brand-500 mb-1.5">Email</label>
                  <input
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm((p) => ({ ...p, email: e.target.value }))}
                    placeholder="ivan@example.com"
                    className="w-full px-3.5 py-2.5 rounded-lg border-2 border-brand-200 text-sm focus:border-brand-500 focus:ring-2 focus:ring-brand-500/10 outline-none transition-all bg-white text-brand-900 placeholder:text-brand-300"
                  />
                </div>

                <div className="mb-4">
                  <label className="block text-xs font-semibold text-brand-500 mb-1.5">Интересующая специальность</label>
                  <select
                    value={form.specialty}
                    onChange={(e) => setForm((p) => ({ ...p, specialty: e.target.value }))}
                    className="w-full px-3.5 py-2.5 rounded-lg border-2 border-brand-200 text-sm focus:border-brand-500 focus:ring-2 focus:ring-brand-500/10 outline-none transition-all bg-white text-brand-900"
                  >
                    <option value="">Выберите</option>
                    {specialties.map((s) => (
                      <option key={s.code} value={s.code}>{s.code} {s.name}</option>
                    ))}
                  </select>
                </div>

                <div className="mb-6">
                  <label className="block text-xs font-semibold text-brand-500 mb-1.5">Вопрос</label>
                  <textarea
                    value={form.message}
                    onChange={(e) => setForm((p) => ({ ...p, message: e.target.value }))}
                    placeholder="Ваш вопрос..."
                    rows={3}
                    className="w-full px-3.5 py-2.5 rounded-lg border-2 border-brand-200 text-sm focus:border-brand-500 focus:ring-2 focus:ring-brand-500/10 outline-none transition-all bg-white text-brand-900 placeholder:text-brand-300 resize-y"
                  />
                </div>

                <button type="submit" className="btn btn-primary btn-lg w-full">Отправить заявку</button>
                <p className="text-xs text-brand-400 mt-3 text-center">
                  Нажимая «Отправить», вы соглашаетесь на обработку персональных данных
                </p>
              </form>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="card p-10 md:p-16 text-center shadow-lg"
              >
                <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                <h4 className="text-xl font-bold text-brand-800 mb-2">Спасибо за заявку!</h4>
                <p className="text-brand-500 mb-6">Мы свяжемся с вами в ближайшее время.</p>
                <button onClick={() => { setSubmitted(false); setForm({ name: "", phone: "", email: "", specialty: "", message: "" }); }} className="btn btn-outline">
                  Отправить ещё
                </button>
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
