import React, { useState } from 'react'
import  Carrousel  from '../components/Carrousel.jsx'
import  {Card}  from '../components/Card.jsx'

import { ChevronDown, ChevronUp } from "lucide-react";

export const Home = () => {
    const [isOpen, setIsOpen] = useState(false);

  const members = [
    { name: 'José Luis Chavez Cerón', role: 'Integrante' },
    { name: 'Jethro Siloe Cruz Castillo', role: 'Integrante' },
    { name: 'Frida Jeraldine Gomez Moctezuma', role: 'Integrante' },
    { name: 'Adriana Sofía Hernandez Euroza', role: 'Integrante' },
    { name: 'Amaya Valeria Perez Lucas', role: 'Integrante' },
  ];

  return (
    <div className="w-full min-h-screen">
      {/* Your Carousel component would go here */}
      <Carrousel />
      
      <div className="w-full max-w-[1200px] mx-auto mt-8 sm:mt-12 px-4 sm:px-6 pb-12">
        <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 lg:gap-10">
          
          {/* LEFT TEXT SECTION - Dropdown on mobile, static on desktop */}
          <div className="w-full lg:w-1/2">
            {/* Mobile Dropdown */}
            <div className="lg:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full bg-gray-800 p-4 rounded-2xl shadow-black shadow-md flex items-center justify-between hover:bg-gray-300 transition-colors"
              >
                <h2 className="text-xl font-bold text-gray-100">
                  ¿Quiénes somos?
                </h2>
                {isOpen ? (
                  <ChevronUp className="w-6 h-6 text-gray-100" />
                ) : (
                  <ChevronDown className="w-6 h-6 text-gray-100" />
                )}
              </button>
              
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  isOpen ? 'max-h-96 opacity-100 mt-2' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="bg-gray-800 p-6 rounded-2xl shadow-md shadow-black">
                  <p className="text-sm text-gray-100 leading-relaxed">
                    Somos un conjunto de individuos sin intereses de lucro, los 5 integrantes tenemos una gran devoción y un inmenso potencial académico que hemos demostrado a lo largo de los proyectos realizados.
                  </p>
                  <br />
                  <p className="text-sm text-gray-100 leading-relaxed">
                    Cada uno de nosotros puso un empeño total en la realización de estos proyectos para obtener resultados ideales, que abran paso a un futuro sustentable.
                  </p>
                </div>
              </div>
            </div>

            {/* Desktop Static Version */}
            <div className="hidden lg:block bg-gray-800 p-6 sm:p-8 rounded-2xl shadow-md shadow-black">
              <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4 text-gray-100">
                ¿Quiénes somos?
              </h2>
              <p className="text-sm sm:text-base text-gray-100 leading-relaxed">
                Somos un conjunto de individuos sin intereses de lucro, los 5 integrantes tenemos una gran devoción y un inmenso potencial académico que hemos demostrado a lo largo de los proyectos realizados.
              </p>
              <br />
              <p className="text-sm sm:text-base text-gray-100 leading-relaxed">
                Cada uno de nosotros puso un empeño total en la realización de estos proyectos para obtener resultados ideales, que abran paso a un futuro sustentable.
              </p>
            </div>
          </div>

          {/* RIGHT SIDE CARDS SECTION */}
          <div className="w-full lg:w-1/2 grid grid-cols-2 gap-3 sm:gap-4 auto-rows-fr">
            {members.map((member, index) => (
              <Card key={index} name={member.name} role={member.role} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
