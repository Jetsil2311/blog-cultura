import React from 'react'

export const Calculo = () => {
  return (
    <div>
  {/* Hero section */}
  <div className="relative w-full h-64 sm:h-80 md:h-96 lg:h-[500px] bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
    <img
      src="https://images.unsplash.com/photo-1506744038136-46273834b3fb"
      alt="Hero Background"
      className="absolute inset-0 w-full h-full object-cover"
    />
    <div className="absolute inset-0 bg-black/30 z-0" />
  </div>

  <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-justify">
    <h1 className="text-4xl font-bold text-white mb-6">Intervención de las matemáticas en la acumulación de micro plásticos</h1>
    <h2 className="text-2xl text-white mb-4 font-regular">Cálculo Diferencial</h2>
    <hr className="border-gray-300 mb-6" />

    <p className="text-lg text-white mb-4">
      En el presente ensayo, se analizará el tema de los micro plásticos y su afectación en el entorno, a partir del artículo Science of the Total Environment, explorando cómo estos pequeños fragmentos de plástico se han convertido en una preocupación ambiental global.
    </p>

    <p className="text-lg text-white mb-4">
      La preocupación que se presenta constantemente en el entorno se debe a la acumulación de micro plásticos en ambientes naturales (especialmente suelo), la persistencia de distintos tipos de polímeros, y cómo esas acumulaciones se relacionan con los procesos de biodegradación.
    </p>

    <p className="text-lg text-white mb-4">
      La importancia de esto radica en que los micro plásticos resultan de la degradación parcial de plásticos, y su persistencia puede llevar a impactos ecológicos negativos, afectando la biodiversidad, alterando la estructura del suelo, y degradando los organismos que viven ahí, además de posibles riesgos para la salud humana.
    </p>

    <p className="text-lg text-white mb-4">
      Es fundamental calcular cuánto se va acumulando, y cuánto permanece, para orientar decisiones sobre ello, porque no todos los polímeros se biodegradan al mismo ritmo y la acumulación constante de polímeros no biodegradables puede afectar ciertos filtrados de agua, y la disponibilidad de nutrientes. Además, en cuestión de la salud humana se puede expresar este tipo de afectación, a través de la cadena alimenticia, por medio de la ingestión indirecta de micro plásticos, ya sea por plantas o animales.
    </p>

    <h2 className="text-2xl text-white mb-4 font-regular">Modelo matemático</h2>

    <p className="text-lg text-white mb-4">
      El artículo propone un modelo matemático basado en ecuaciones diferenciales de primer orden, expresadas en matriz, mediante un sistema en espacio de estados. Este modelo describe paso a paso cómo un plástico, al entrar en el ambiente, se fragmenta en microplásticos, forma compuestos intermedios y finalmente se convierte en dióxido de carbono (CO₂) y biomasa.
    </p>

    <p className="text-lg text-white mb-4">
      Entre las variables más importantes se encuentra el vector de estados x(t), que representa la masa de carbono en cada etapa; la entrada u(t), que modela la cantidad de plástico que ingresa al ambiente; y las constantes de tiempo τ₁, τ₂, τ₃ y τ₄, que determinan la velocidad con la que el material avanza entre fases. Además, el parámetro α indica la fracción de carbono que termina mineralizándose.
    </p>

    <h2 className="text-2xl text-white mb-4 font-regular">Resultados del modelo</h2>

    <p className="text-lg text-white mb-4">
      A partir de este modelo, se comprenden tres tipos de polímeros con comportamientos distintos: PE, PLA y PBS. El PE tiene un potencial de acumulación cercano a 1, lo que significa que casi toda su masa permanece como microplástico después de cien años. El PLA mostró una acumulación intermedia debido a su lenta degradación en suelos naturales. El PBS tuvo un valor mínimo de acumulación, entre 0.0003 y 0.002, lo que indica que sus microplásticos persisten muy poco tiempo en el ambiente.
    </p>

    <p className="text-lg text-white mb-4">
      Estos resultados evidencian que la etapa más crítica del proceso es la transición de microplásticos avanzados (micro-II) hacia los productos intermedios, ya que esta fase puede durar desde algunos meses hasta miles de años, dependiendo del tipo de polímero.
    </p>

    <h2 className="text-2xl text-white mb-4 font-regular">Conclusión</h2>

    <p className="text-lg text-white mb-4">
      El problema de los microplásticos necesita un enfoque interdisciplinario que combine la química, la ecología y las matemáticas. El modelo presentado no solo explica cómo se degradan los diferentes tipos de polímeros, sino que también permite predecir cuánto pueden contribuir a la acumulación en los próximos cien años.
    </p>

    <p className="text-lg text-white mb-4">
      Gracias a este modelo podemos comprender mejor el problema ambiental que representan los micro plásticos y diseñar políticas y soluciones basadas en datos científicos para reducir su impacto y proteger los ecosistemas.
    </p>
  </div>
</div>

  )
}
