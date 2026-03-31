const services = [
  { name: "Маникюр без покритие", bgn: "25 лв", eur: "13 €" },
  { name: "Гел лак - къси нокти", bgn: "40 лв", eur: "20 €" },
  { name: "Гел лак - дълги нокти", bgn: "45 лв", eur: "23 €" },
  { name: "Гел + Гел лак - къси", bgn: "55 лв", eur: "28 €" },
  { name: "Гел + Гел лак - дълги", bgn: "60 лв", eur: "31 €" },
  { name: "Изграждане с гел", bgn: "90-100 лв", eur: "46-51 €" },
  { name: "Изграждане вграден френски", bgn: "120 лв", eur: "61 €" },
  { name: "Изграждане счупен нокът", bgn: "5 лв", eur: "3 €" },
  { name: "Поправка счупен нокът", bgn: "3 лв", eur: "2 €" },
  { name: "Френски маникюр", bgn: "5 лв", eur: "3 €" },
  { name: "Декорация (камъчета, стикери)", bgn: "5 лв", eur: "3 €" },
  { name: "Парафинова терапия", bgn: "20 лв", eur: "10 €" },
  { name: "IBX терапия", bgn: "25 лв", eur: "13 €" },
];

const gallery = [1, 2, 3, 4, 5, 6];

