"use client"
import { Fragment } from 'react'
import { CheckIcon, MinusIcon, PlusIcon } from '@heroicons/react/16/solid'
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react'

const tiers = [
  {
    name: 'Stan surowy zamknięty',
    description: '.',
    priceMonthly: '278 644 zł',
    href: '#',
    highlights: [
      { description: 'Szkielet budynku + ścianki działowe' },
      { description: 'Konstrukcja dachu' },
      { description: 'Poszycie z membraną wiatroizolacyjną (szczelnie klejoną)' },
      { description: 'Elewacja zewnętrzna'  },
      { description: 'Deska podbiciowa' },
    ],
  },
  {
    name: 'Stan zamknięty + ocieplenie',
    description: 'All the extras for your growing team.',
    priceMonthly: '402 547 zł',
    href: '#',
    highlights: [
      { description: 'Wszystko ze stanu surowego zamkniętego' },
      { description: 'Ocieplenie ścian' },
      { description: 'Membrana paroizolacyjna' },
      { description: 'Ruszt instalacyjny' },
    { description: 'Stolarka zewnętrzna' },
    ],
  },
  {
    name: 'Stan deweloperski',
    description: 'Stan deweloperski.',
    priceMonthly: '468 079 zł',
    href: '#',
    highlights: [
      { description: 'Wygłuszenie ścian wewnętrznych i stropów' },
      { description: 'Instalacje elektryczną' },
      { description: 'Instalacje wodno-kanalizacyjną' },
      { description: 'Instalacja CO' },
      { description: 'Podłogi: ocieplone, wykończone wylewką' },
    ],
  },
]
const sections = [
  {
    name: 'Konstrukcja',
    features: [
      { name: 'Szkielet + ściany działowe', tiers: { "Stan surowy zamknięty": true, "Stan zamknięty + ocieplenie": true, "Stan deweloperski": true } },
      { name: 'Konstrukcja dachu', tiers: { "Stan surowy zamknięty": true, "Stan zamknięty + ocieplenie": true, "Stan deweloperski": true } },
      { name: 'Membrana wiatroizolacyjna', tiers: { "Stan surowy zamknięty": true, "Stan zamknięty + ocieplenie": true, "Stan deweloperski": true } },
      { name: 'Elewacja zewnętrzna', tiers: { "Stan surowy zamknięty": true, "Stan zamknięty + ocieplenie": true, "Stan deweloperski": true } },
      { name: 'Deska podbiciowa', tiers: { "Stan surowy zamknięty": true, "Stan zamknięty + ocieplenie": true, "Stan deweloperski": true } },
      { name: 'Stolarka zewnętrzna (drzwi, okna)', tiers: { "Stan surowy zamknięty": true, "Stan zamknięty + ocieplenie": true, "Stan deweloperski": true } },
      { name: 'Obróbki blacharskie', tiers: { "Stan surowy zamknięty": true, "Stan zamknięty + ocieplenie": true, "Stan deweloperski": true } },
    ],
  },
  {
    name: 'Izolacja i przygotowanie',
    features: [
      { name: 'Wełna skalna w konstrukcji', tiers: { "Stan surowy zamknięty": false, "Stan zamknięty + ocieplenie": true, "Stan deweloperski": true } },
      { name: 'Paroizolacja', tiers: { "Stan surowy zamknięty": false, "Stan zamknięty + ocieplenie": true, "Stan deweloperski": true } },
      { name: 'Ruszt instalacyjny', tiers: { "Stan surowy zamknięty": false, "Stan zamknięty + ocieplenie": true, "Stan deweloperski": true } },
    ],
  },
  {
    name: 'Instalacje i wykończenie',
    features: [
      { name: 'Wygłuszenie ścian/stropów', tiers: { "Stan surowy zamknięty": false, "Stan zamknięty + ocieplenie": false, "Stan deweloperski": true } },
      { name: 'Instalacja elektryczna', tiers: { "Stan surowy zamknięty": false, "Stan zamknięty + ocieplenie": false, "Stan deweloperski": true } },
      { name: 'Instalacja wod-kan', tiers: { "Stan surowy zamknięty": false, "Stan zamknięty + ocieplenie": false, "Stan deweloperski": true } },
      { name: 'Instalacja CO', tiers: { "Stan surowy zamknięty": false, "Stan zamknięty + ocieplenie": false, "Stan deweloperski": true } },
      { name: 'Podłogi (wylewka/OSB)', tiers: { "Stan surowy zamknięty": false, "Stan zamknięty + ocieplenie": false, "Stan deweloperski": true } },
      { name: 'Ściany (płyta g-k)', tiers: { "Stan surowy zamknięty": false, "Stan zamknięty + ocieplenie": false, "Stan deweloperski": true } },
      { name: 'Właz strychowy / schody techniczne', tiers: { "Stan surowy zamknięty": false, "Stan zamknięty + ocieplenie": false, "Stan deweloperski": true } },
    ],
  },
];


