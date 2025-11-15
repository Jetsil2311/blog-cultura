import React from 'react'
import hero from '../assets/hero-artes.jpeg'

export const Artes = () => {
  return (
    <div>
  {/* Hero section */}
  <div className="relative w-full h-64 sm:h-80 md:h-96 lg:h-[500px] bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center opacity-30">
    <img
      src={hero}
      alt="Hero Background"
      className="absolute inset-0 w-full h-full object-cover"
    />
    <div className="absolute inset-0 bg-black/30 z-0" />
  </div>

  <img src={hero} alt="Hero Background" className="w-md h-auto my-8 mx-auto" />

  <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-justify">
    <h1 className="text-4xl font-bold text-white mb-6">Diseño del Cartel</h1>
    <h2 className="text-2xl text-white mb-4 font-regular">Artes</h2>
    <hr className="border-gray-300 mb-6" />

    <p className="text-lg text-white mb-4">
      A través de este cartel mi equipo y yo establecimos como objetivo transmitir un mensaje impactante, estético y cómodo a la vista, reforzando los recursos visuales con la frase central de “menos consumo más conciencia”. Todo esto con la intención de invitar a replantear los malos hábitos de consumo que están acabando con nuestro planeta y proponer un estilo de vida más responsable y consciente.
    </p>

    <h2 className="text-2xl text-white mb-4 font-regular">Explicación de los recursos utilizados</h2>

    <h2 className="text-2xl text-white mb-4 font-regular">La Tierra</h2>
    <p className="text-lg text-white mb-4">
      El motivo de colocarla en el centro fue simbolizar que es el eje de nuestra existencia, pero también el principal afectado por las malas decisiones y hábitos del consumo humano.
    </p>
    <p className="text-lg text-white mb-4">
      También colocamos pedacitos de papel verdes que forman los continentes para poder dar a entender que, así como pequeños recortes se suman y le dan forma al mapa, las pequeñas acciones también se suman para cuidar el medio ambiente.
    </p>

    <h2 className="text-2xl text-white mb-4 font-regular">Recortes</h2>
    <p className="text-lg text-white mb-4">
      Para empezar, las manos simbolizan que estamos conectados con la tierra y esto nos hace ser parte de un mismo ecosistema. En las manos existe un pequeño detalle: una es una mano llena de elementos orgánicos recordándonos que la tierra es parte de nuestra naturaleza y de nuestra composición; por eso debemos conectar con ella y cuidarla.
    </p>
    <p className="text-lg text-white mb-4">
      Mientras que la otra mano es una mano robótica rodeada de destrucción, contaminación y residuos debido a diversos factores. Entre ellos encontramos la tecnología e industrias sin conciencia ecológica, las cuales deberían comenzar a ser más amigables con el medio ambiente ya que, al final de cuentas, permanecen en la tierra y hacen uso de sus recursos.
    </p>

    <h2 className="text-2xl text-white mb-4 font-regular">Mensaje</h2>
    <p className="text-lg text-white mb-4">
      La frase “menos consumo” está en la parte de lo orgánico porque busca dar a entender que debemos hacer un menor uso, o al menos más controlado, de nuestros recursos naturales. Muchos de estos no son renovables y si continuamos así poco a poco se agotarán hasta no quedar nada.
    </p>
    <p className="text-lg text-white mb-4">
      La continuación “más conciencia” se encuentra en la parte inferior, donde están los recortes de contaminación y residuos, para expresar que si seguimos de esta forma esa será nuestra única realidad y ya no existirá una vuelta atrás. Habríamos acabado con todo lo bonito del planeta por no saber cuidar y proteger nuestro medio ambiente.
    </p>
  </div>
</div>

  )
}
