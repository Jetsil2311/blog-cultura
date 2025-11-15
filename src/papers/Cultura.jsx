import React from 'react'
import inf from '../assets/inf-cult.png'

export const Cultura = () => {
  return (
    <div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-justify'>
    <h1 className="text-4xl font-bold text-white mb-6">Infografía Y Video</h1>
    <h2 className="text-2xl text-white mb-4 font-regular">Cultura Ambiental</h2>
    <hr className="border-gray-300 mb-6" />
  {/* Hero section */}

  <img src={inf} alt="Hero Background" className="w-md h-auto my-8 mx-auto" />

  <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-justify">
  </div>
  <iframe width="1206" height="678" src="https://www.youtube.com/embed/C46uTb5bLAw" title="Microplásticos - Una Amenaza Invisible | Documental" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

  )
}
