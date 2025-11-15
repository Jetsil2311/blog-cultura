import React from 'react'
import inf from '../assets/inf.der.jpeg'

export const Derecho = () => {
  return (
    <div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-justify'>
    <h1 className="text-4xl font-bold text-white mb-6">Infografía</h1>
    <h2 className="text-2xl text-white mb-4 font-regular">Derecho</h2>
    <hr className="border-gray-300 mb-6" />
  {/* Hero section */}

  <img src={inf} alt="Hero Background" className="w-md h-auto my-8 mx-auto" />

  <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-justify">
  </div>
</div>

  )
}
