import { HomeModernIcon , ShieldCheckIcon , BanknotesIcon  } from '@heroicons/react/20/solid'

const featuresData = [
  {
    name: 'Gotowe do zamieszkania.',
    description:
      'Domy są wykończone w standardzie deweloperskim z dbałością o detale – wystarczy dodać swoje meble i możesz się wprowadzać.',
    icon: HomeModernIcon ,
  },
  {
    name: 'Bezpieczeństwo i komfort.',
    description: 'Nowoczesne technologie, ocieplenie i przemyślane rozplanowanie gwarantują oszczędność energii i spokojne użytkowanie.',
    icon: ShieldCheckIcon ,
  },
  {
    name: 'Stabilna inwestycja.',
    description: 'Nasze realizacje wyróżniają się trwałością i rosnącą wartością – to pewna lokata kapitału dla Ciebie i Twojej rodziny.',
    icon: BanknotesIcon ,
  },
]

export default function Fature() {
  return (
    <div className="overflow-hidden bg-white py-24 sm:py-32" id="o_firmie">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:ml-auto lg:pt-4 lg:pl-4">
            <div className="lg:max-w-lg">
              <h2 className="text-base/7 font-semibold text-[#BEA67D]">Sprawdzona jakość, szybka realizacja</h2>
              <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
                Dlaczego warto wybrać Hat-Bud?
              </p>
              <p className="mt-6 text-lg/8 text-gray-600">
               W Hat-Bud stawiamy na solidne wykonanie, nowoczesne rozwiązania i terminowość. Tworzymy domy, które zachwycają estetyką i są funkcjonalne na co dzień – od projektu aż po wykończenie.
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base/7 text-gray-600 lg:max-w-none">
                {featuresData.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900">
                      <feature.icon aria-hidden="true" className="absolute top-1 left-1 size-5 text-[#BEA67D]" />
                      {feature.name}
                    </dt>{' '}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <div className="flex items-start justify-end lg:order-first">
            <img
              alt="Product screenshot"
              src="./imgs/W2_Photo - 8.png"
              width={2432}
              height={1442}
              className="w-3xl max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-228"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
