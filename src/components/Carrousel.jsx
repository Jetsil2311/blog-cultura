import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Plus } from "lucide-react";
import { Link } from "react-router-dom";   // <--- CAMBIO
import heroArtes from '../assets/hero-artes.jpeg';
import infCult from '../assets/inf-cult.png';
import infDer from '../assets/inf-der.jpeg';   // <--- CAMBIO SUGERIDO
import infFis from '../assets/inf-fis.png';

export default function Carousel() {
  const [current, setCurrent] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const images = [
    { src: heroArtes, label: "Artes", paper: "artes" },
    { src: infCult, label: "Cultura Ambiental", paper: "cultura" },
    { src: infDer, label: "Nociones de Derecho", paper: "derecho" },
    { src: infFis, label: "Fisica II", paper: "fisica" },
    { src: "https://t3.ftcdn.net/jpg/05/52/35/58/360_F_552355848_5uctS7naH0p4vWxEbcQS9mei7OdmKe8A.jpg", label: "Cálculo Diferencial", paper: "calculo" },
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
  }, []); // <--- FIX

  const handleTouchStart = (e) => setTouchStart(e.changedTouches[0].clientX);
  const handleTouchMove = (e) => setTouchEnd(e.changedTouches[0].clientX);
  const handleTouchEnd = () => {
    const distance = touchStart - touchEnd;
    if (distance > 50) next();
    if (distance < -50) prev();
  };

  return (
    <div className="w-full">
      {/* ...rest of the component unchanged... */}
    </div>
  );
}
