const svedeniyaStyle = { background: "#fff" };

export function Svedeniya() {
  const reqs = [
    ["Полное наименование:", "ГАПОУ КК КИТТ"],
    ["ИНН:", "2311025450"],
    ["КПП:", "231101001"],
    ["ОГРН:", "1022301820947"],
    ["Юридический адрес:", "г. Краснодар, ул. Московская, 81"],
    ["ОКВЭД:", "85.21"],
  ];

  return (
    <section id="svedeniya" className="section-padding" style={svedeniyaStyle}>
      <div className="section-container">
        <div className="text-center mb-10 md:mb-16">
          <div className="section-label section-label-center">Сведения об организации</div>
          <h2 className="section-title">Официальная информация</h2>
          <p className="section-subtitle mx-auto">Документы, реквизиты и нормативная база</p>
        </div>

        <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
          <div className="card p-6 md:p-8">
            <h3 className="font-display text-base md:text-lg font-bold text-brand-800 mb-4">Реквизиты</h3>
            <div className="grid grid-cols-[auto_1fr] gap-x-4 gap-y-2 text-sm">
              {reqs.map(([k, v]) => (
                <>
                  <span className="text-brand-500 whitespace-nowrap">{k}</span>
                  <span className="font-medium text-brand-800">{v}</span>
                </>
              ))}
            </div>
          </div>

          <div className="card p-6 md:p-8">
            <h3 className="font-display text-base md:text-lg font-bold text-brand-800 mb-4">Документы</h3>
            <ul className="flex flex-col gap-2.5">
              {[
                ["Официальный сайт на Госвебе", "https://tech-kitt-r03.gosweb.gosuslugi.ru/"],
                ["Сведения об образовательной организации", "https://tech-kitt-r03.gosweb.gosuslugi.ru/svedeniya-ob-organizatsii/"],
                ["Противодействие коррупции", "https://tech-kitt-r03.gosweb.gosuslugi.ru/protivodeystvie-korruptsii/"],
              ].map(([label, href]) => (
                <li key={label}>
                  <a href={href} target="_blank" rel="noopener noreferrer"
                     className="text-sm font-medium text-brand-600 hover:text-brand-500 transition-colors flex items-center gap-2">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