export default function Options() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-4xl px-6 max-lg:text-center lg:max-w-7xl lg:px-8">
        <h1 className="text-5xl font-semibold tracking-tight text-balance text-gray-950 sm:text-6xl lg:text-pretty">
            Dopasuj stan wykończenia swojego domu.
        </h1>
        <p className="mt-6 max-w-2xl text-lg font-medium text-pretty text-gray-600 max-lg:mx-auto sm:text-xl/8">
          Wybierz jeden z dostępnych pakietów.
        </p>
      </div>
      <div className="relative pt-16 sm:pt-24">
        <div className="absolute inset-x-0 top-48 bottom-0  bg-[radial-gradient(circle_at_center_center,#BEA67D,#9B7E5C,#030712_20%)] lg:bg-[radial-gradient(circle_at_center_150%,#BEA67D,#9B7E5C,#030712_60%)]" />
        <div className="relative mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-3">
            {tiers.map((tier) => (
              <div
                key={tier.name}
                className="-m-2 grid grid-cols-1 rounded-4xl shadow-[inset_0_0_2px_1px_#ffffff4d] ring-1 ring-black/5 max-lg:mx-auto max-lg:w-full max-lg:max-w-md"
              >
                <div className="grid grid-cols-1 rounded-4xl p-2 shadow-md shadow-black/5">
                  <div className="rounded-3xl bg-white p-10 pb-9 shadow-2xl ring-1 ring-black/5">
                    <h2 className="text-lg font-semibold text-[#BEA67D]">
                      {tier.name} <span className="sr-only">plan</span>
                    </h2>
                    <div className="mt-8 flex items-center gap-4">
                      <div className="text-5xl font-semibold text-gray-950">{tier.priceMonthly}</div>
                    </div>
                    <div className="mt-8">
                      <a
                        href="#kontakt"
                        aria-label={`Start a free trial on the ${tier.name} plan`}
                        className="inline-block rounded-md bg-[#333] px-3.5 py-2 text-center text-sm/6 font-semibold text-white shadow-xs hover:bg-[#BEA67D] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#BEA67D]"
                      >
                        Złóż zapytanie
                      </a>
                    </div>
                    <div className="mt-8">
                      <h3 className="text-sm/6 font-medium text-gray-950">Zawiera:</h3>
                      <ul className="mt-3 space-y-3">
                        {tier.highlights.map((highlight) => (
                          <li
                            key={highlight.description}
                            data-disabled={highlight.disabled}
                            className="group flex items-start gap-4 text-sm/6 text-gray-600 data-disabled:text-gray-400"
                          >
                            <span className="inline-flex h-6 items-center">
                              <PlusIcon
                                aria-hidden="true"
                                className="size-4 fill-gray-400 group-data-disabled:fill-gray-300"
                              />
                            </span>
                            {highlight.disabled ? <span className="sr-only">Not included:</span> : null}
                            {highlight.description}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className='py-8'></div>
        </div>
      </div>
      <div className="mx-auto max-w-2xl px-6 pt-16 sm:pt-24 lg:max-w-7xl lg:px-8">
        <table className="w-full text-left max-sm:hidden">
          <caption className="sr-only">Pricing plan comparison</caption>
          <colgroup>
            <col className="w-2/5" />
            <col className="w-1/5" />
            <col className="w-1/5" />
            <col className="w-1/5" />
          </colgroup>
          <thead>
            <tr>
              <td className="p-0" />
              {tiers.map((tier) => (
                <th key={tier.name} scope="col" className="p-0">
                  <div className="text-sm font-semibold text-[#BEA67D]">
                    {tier.name} <span className="sr-only">plan</span>
                  </div>
                </th>
              ))}
            </tr>
            <tr>
              <th className="p-0" />
              {tiers.map((tier) => (
                <td key={tier.name} className="px-0 pt-3 pb-0">
                  <a
                    href="#kontakt"
                    aria-label={`Get started with the ${tier.name} plan`}
                    className="inline-block rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-xs ring-1 ring-gray-300 ring-inset hover:bg-gray-50"
                  >
                    Złóż zapytanie
                  </a>
                </td>
              ))}
            </tr>
          </thead>
          {sections.map((section) => (
            <tbody key={section.name} className="group">
              <tr>
                <th scope="colgroup" colSpan={4} className="px-0 pt-10 pb-0 group-first-of-type:pt-5">
                  <div className="-mx-4 rounded-lg bg-gray-50 px-4 py-3 text-sm/6 font-semibold text-gray-950">
                    {section.name}
                  </div>
                </th>
              </tr>
              {section.features.map((feature) => (
                <tr key={feature.name} className="border-b border-gray-100 last:border-none">
                  <th scope="row" className="px-0 py-4 text-sm/6 font-normal text-gray-600">
                    {feature.name}
                  </th>
                  {tiers.map((tier) => (
                    <td key={tier.name} className="p-4 max-sm:text-center">
                      {typeof feature.tiers[tier.name] === 'string' ? (
                        <>
                          <span className="sr-only">{tier.name} includes:</span>
                          <span className="text-sm/6 text-gray-950">{feature.tiers[tier.name]}</span>
                        </>
                      ) : (
                        <>
                          {feature.tiers[tier.name] === true ? (
                            <CheckIcon aria-hidden="true" className="inline-block size-4 fill-green-600" />
                          ) : (
                            <MinusIcon aria-hidden="true" className="inline-block size-4 fill-gray-400" />
                          )}

                          <span className="sr-only">
                            {feature.tiers[tier.name] === true
                              ? `Included in ${tier.name}`
                              : `Not included in ${tier.name}`}
                          </span>
                        </>
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          ))}
        </table>
        <TabGroup className="sm:hidden">
          <TabList className="flex">
            {tiers.map((tier) => (
              <Tab
                key={tier.name}
                className="w-1/3 border-b border-gray-100 py-4 text-base/8 font-medium text-indigo-600 data-selected:border-indigo-600 [&:not([data-focus])]:focus:outline-hidden"
              >
                {tier.name}
              </Tab>
            ))}
          </TabList>
          <TabPanels as={Fragment}>
            {tiers.map((tier) => (
              <TabPanel key={tier.name}>
                <a
                  href={tier.href}
                  className="mt-8 block rounded-md bg-white px-3.5 py-2.5 text-center text-sm font-semibold text-gray-900 shadow-xs ring-1 ring-gray-300 ring-inset hover:bg-gray-50"
                >
                  Get started
                </a>
                {sections.map((section) => (
                  <Fragment key={section.name}>
                    <div className="-mx-6 mt-10 rounded-lg bg-gray-50 px-6 py-3 text-sm/6 font-semibold text-gray-950 group-first-of-type:mt-5">
                      {section.name}
                    </div>
                    <dl>
                      {section.features.map((feature) => (
                        <div
                          key={feature.name}
                          className="grid grid-cols-2 border-b border-gray-100 py-4 last:border-none"
                        >
                          <dt className="text-sm/6 font-normal text-gray-600">{feature.name}</dt>
                          <dd className="text-center">
                            {typeof feature.tiers[tier.name] === 'string' ? (
                              <span className="text-sm/6 text-gray-950">{feature.tiers[tier.name]}</span>
                            ) : (
                              <>
                                {feature.tiers[tier.name] === true ? (
                                  <CheckIcon aria-hidden="true" className="inline-block size-4 fill-green-600" />
                                ) : (
                                  <MinusIcon aria-hidden="true" className="inline-block size-4 fill-gray-400" />
                                )}

                                <span className="sr-only">{feature.tiers[tier.name] === true ? 'Yes' : 'No'}</span>
                              </>
                            )}
                          </dd>
                        </div>
                      ))}
                    </dl>
                  </Fragment>
                ))}
              </TabPanel>
            ))}
          </TabPanels>
        </TabGroup>
      </div>
    </div>
  )
}
