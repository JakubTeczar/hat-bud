export default function Brands() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-none">
          <h2 className="text-lg/8 font-semibold text-gray-900">Zaufali nam doświadczeni wykonawcy i partnerzy technologiczni</h2>
          <div className="mx-auto mt-10 grid grid-cols-4 items-start gap-x-8 gap-y-10 sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:grid-cols-5">
            <img
              alt="Transistor"
              src="./imgs/brands/brand1.png"
              width={158}
              height={48}
              className="grayscale col-span-2 max-h-12 w-full object-contain object-left lg:col-span-1"
            />
            <img
              alt="Reform"
              src="./imgs/brands/brand2.png"
              width={158}
              height={48}
              className="grayscale col-span-2 max-h-12 w-full object-contain object-left lg:col-span-1"
            />
            <img
              alt="Tuple"
              src="./imgs/brands/brand3.png"
              width={158}
              height={48}
              className="grayscale col-span-2 py-1 max-h-10 w-full object-contain object-left lg:col-span-1"
            />
            <img
              alt="SavvyCal"
              src="./imgs/brands/brand6.png"
              width={158}
              height={48}
              className="grayscale pr-2 col-span-2 max-h-12 w-full object-contain object-left lg:col-span-1"
            />
            <img
              alt="Statamic"
              src="./imgs/brands/brand5.png"
              width={158}
              height={48}
              className="grayscale col-span-2 max-h-12 w-full object-contain object-left lg:col-span-1"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
