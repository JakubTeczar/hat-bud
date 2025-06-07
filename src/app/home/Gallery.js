"use client"

import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

/**
 * ImageSlider component with 3D coverflow on white background
 * @param {{ images: string[] }} props
 */
const Gallery = ({ images }) => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <div className="bg-white py-10" id="wizualizacje">
        <h2 className=' text-3xl text-center mx-auto max-w-7xl mb-5 font-semibold tracking-tight text-balance text-gray-900 sm:text-4xl'>Wizualizacje architektoniczne inwestycji</h2>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Swiper
          modules={[EffectCoverflow, Pagination, Navigation]}
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          slidesPerView="1.2"
          loop={true}
          spaceBetween={0}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 200,
            modifier: 1,
            slideShadows: false,
          }}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          onInit={(swiper) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
            swiper.navigation.init();
            swiper.navigation.update();
          }}
        >
          {images.map((src, index) => (
            <SwiperSlide key={index} className="w-full lg:w-1/2">
              <div className="overflow-hidden rounded-xl h-[400px] xl:h-[700px]">
                <img
                  src={src}
                  alt={`Slide ${index + 1}`}
                  className="object-cover w-full h-full"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        {/* Custom bottom navigation */}
        <div className="flex justify-center space-x-6 mt-6">
          <button
            ref={prevRef}
            className="p-2 bg-opacity-10 hover:bg-opacity-20 rounded-full"
          >
           
            <svg className='rotate-180 hover:opacity-75 hover:cursor-pointer' width="40" height="50" viewBox="0 0 90 90" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                <rect x="90" y="90" width="90" height="90" transform="rotate(-180 90 90)" fill="url(#pattern0_141_1469)"/>
                <defs>
                <pattern id="pattern0_141_1469" patternContentUnits="objectBoundingBox" width="1" height="1">
                <use xlinkHref="#image0_141_1469" transform="scale(0.0111111)"/>
                </pattern>
                <image id="image0_141_1469" width="90" height="90" preserveAspectRatio="none" xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAAACXBIWXMAAAsTAAALEwEAmpwYAAABVklEQVR4nO3bwUrDQBRG4dFFVehjZDXL+2+yywuKFCloFfoQLoovpRa1dlkZKIhCkoXTO9Y5H2RXyOWQTttJGgIAAAAAAAAAAAAAAAAAAN81TXMm6dLMniS9S1q0bXtBp8yRzWwlaffjWOQ8T9UGIu/M7LX0fP8+8v5Yl56xhsjpir4qPWcNkVfpdaVnPVoxxomkh6HIkh67rjsvPevRIrIDIjsgsgMiOyCyAyI7ILIDIjtI25pjv/g4NNbgRdJ8cItY0j0hleViMrPbvs6nZvZBaOV6125S077QW0Lr4KHT0nFHaOVaOm561+i048aHoX4b+dnMrkfvl/L1zhGxHRHbEbEdEdsRsR0R2xGxHRHbEQ/Q/LHYkmaeM9Uc+y2EcFJ6zhoe2932bhUia+wlPQ/z14pZWi72NxCWMcZp7vPgS1qTWZcBAAAAAAAAAAAAAAAAIHj7BKZ3tNTJTimQAAAAAElFTkSuQmCC"/>
                </defs>
            </svg>
          </button>
          <button
            ref={nextRef}
            className="p-2 bg-opacity-10 hover:bg-opacity-20 rounded-full"
          >
            <svg className='hover:opacity-75 hover:cursor-pointer' width="40" height="50" viewBox="0 0 90 90" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                <rect x="90" y="90" width="90" height="90" transform="rotate(-180 90 90)" fill="url(#pattern0_141_1469)"/>
                <defs>
                <pattern id="pattern0_141_1469" patternContentUnits="objectBoundingBox" width="1" height="1">
                <use xlinkHref="#image0_141_1469" transform="scale(0.0111111)"/>
                </pattern>
                <image id="image0_141_1469" width="90" height="90" preserveAspectRatio="none" xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAAACXBIWXMAAAsTAAALEwEAmpwYAAABVklEQVR4nO3bwUrDQBRG4dFFVehjZDXL+2+yywuKFCloFfoQLoovpRa1dlkZKIhCkoXTO9Y5H2RXyOWQTttJGgIAAAAAAAAAAAAAAAAAAN81TXMm6dLMniS9S1q0bXtBp8yRzWwlaffjWOQ8T9UGIu/M7LX0fP8+8v5Yl56xhsjpir4qPWcNkVfpdaVnPVoxxomkh6HIkh67rjsvPevRIrIDIjsgsgMiOyCyAyI7ILIDIjtI25pjv/g4NNbgRdJ8cItY0j0hleViMrPbvs6nZvZBaOV6125S077QW0Lr4KHT0nFHaOVaOm561+i048aHoX4b+dnMrkfvl/L1zhGxHRHbEbEdEdsRsR0R2xGxHRHbEQ/Q/LHYkmaeM9Uc+y2EcFJ6zhoe2932bhUia+wlPQ/z14pZWi72NxCWMcZp7vPgS1qTWZcBAAAAAAAAAAAAAAAAIHj7BKZ3tNTJTimQAAAAAElFTkSuQmCC"/>
                </defs>
            </svg>

          </button>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
