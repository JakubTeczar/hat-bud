const faqs = [
  {
    id: 1,
    question: "Czy są dodatkowe koszty?",
    answer:
      "Wszystko, co zawieramy w umowie jest wliczone w koszt budowy. Doprowadzamy budowę do stanu deweloperskiego. Dodatkowe koszty mogą obejmować:  uzyskanie pozwolenia na budowę, przygotowanie terenu pod budowę, podłączenie do mediów, wykończenie wnętrza. ",
  },
    {
    id: 2,
    question: "Jak wygląda kwestia przyłączeń i mediów?",
    answer:
      "Wszystkie domy mają wykonane przyłącza do sieci wodociągowej, kanalizacyjnej, gazowej oraz energetycznej. Dodatkowo przygotowana jest infrastruktura pod Internet światłowodowy.",
  },
    {
    id: 3,
    question: "Czy inwestycja posiada drogę dojazdową i miejsca parkingowe?",
    answer:
      "Tak, droga wewnętrzna jest utwardzona i oświetlona, a do każdego domu przynależą dwa miejsca parkingowe – w tym możliwość budowy wiaty lub garażu",
  },
    {
    id: 4,
    question: "Jakie są miesięczne koszty utrzymania domu?",
    answer:
      "Dzięki nowoczesnym technologiom, takim jak ocieplenie pianą PUR i energooszczędne okna, miesięczne koszty ogrzewania są bardzo niskie – średnio 200–300 zł zimą przy standardowym użytkowaniu.",
  },
  // More questions...
]





export default function Faq() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:py-40">
        <h2 className="text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">Często zadawne pytania</h2>
        <dl className="mt-20 divide-y divide-gray-900/10">
          {faqs.map((faq) => (
            <div key={faq.id} className="py-8 first:pt-0 last:pb-0 lg:grid lg:grid-cols-12 lg:gap-8">
              <dt className="text-base/7 font-semibold text-gray-900 lg:col-span-5">{faq.question}</dt>
              <dd className="mt-4 lg:col-span-7 lg:mt-0">
                <p className="text-base/7 text-gray-600">{faq.answer}</p>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  )
}
