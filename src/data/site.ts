export interface Specialty {
  code: string;
  name: string;
  qual: string;
  duration: string;
  type: "Специальность" | "Профессия";
  base: string;
}

export interface CalcResult {
  match: number;
  recs: string[];
}

export const specialties: Specialty[] = [
  { code: "09.01.01", name: "Наладчик аппаратного и программного обеспечения", qual: "Наладчик технологического оборудования", duration: "2 года 10 мес.", type: "Профессия", base: "9 кл." },
  { code: "09.01.03", name: "Мастер по обработке цифровой информации / Оператор ИС", qual: "Оператор ЭВМ / Оператор ИС", duration: "2 г. 10 мес. / 1 г. 10 мес.", type: "Профессия", base: "9 кл." },
  { code: "09.01.04", name: "Наладчик аппаратных и программных средств инфоком. систем", qual: "Наладчик компьютерных сетей", duration: "1 год 10 мес.", type: "Профессия", base: "9 кл." },
  { code: "16675", name: "Повар", qual: "Повар", duration: "10 мес.", type: "Профессия", base: "9 кл." },
  { code: "23.01.08", name: "Слесарь по ремонту строительных машин", qual: "Автослесарь. Электрогазосварщик", duration: "2 года 10 мес.", type: "Профессия", base: "9 кл." },
  { code: "38.02.07", name: "Банковское дело", qual: "Специалист банковского дела", duration: "2 г. 10 мес. / 1 г. 10 мес.", type: "Специальность", base: "9/11 кл." },
  { code: "23.02.03", name: "Техническое обслуживание и ремонт автомобильного транспорта", qual: "Техник", duration: "3 года 10 мес.", type: "Специальность", base: "9 кл." },
  { code: "23.02.05", name: "Эксплуатация транспортного электрооборудования и автоматики", qual: "Техник-электромеханик", duration: "3 года 10 мес.", type: "Специальность", base: "9 кл." },
  { code: "23.02.07", name: "Техническое обслуживание и ремонт двигателей, систем и агрегатов", qual: "Специалист", duration: "3 года 10 мес.", type: "Специальность", base: "9 кл." },
  { code: "09.02.06", name: "Сетевое и системное администрирование", qual: "Сетевой и системный администратор", duration: "3 года 10 мес.", type: "Специальность", base: "9 кл." },
  { code: "09.02.07", name: "Информационные системы и программирование", qual: "Программист", duration: "3 года 10 мес.", type: "Специальность", base: "9 кл." },
  { code: "08.02.09", name: "Монтаж, наладка и эксплуатация электрооборудования", qual: "Техник", duration: "3 года 10 мес.", type: "Специальность", base: "9 кл." },
];

export const calcMap: Record<string, CalcResult> = {
  it_code: { match: 95, recs: ["09.02.07", "09.02.06", "09.01.01", "09.01.03", "09.01.04"] },
  it_repair: { match: 90, recs: ["09.01.04", "09.01.01", "09.02.06"] },
  it_manage: { match: 85, recs: ["09.02.06", "09.02.07"] },
  it_create: { match: 80, recs: ["09.02.07", "09.01.03"] },
  auto_repair: { match: 95, recs: ["23.02.03", "23.02.07", "23.01.08", "23.02.05"] },
  auto_manage: { match: 85, recs: ["23.02.03", "23.02.07"] },
  auto_code: { match: 60, recs: ["09.02.06", "09.02.07"] },
  auto_create: { match: 70, recs: ["23.02.05", "23.02.07"] },
  bank_manage: { match: 95, recs: ["38.02.07"] },
  bank_code: { match: 70, recs: ["38.02.07", "09.02.07"] },
  bank_create: { match: 65, recs: ["38.02.07"] },
  bank_repair: { match: 40, recs: ["38.02.07"] },
  food_create: { match: 95, recs: ["16675"] },
  food_manage: { match: 75, recs: ["16675", "38.02.07"] },
  food_repair: { match: 45, recs: ["16675"] },
  food_code: { match: 35, recs: ["16675"] },
  electro_repair: { match: 95, recs: ["08.02.09", "23.02.05"] },
  electro_code: { match: 70, recs: ["08.02.09", "09.02.06"] },
  electro_manage: { match: 80, recs: ["08.02.09", "23.02.05"] },
  electro_create: { match: 85, recs: ["08.02.09", "23.02.05"] },
};

export interface NavLink {
  href: string;
  label: string;
}

export const navLinks: NavLink[] = [
  { href: "#about", label: "О нас" },
  { href: "#specialties", label: "Специальности" },
  { href: "#students", label: "Студентам" },
  { href: "#calculator", label: "Калькулятор" },
  { href: "#admissions", label: "Поступление" },
  { href: "#contacts", label: "Контакты" },
];

export interface ContactInfo {
  icon: string;
  label: string;
  value: string;
  href?: string;
}

export const contacts: ContactInfo[] = [
  { icon: "map-pin", label: "Адрес (главный корпус)", value: "г. Краснодар, ул. Московская, 81" },
  { icon: "phone", label: "Телефон", value: "(861) 252-03-83", href: "tel:+78612520383" },
  { icon: "mail", label: "Email", value: "kitt-kk@mail.ru", href: "mailto:kitt-kk@mail.ru" },
  { icon: "calendar", label: "Режим работы", value: "Пн–Пт: 09:00–17:00" },
  { icon: "users", label: "Корпуса", value: "ул. 1 Мая, 298А | ул. Бородинская, 150А" },
];
