const featuredTestimonial = {
  body: 'Zdecydowanie polecam! Firma Hat-Bud zajęła się projektem domu, wybudowaniem, a na końcu odbiorem w urzędzie :) Dom został wybudowany w trybie ekspresowym i bardzo dokładnie, świetny kontakt z pracownikami i prezesem.',
  author: {
    name: 'Gabriela Rebizant',
    handle: '',
    imageUrl:
      'https://lh3.googleusercontent.com/a-/ALV-UjUc405JX0i0T0DqnDOXY86CwQOK0jwrUcgMsrTYYyg5R4FuWtc9CQ=s128-c0x00000000-cc-rp-mo-ba3',
  },
}
const testimonials = [
  [
    [
      {
        body: 'Zaprojektowali oraz wykonali dla mnie budowę dwóch domków letniskowych pod klucz (na chwilę obecną zleciłem firmie wykonanie kolejnego)',
        author: {
          name: 'Jakub Długosz',
        },
      },
      // More testimonials...
    ],
    [
      {
        body: 'Bardzo profesjonalna i solidna firma. Profesjonalne podejście do tematu, szybka i terminowa realizacja. Efekt końcowy dokładnie taki jak sobie założyliśmy, zgodny z wcześniejszą wizualizacją, a nawet bym powiedział, że jeszcze lepszy. Zdecydowanie POLECAM!',
        author: {
          name: 'Wojciech Jakubiec',
        },
      },
      // More testimonials...
    ],
  ],
  [
    [
      {
        body: 'Bardzo solidna firma, z ogromnym doświadczeniem w budowaniu domów drewnianych. Projekt został zrealizowany zgodnie ze wszystkimi ustaleniami. Zawsze służyli pomocą w razie pytań i wątpliwości. Bardzo polecam tę firmę!',
        author: {
          name: 'Ilona Majer',
        },
      },
      // More testimonials...
    ],
    [
      {
        body: 'Firmę wybraliśmy z polecenia znajomych. Profesjonalne i jednocześnie uprzejme podejście do klienta, na każdym etapie budowy stały kontakt. Wszystkie detale szczegółowo omówione, to na czym się nie znamy dokładnie wytłumaczone, dzięki temu efekt finalny nawet przerósł nasze oczekiwania.',
        author: {
          name: 'Klaudia',
        },
      },
      // More testimonials...
    ],
  ],
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Testimonials() {
  return (
    <div className="relative isolate bg-white pt-24 pb-32 sm:pt-32">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-1/2 -z-10 -translate-y-1/2 transform-gpu overflow-hidden opacity-30 blur-3xl"
      >
        <div
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
          className="ml-[max(50%,38rem)] aspect-1313/771 w-328.25 bg-linear-to-tr from-[#ff80b5] to-[#BEA67D]"
        />
      </div>
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 -z-10 flex transform-gpu overflow-hidden pt-32 opacity-25 blur-3xl sm:pt-40 xl:justify-end"
      >
        <div
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
          className="ml-[-22rem] aspect-1313/771 w-328.25 flex-none origin-top-right rotate-30 bg-linear-to-tr from-[#ff80b5] to-[#BEA67D] xl:mr-[calc(50%-12rem)] xl:ml-0"
        />
      </div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-base/7 font-semibold text-[#333333]">Co mówią nasi klienci</h2>
          <p className="mt-2 text-4xl font-semibold tracking-tight text-balance text-gray-900 sm:text-5xl">
            Opinie osób, które zrealizowały z nami swoje marzenia o własnym domu.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 grid-rows-1 gap-8 text-sm/6 text-gray-900 sm:mt-20 sm:grid-cols-2 xl:mx-0 xl:max-w-none xl:grid-flow-col xl:grid-cols-4">
          <figure className="rounded-2xl bg-white shadow-lg ring-1 ring-gray-900/5 sm:col-span-2 xl:col-start-2 xl:row-end-1">
            <blockquote className="p-6 text-lg font-semibold tracking-tight text-gray-900 sm:p-12 sm:text-xl/8">
              <p>{`“${featuredTestimonial.body}”`}</p>
            </blockquote>
            <figcaption className="flex flex-wrap items-center gap-x-4 gap-y-4 border-t border-gray-900/10 px-6 py-4 sm:flex-nowrap">
              <img
                alt=""
                src={featuredTestimonial.author.imageUrl}
                className="size-10 flex-none rounded-full bg-gray-50"
              />
              <div className="flex-auto">
                <div className="font-semibold">{featuredTestimonial.author.name}</div>
              </div>
              <img alt="" src={featuredTestimonial.author.logoUrl} className="h-10 w-auto flex-none" />
            </figcaption>
          </figure>
          {testimonials.map((columnGroup, columnGroupIdx) => (
            <div key={columnGroupIdx} className="space-y-8 xl:contents xl:space-y-0">
              {columnGroup.map((column, columnIdx) => (
                <div
                  key={columnIdx}
                  className={classNames(
                    (columnGroupIdx === 0 && columnIdx === 0) ||
                      (columnGroupIdx === testimonials.length - 1 && columnIdx === columnGroup.length - 1)
                      ? 'xl:row-span-2'
                      : 'xl:row-start-1',
                    'space-y-8',
                  )}
                >
                  {column.map((testimonial, key) => (
                    <figure
                      key={key}
                      className="rounded-2xl bg-white p-6 shadow-lg ring-1 ring-gray-900/5"
                    >
                      <blockquote className="text-gray-900">
                        <p>{`“${testimonial.body}”`}</p>
                      </blockquote>
                      <figcaption className="mt-6 flex items-center gap-x-4">
                        {testimonial.author.imageUrl && (
                          <img alt="" src={testimonial.author.imageUrl} className="size-10 rounded-full bg-gray-50" />
                        )}
                        <div>
                          <div className="font-semibold">{testimonial.author.name}</div>
                        </div>
                      </figcaption>
                    </figure>
                  ))}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
