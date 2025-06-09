'use client'

import { useEffect, useState } from 'react'

export default function ScrollToTopButton() {
  const [scrollPercent, setScrollPercent] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  const radius = 45
  const circumference = 2 * Math.PI * radius

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const scrolled = (scrollTop / docHeight) * 100
      setScrollPercent(scrolled)
      setIsVisible(scrollTop > 100)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-6 right-6 z-50 transition-opacity hover:cursor-pointer duration-300 ${
        isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
      aria-label="Scroll to top"
    >
      <div className="relative w-16 h-16">
        <svg className="absolute top-0 left-0 w-full h-full rotate-[-90deg]" viewBox="0 0 120 120">
          {/* Tło progress bara */}
          <circle
            cx="60"
            cy="60"
            r={radius}
            fill="none"
            stroke="lightgray"
            strokeWidth="8"
          />
          {/* Wypełnienie progressa */}
          <circle
            cx="60"
            cy="60"
            r={radius}
            fill="none"
            stroke="#BEA67D" 
            strokeWidth="12"
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={circumference - (scrollPercent / 100) * circumference}
            className="transition-all duration-200"
          />
        </svg>

        {/* Środek – strzałka */}
        <div className="absolute inset-2 flex items-center justify-center bg-white rounded-full shadow-md">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6 text-black"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
          </svg>
        </div>
      </div>
    </button>
  )
}
