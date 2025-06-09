import { HomeModernIcon , ShieldCheckIcon , BanknotesIcon  } from '@heroicons/react/20/solid'

const featuresData = [
  {
    name: 'Lokale o powierzchni 100–120 m².',
    description:
      'Każdy segment posiada własny ogródek, taras i 2 miejsca postojowe, z możliwością budowy wiaty lub garażu.',
    icon: HomeModernIcon ,
  },
  {
    name: 'Wysoki standard deweloperski.',
    description: 'W cenie m.in. ogrzewanie podłogowe, instalacja wod-kan, elektryka, tynki, wylewki oraz przygotowanie pod fotowoltaikę i rekuperację.',
    icon: ShieldCheckIcon ,
  },
  {
    name: 'Przemyślana lokalizacja.',
    description: 'W pobliżu szkoła, przedszkole, sklepy i komunikacja miejska – idealne miejsce dla rodzin i osób ceniących spokój.',
    icon: BanknotesIcon ,
  },
]

export default function ProjectInfo() {
  return (
    <div className="overflow-hidden bg-white py-24 sm:py-32"  id="informacje_o_projekcie">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="flex items-start justify-start ">
            <img
              alt="Product screenshot"
              src="./imgs/W2_Photo - 3.png"
              width={2432}
              height={1442}
              className="w-3xl max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-228"
            />
          </div>
          <div className="lg:mr-auto lg:pt-4 lg:pr-4  lg:order-first">
            <div className="lg:max-w-lg">
              <h2 className="text-base/7 font-semibold text-[#BEA67D]">Komfort, energooszczędność i spokój na lata</h2>
              <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
                Informacje o inwesycji
              </p>
              <p className="mt-6 text-lg/8 text-gray-600">
               Inwestycja obejmuje<b> 5 budynków w zabudowie bliźniaczej – łącznie 10 komfortowych lokali</b> mieszkalnych. Osiedle zlokalizowane jest w spokojnej, zielonej okolicy z dogodnym dojazdem do miasta.
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
        
        </div>
      </div>
    </div>
  )
}
