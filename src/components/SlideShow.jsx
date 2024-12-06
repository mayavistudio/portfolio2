import { gsap } from "gsap";
import { useEffect, useRef, useState } from "react";
import banner2 from "../../public/CGI/Cgi.mp4";
import banner1 from "../assets/3D ASSETS/akgun-1.jpeg";

import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Slideshow = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const containerRef = useRef(null);
  const slidesRef = useRef([]);

  const slides = [
    { id: 1, title: "Video 1", type: "video", src: banner2 },
    { id: 2, title: "Image 2", type: "image", src: banner1 },
    { id: 3, title: "Video 3", type: "video", src: banner2 },
    { id: 4, title: "Image 4", type: "image", src: banner1 },
    { id: 5, title: "Video 5", type: "video", src: banner2 },
    { id: 6, title: "Image 6", type: "image", src: banner1 },
  ];

  useEffect(() => {
    // Set up auto-scroll
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
      if (containerRef.current) {
        const nextScrollPosition =
          ((currentSlide + 1) % slides.length) * window.innerHeight;
        window.scrollTo({
          top: nextScrollPosition,
          behavior: "smooth",
        });
      }
    }, 5000);

    // Set up scroll triggers for each slide
    slides.forEach((_, index) => {
      gsap.to(slidesRef.current[index], {
        scrollTrigger: {
          trigger: slidesRef.current[index],
          start: "top center",
          end: "bottom center",
          onEnter: () => setCurrentSlide(index),
          onEnterBack: () => setCurrentSlide(index),
        },
      });
    });

    // Handle manual scrolling
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const slideIndex = Math.round(scrollPosition / windowHeight);
      setCurrentSlide(Math.min(slideIndex, slides.length - 1));
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      clearInterval(interval);
      window.removeEventListener("scroll", handleScroll);
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [currentSlide]);

  return (
    <div ref={containerRef} className="relative">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          ref={(el) => (slidesRef.current[index] = el)}
          className="h-screen w-full sticky top-0"
        >
          {slide.type === "video" ? (
            <video
              src={slide.src}
              className="w-full h-full object-cover"
              autoPlay
              muted
              loop
            />
          ) : (
            <img
              src={slide.src}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
          )}

          {/* Title Overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-4 bg-black bg-opacity-50">
            <h2 className="text-white text-2xl font-bold">{slide.title}</h2>
          </div>
        </div>
      ))}

      {/* Navigation Dots */}
      <div className="fixed right-4 top-1/2 transform -translate-y-1/2 flex flex-col gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setCurrentSlide(index);
              window.scrollTo({
                top: index * window.innerHeight,
                behavior: "smooth",
              });
            }}
            className={`w-3 h-3 rounded-full ${
              currentSlide === index ? "bg-white" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Slideshow;