export default function Home() {
  return (
    <main className="bg-[#fffaf8] text-zinc-900">
      <header className="sticky top-0 z-10 border-b border-[#f2d8d0] bg-[#fffaf8]/95 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <p className="text-xl font-semibold tracking-tight">Nails Room</p>
          <nav className="hidden gap-6 text-sm md:flex">
            <a href="#about" className="hover:text-rose-500">
              За Румяна
            </a>
            <a href="#services" className="hover:text-rose-500">
              Услуги
            </a>
            <a href="#gallery" className="hover:text-rose-500">
              Галерия
            </a>
            <a href="#booking" className="hover:text-rose-500">
              Запази час
            </a>
          </nav>
        </div>
      </header>

      <section className="mx-auto grid max-w-6xl gap-8 px-6 py-20 md:grid-cols-2 md:py-28">
        <div>
          <p className="mb-4 text-sm uppercase tracking-[0.28em] text-rose-500">
            Бургас - Маникюр & Нокти
          </p>
          <h1 className="text-5xl font-bold leading-tight md:text-6xl">
            Красотата е в <span className="text-rose-500">детайлите</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg text-zinc-600">
            Добре дошли в Nails Room - студио за маникюр с уютна атмосфера,
            внимание към всеки детайл и любов към занаята.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#booking"
              className="rounded-full bg-rose-500 px-6 py-3 font-medium text-white hover:bg-rose-600"
            >
              Запази час
            </a>
            <a
              href="#services"
              className="rounded-full border border-zinc-300 px-6 py-3 font-medium hover:border-rose-500 hover:text-rose-500"
            >
              Нашите услуги
            </a>
          </div>
        </div>
        <div className="rounded-3xl bg-gradient-to-br from-rose-100 to-orange-100 p-8 shadow-sm">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-500">
            Nails Room
          </p>
          <p className="mt-4 text-2xl font-semibold">
            Уютна атмосфера, лично отношение и прецизна грижа за всеки нокът.
          </p>
          <p className="mt-6 text-zinc-600">
            ул. "Цар Калоян" 63, Бургас
            <br />
            +359 894 714 546
          </p>
        </div>
      </section>

      <section id="about" className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-3xl font-bold md:text-4xl">
          Майстор на <span className="text-rose-500">нокътното изкуство</span>
        </h2>
        <p className="mt-5 max-w-4xl leading-8 text-zinc-700">
          Зад Nails Room стои Румяна - маникюрист с над 6 години опит и страст
          към перфекцията. Всяка клиентка получава пълно внимание, професионална
          хигиена и грижа за здравето на ноктите.
        </p>
        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          <StatCard value="6+" label="Години опит" />
          <StatCard value="500+" label="Доволни клиентки" />
          <StatCard value="100%" label="Лично внимание" />
        </div>
      </section>

      <section id="services" className="bg-[#fff1ec] py-16">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-3xl font-bold md:text-4xl">
            Нашите <span className="text-rose-500">услуги</span>
          </h2>
          <p className="mt-3 text-zinc-600">
            Курс: 1 лв = 0.51 € (фиксиран БНБ курс)
          </p>
          <div className="mt-8 overflow-hidden rounded-2xl border border-rose-100 bg-white">
            <div className="grid grid-cols-[1fr_auto_auto] bg-rose-50 px-5 py-3 text-sm font-semibold text-zinc-700">
              <span>Услуга</span>
              <span className="w-20 text-right">лв</span>
              <span className="w-20 text-right">€</span>
            </div>
            {services.map((item) => (
              <div
                key={item.name}
                className="grid grid-cols-[1fr_auto_auto] border-t border-zinc-100 px-5 py-3 text-sm md:text-base"
              >
                <span>{item.name}</span>
                <span className="w-20 text-right font-medium">{item.bgn}</span>
                <span className="w-20 text-right text-zinc-500">{item.eur}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="gallery" className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-3xl font-bold md:text-4xl">
          Работата на <span className="text-rose-500">Румяна</span>
        </h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
          {gallery.map((item) => (
            <div
              key={item}
              className="aspect-square rounded-2xl bg-gradient-to-br from-rose-100 via-pink-50 to-orange-100 p-5"
            >
              <div className="flex h-full items-end rounded-xl border border-white/80 bg-white/50 p-4 text-sm text-zinc-600">
                Снимка {item}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="booking" className="bg-zinc-950 py-16 text-zinc-100">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold md:text-4xl">
              Запазете своя <span className="text-rose-400">час</span>
            </h2>
            <p className="mt-5 text-zinc-300">
              Попълнете формата и ще получите потвърждение до 2 часа.
            </p>
            <p className="mt-8 text-zinc-300">
              ул. "Цар Калоян" 63, гр. Бургас
              <br />
              +359 894 714 546
              <br />
              Пон-Пет: 09:00-19:00 | Съб: 09:00-16:00
            </p>
          </div>
          <form className="space-y-4 rounded-2xl border border-zinc-800 bg-zinc-900 p-6">
            <input className="field" placeholder="Вашето име" />
            <input className="field" placeholder="Телефон" />
            <input className="field" placeholder="Имейл (по желание)" />
            <select className="field">
              <option>Изберете услуга</option>
              {services.map((item) => (
                <option key={item.name}>{`${item.name} - ${item.bgn}`}</option>
              ))}
            </select>
            <input className="field" type="date" />
            <select className="field">
              <option>Предпочитан час</option>
              <option>09:00</option>
              <option>10:00</option>
              <option>11:00</option>
              <option>12:00</option>
              <option>13:00</option>
              <option>14:00</option>
              <option>15:00</option>
              <option>16:00</option>
              <option>17:00</option>
              <option>18:00</option>
            </select>
            <textarea className="field min-h-24" placeholder="Бележка" />
            <button
              type="button"
              className="w-full rounded-xl bg-rose-500 px-5 py-3 font-medium text-white hover:bg-rose-600"
            >
              Изпрати заявката
            </button>
          </form>
        </div>
      </section>

      <footer className="border-t border-zinc-200 bg-white py-8">
        <div className="mx-auto max-w-6xl px-6 text-sm text-zinc-600">
          © 2025 Nails Room · Румяна · Всички права запазени
        </div>
      </footer>
    </main>
  );
}

function StatCard({ value, label }) {
  return (
    <article className="rounded-2xl border border-rose-100 bg-white p-5">
      <p className="text-3xl font-bold text-rose-500">{value}</p>
      <p className="mt-2 text-zinc-600">{label}</p>
    </article>
  );
}
