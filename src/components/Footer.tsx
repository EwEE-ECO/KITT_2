import { useRef, useCallback } from "react";

function EasterEgg() {
  const countRef = useRef(0);
  const handleClick = useCallback(() => {
    countRef.current++;
    if (countRef.current >= 20) {
      countRef.current = 0;
      window.open("https://ewee-eco.github.io/EwEE/", "_blank");
    }
  }, []);
  return (
    <span className="text-[11px] text-white/20 tracking-wider hover:text-white/40 transition-colors" onClick={handleClick}>
      by EwEE
    </span>
  );
}

export function Footer() {
  return (
    <footer className="bg-brand-800 text-white">
      <div className="section-container pt-12 md:pt-16 pb-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr] gap-8 lg:gap-12 mb-8 lg:mb-12">
          <div>
            <div className="flex items-center gap-2.5 font-display font-extrabold text-base md:text-lg mb-3">
              <img
                src="https://tech-kitt-r03.gosweb.gosuslugi.ru/netcat_files/generated/catalogue/1/40x40/1/9a4a05ee513367f71bc5b4c397633696.png"
                alt=""
                className="w-7 h-7 rounded-md"
              />
              ГАПОУ КК КИТТ
            </div>
            <p className="text-sm text-white/50 leading-relaxed max-w-xs">
              Краснодарский информационно-технологический техникум. Государственное
              образовательное учреждение среднего профессионального образования.
            </p>
          </div>

          <div>
            <h4 className="text-xs font-semibold text-white/40 uppercase tracking-widest mb-3">Основное</h4>
            <div className="flex flex-col gap-1.5">
              {["#about", "#specialties", "#students", "#admissions"].map((h, i) => (
                <a key={h} href={h} onClick={(e) => { e.preventDefault(); document.querySelector(h)?.scrollIntoView({ behavior: "smooth" }); }}
                   className="text-sm text-white/60 hover:text-white transition-colors">
                  {["О нас", "Специальности", "Студентам", "Поступление"][i]}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-xs font-semibold text-white/40 uppercase tracking-widest mb-3">Информация</h4>
            <div className="flex flex-col gap-1.5">
              <a href="#contacts" onClick={(e) => { e.preventDefault(); document.querySelector("#contacts")?.scrollIntoView({ behavior: "smooth" }); }}
                 className="text-sm text-white/60 hover:text-white transition-colors">Контакты</a>
              <a href="#svedeniya" onClick={(e) => { e.preventDefault(); document.querySelector("#svedeniya")?.scrollIntoView({ behavior: "smooth" }); }}
                 className="text-sm text-white/60 hover:text-white transition-colors">Сведения об ОО</a>
              <a href="https://tech-kitt-r03.gosweb.gosuslugi.ru/" target="_blank" rel="noopener noreferrer"
                 className="text-sm text-white/60 hover:text-white transition-colors">Официальный сайт</a>
              <a href="https://vk.com/kitt_kk" target="_blank" rel="noopener noreferrer"
                 className="text-sm text-white/60 hover:text-white transition-colors">ВКонтакте</a>
            </div>
          </div>

          <div>
            <h4 className="text-xs font-semibold text-white/40 uppercase tracking-widest mb-3">Контакты</h4>
            <div className="flex flex-col gap-1.5">
              <span className="text-sm text-white/60">(861) 252-03-83</span>
              <span className="text-sm text-white/60">kitt-kk@mail.ru</span>
              <span className="text-sm text-white/60">г. Краснодар, ул. Московская, 81</span>
              <span className="text-sm text-white/60">Пн–Пт: 09:00–17:00</span>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-5 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-xs text-white/30">&copy; {new Date().getFullYear()} ГАПОУ КК КИТТ</p>
          <div className="flex gap-3">
            <a href="https://vk.com/kitt_kk" target="_blank" rel="noopener noreferrer"
               className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center hover:bg-white/20 transition-all hover:-translate-y-0.5" aria-label="ВКонтакте">
              <svg viewBox="0 0 100 100" className="w-4 h-4 fill-white/60"><path d="M64.187,2.5H35.906C9.404,2.5,2.544,9.349,2.544,35.81v28.28C1.294,104.818,26.701,96.349,57.3,97.45c1.822-0.049,1.818-2.724,0-2.766c0,0-21.442,0-21.442,0c-25.124,0-30.548-5.433-30.548-30.593V35.81c0-25.121,5.433-30.545,30.596-30.545c62.559-0.297,59.11-3.671,58.828,58.873c0,25.122-5.433,30.545-30.595,30.545c-1.818,0.018-1.813,2.744,0,2.766c26.502,0,33.361-6.849,33.361-33.311V35.859C97.5,9.359,90.651,2.5,64.187,2.5z"/><path d="M56.998,60.095c1.543-0.376,7.289,5.328,8.87,7.297c2.045,2.276,3.279,3.65,5.679,3.65h6.723c1.872,0,2.812-0.741,3.271-1.362c1.998-3.219-1.622-6.905-5.575-11.62c-1.359-1.758-4.024-3.686-4.936-5.405c4.777-7.845,15.256-20.582,6.28-20.867c0,0-6.722,0-6.722,0c-1.377,0-3.224,0.479-4.21,2.78c-0.033,0.082-3.379,8.199-7.956,13.278c-1.314,1.221-1.928,2.011-1.817,1.122c0,0,0-8.667,0-8.667c-0.025-1.808-2.736-1.824-2.766,0c0,0,0,8.667,0,8.667c0,2.269,1.264,3.303,2.439,3.303c5.929-0.51,12.798-17.014,12.651-16.634c0.293-0.685,0.659-1.082,1.658-1.082h6.722c0.532,0,0.78,0.096,0.778,0.063c0.013,0.044,0.024,0.239-0.086,0.606c0.074,0.506-2.188,5.687-8.857,15.152c-2.978,3.658,2.538,6.646,4.728,9.494c1.527,1.815,7.962,8.823,4.398,8.409c0,0-6.723,0-6.723,0c-1.117,0-1.716-0.611-3.622-2.733c-2.931-3.488-8.448-8.636-10.927-8.213c-2.776,0-3.159,1.772-3.159,3.687v6.049c0,0.728,0,1.21-3.418,1.21c-7.009,0-14.25-4.374-19.379-11.713C22.597,44.772,20.689,36.18,20.689,35.09c0-0.763-0.619-1.383-1.383-1.383c-4.118-0.127,2.135,14.198,9.477,24.453c5.638,8.066,13.726,12.881,21.637,12.881c3.712,0,6.184-0.676,6.184-3.975v-6.049C56.661,60.267,56.474,60.042,56.998,60.095z"/></svg>
            </a>
          </div>
        </div>
        <div className="text-center pt-4 mt-4 border-t border-white/5 cursor-pointer">
          <EasterEgg />
        </div>
      </div>
    </footer>
  );
}
