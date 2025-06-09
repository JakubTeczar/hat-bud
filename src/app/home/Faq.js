const faqs = [
   {
    id: 1,
    question: "Dane na temat inwestycji",
    answer:
      "Informacja.",
  },
  {
    id: 2,
    question: "Prezentacja projektu",
    answer:
      "Przedstawimy wizualizacje, rzuty domów oraz pełny opis standardu wykończenia i harmonogram realizacji.",
  },
  {
    id: 3,
    question: "Rezerwacja segmentu",
    answer:
      "Wybierz interesujący Cię segment i podpisz umowę rezerwacyjną. Zabezpieczysz tym samym swoją lokalizację.",
  },
  {
    id: 4,
    question: "Ustalenie finansowania",
    answer:
      "W razie potrzeby skontaktujemy Cię z doradcą kredytowym, który pomoże w uzyskaniu finansowania.",
  },
  {
    id: 5,
    question: "Podpisanie umowy deweloperskiej",
    answer:
      "Po skompletowaniu dokumentów podpisujemy umowę deweloperską w formie aktu notarialnego.",
  },
  {
    id: 6,
    question: "Realizacja budowy",
    answer:
      "Na bieżąco informujemy o postępach prac. Inwestycja zostanie zrealizowana zgodnie z harmonogramem.",
  },
  {
    id: 7,
    question: "Odbiór i przekazanie domu",
    answer:
      "Po zakończeniu budowy przeprowadzamy odbiór techniczny i przekazujemy klucze do Twojego nowego domu.",
  },
  // More questions...
]





export default function Faq() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:py-40">
        <h2 className="text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">Informacje szczegółowe</h2>
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
