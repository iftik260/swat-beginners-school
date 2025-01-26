import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";
import PropTypes from "prop-types";

export default function HomeCarousel({ slides }) {
  const [current, setCurrent] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  // Handle navigation to the next or previous slide
  const navigateSlide = (direction) => {
    if (isAnimating) return;
    setIsAnimating(true);

    if (direction === "previous") {
      setCurrent(current === 0 ? slides.length - 1 : current - 1);
    } else {
      setCurrent(current === slides.length - 1 ? 0 : current + 1);
    }

    setTimeout(() => setIsAnimating(false), 300); // Match transition duration
  };

  // Add keyboard navigation
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "ArrowLeft") navigateSlide("previous");
      if (event.key === "ArrowRight") navigateSlide("next");
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [current]);

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      navigateSlide("next");
    }, 5000); // Change to your preferred interval

    return () => clearInterval(interval);
  }, [current]);

  return (
    <div className="relative flex   h-screen w-full  overflow-hidden">
      {/* Slide Container */}
      <div
        className="flex transition-transform duration-300 ease-out"
        style={{
          transform: `translateX(-${current * 100}%)`,
          width: `${slides.length * 100}%`,
        }}
      >
        {slides.map((slide, index) => (
  <div key={index} className="w-full h-screen flex-shrink-0 relative">
    <img
      src={slide.image}
      alt={`Slide ${index + 1}`}
      className="w-full h-screen object-cover"
      onError={(e) => (e.target.src = "fallback-image-url.jpg")}
    />
    {/* Overlay Content */}
    <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#0c0e2b] bg-opacity-50 text-white text-center px-6">
      <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
        {slide.title}
      </h1>
      <p className="text-lg md:text-xl mb-6 max-w-2xl">{slide.description}</p>
      <button className="bg-[#5f2ded] text-white py-3 px-6 rounded hover:bg-blue-700 transition">
        {slide.buttonText}
      </button>
    </div>
  </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <div className="absolute top-1/2 transform -translate-y-1/2 w-full flex justify-between px-4">
        <button
          onClick={() => navigateSlide("previous")}
          className="bg-[#fbfbfb] bg-opacity-50 p-4 text-xl rounded-full hover:bg-opacity-80 transition"
        >
          <FontAwesomeIcon className="text-slate-200" icon={faChevronLeft} />
        </button>
        <button
          onClick={() => navigateSlide("next")}
          className="bg-[#fbfbfb] bg-opacity-50 p-4 text-xl rounded-full hover:bg-opacity-80 transition"
        >
          <FontAwesomeIcon className="text-slate-200" icon={faChevronRight} />
        </button>
      </div>
    </div>
  );
}

// Prop validation
HomeCarousel.propTypes = {
  slides: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      buttonText: PropTypes.string.isRequired,
    })
  ).isRequired,
};
