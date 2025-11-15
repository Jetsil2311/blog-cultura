import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Plus } from "lucide-react";
import { Link } from "react-router";

export default function Carousel() {
  const [current, setCurrent] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const images = [
    { src: "https://images.unsplash.com/photo-1506744038136-46273834b3fb", label: "Mountain Vista" },
    { src: "https://images.unsplash.com/photo-1494526585095-c41746248156", label: "Coastal Sunset" },
    { src: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308", label: "Desert Dunes" },
  ];

  const next = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrent((prev) => (prev + 1) % images.length);
      setTimeout(() => setIsTransitioning(false), 700);
    }
  };

  const prev = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrent((prev) => (prev - 1 + images.length) % images.length);
      setTimeout(() => setIsTransitioning(false), 700);
    }
  };

  useEffect(() => {
    const interval = setInterval(next, 5000);
    return () => clearInterval(interval);
  }, [isTransitioning]);

  const handleTouchStart = (e) => setTouchStart(e.changedTouches[0].clientX);
  const handleTouchMove = (e) => setTouchEnd(e.changedTouches[0].clientX);
  const handleTouchEnd = () => {
    const distance = touchStart - touchEnd;
    if (distance > 50) next();
    if (distance < -50) prev();
  };

  return (
    <div className="w-full">
      <div
        className="relative w-full overflow-hidden shadow-2xl shadow-black bg-black h-64 sm:h-80 md:h-96 lg:h-[500px]"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {images.map((image, index) => (
          <div
            key={index}
            className="absolute inset-0 transition-all duration-700 ease-in-out"
            style={{
              opacity: current === index ? 1 : 0,
              transform: current === index ? 'scale(1)' : 'scale(1.05)',
              zIndex: current === index ? 10 : 5,
            }}
          >
            <img
              src={image.src}
              alt={image.label}
              className="w-full h-full object-cover"
            />
          </div>
        ))}

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20 pointer-events-none z-20" />

        {/* Label - hidden on mobile */}
        <div className="absolute bottom-15 left-1/2 -translate-x-1/2 text-center z-30 hidden md:block">
          <Link to='/paper/' className="px-6 py-3 bg-white/10 backdrop-blur-xl border border-white/20 text-white font-semibold rounded-2xl shadow-2xl text-lg sm:text-2xl transition-all duration-700">
            {images[current].label}
          </Link>
        </div>

        {/* Mobile add button */}
        <Link
          className="absolute top-3 right-3 z-40 px-3 py-1 text-lg font-semibold text-black bg-white/80 rounded-full shadow-md active:scale-95 transition md:hidden"
          aria-label="Add"
            to="/paper/"
        >
          <Plus size={20} className="w-5 h-5" strokeWidth={2.5} />
        </Link>

        {/* Navigation buttons */}
        <button
          className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-30 p-2 sm:p-3 bg-white/20 hover:bg-white/30 rounded-full backdrop-blur-md text-white transition-all duration-300 active:scale-90 border border-white/30"
          onClick={prev}
          disabled={isTransitioning}
        >
          <ChevronLeft size={24} className="sm:w-7 sm:h-7" strokeWidth={2.5} />
        </button>
        <button
          className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-30 p-2 sm:p-3 bg-white/20 hover:bg-white/30 rounded-full backdrop-blur-md text-white transition-all duration-300 active:scale-90 border border-white/30"
          onClick={next}
          disabled={isTransitioning}
        >
          <ChevronRight size={24} className="sm:w-7 sm:h-7" strokeWidth={2.5} />
        </button>

        {/* Dot indicators */}
        <div className="absolute bottom-3 sm:bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-30">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                if (!isTransitioning) {
                  setIsTransitioning(true);
                  setCurrent(i);
                  setTimeout(() => setIsTransitioning(false), 700);
                }
              }}
              disabled={isTransitioning}
              className={`h-2 sm:h-2.5 rounded-full transition-all duration-300 ${
                current === i 
                  ? "bg-white w-6 sm:w-8 shadow-lg shadow-white/50" 
                  : "bg-white/50 hover:bg-white/80 w-2 sm:w-2.5"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
