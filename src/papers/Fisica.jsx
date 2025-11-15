import React from 'react'
import inf from '../assets/inf-fis.png'
import { Link } from 'react-router'

export const Fisica = () => {
  return (
    <div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-justify'>
    <h1 className="text-4xl font-bold text-white mb-6">Luvia (Infografía, Video y Presentación)</h1>
    <h2 className="text-2xl text-white mb-4 font-regular">Fisica</h2>
    <hr className="border-gray-300 mb-6" />
  {/* Hero section */}

  <img src={inf} alt="Hero Background" className="w-md h-auto my-8 mx-auto" />

  <Link to="https://pdfhost.io/v/tTTZyXRpP3_Arquitectura_sostenible_" className="px-6 py-3 bg-white/10 backdrop-blur-xl border border-white/20 text-white font-semibold rounded-2xl shadow-2xl text-lg sm:text-2xl transition-all duration-700 mb-8 inline-block">
    Descargar presentación de arquitectura sostenible
  </Link>

  <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-justify">
  </div>
</div>

  )
}
