import { gsap } from "gsap";
import { useEffect, useRef, useState } from "react";
import banner3 from "../assets/BANNERS/3dassetsbanner.mp4";
import banner1 from "../assets/BANNERS/cgibanner.mp4";
import banner5 from "../assets/BANNERS/charbanner.png";
import banner6 from "../assets/BANNERS/interiorbanner.jpeg";
import banner4 from "../assets/BANNERS/pmbanner.png";
import banner2 from "../assets/BANNERS/productanimation.mp4";

import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Slideshow = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const containerRef = useRef(null);
  const slidesRef = useRef([]);

  const slides = [
    { id: 1, title: "CGI Advertisements", type: "video", src: banner1 },
    { id: 2, title: "Product Animation", type: "video", src: banner2 },
    { id: 3, title: "3d Assets", type: "video", src: banner3 },
    { id: 4, title: "Product Modelling", type: "image", src: banner4 },
    { id: 5, title: "Character Modelling", type: "image", src: banner5 },
    { id: 6, title: "Interior & Exterior", type: "image", src: banner6 },
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
          <div className="absolute bottom-1/2 left-[15%] right-0 p-4 ">
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
