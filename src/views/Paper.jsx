import React from 'react'
import { Calculo } from '../papers/Calculo'
import { Home } from 'lucide-react'
import { Artes } from '../papers/Artes'
import { Derecho } from '../papers/Derecho'
import { Cultura } from '../papers/Cultura'
import { Fisica } from '../papers/Fisica'

export const Paper = () => {
  return (
    <div>
        <Fisica />
        {/* Botón de home */}
        <div className="fixed bottom-6 right-6">
          <a
            href="/"
            className=" rounded-full shadow-lg hover:bg-gray-700 transition-colors"
          >
            <Home className="w-6 h-6" />
          </a>
        </div>
    </div>
  )
}
