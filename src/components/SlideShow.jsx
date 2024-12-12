import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef, useState } from "react";

import banner3 from "../assets/BANNERS/3dassetsbanner.mp4";
import banner1 from "../assets/BANNERS/cgibanner.mp4";
import banner5 from "../assets/BANNERS/charbanner.png";
import banner6 from "../assets/BANNERS/interiorbanner.jpeg";
import banner4 from "../assets/BANNERS/pmbanner.png";
import banner2 from "../assets/BANNERS/productanimation.mp4";

import d3phone from "../assets/BANNERPHONE/3dphone.png";
import cgiphone from "../assets/BANNERPHONE/cgiphone.mp4";
import charphone from "../assets/BANNERPHONE/charphone.png";
import intphone from "../assets/BANNERPHONE/interiorphone.png";
import pamphone from "../assets/BANNERPHONE/pamphone.png";
import paphone from "../assets/BANNERPHONE/paphone.mp4";

gsap.registerPlugin(ScrollTrigger);

const useIsPhone = () => {
  const [isPhone, setIsPhone] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsPhone(window.innerWidth <= 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return isPhone;
};

const Slideshow = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const containerRef = useRef(null);
  const slidesRef = useRef([]);
  const isPhone = useIsPhone();

  const desktopSlides = [
    { id: 1, title: "CGI Advertisements", type: "video", src: banner1 },
    { id: 2, title: "Product Animation", type: "video", src: banner2 },
    { id: 3, title: "3d Assets", type: "video", src: banner3 },
    { id: 4, title: "Product Modelling", type: "image", src: banner4 },
    { id: 5, title: "Character Modelling", type: "image", src: banner5 },
    { id: 6, title: "Interior & Exterior", type: "image", src: banner6 },
  ];

  const phoneSlides = [
    { id: 1, title: "3d Assets", type: "image", src: d3phone },
    { id: 2, title: "CGI Advertisements", type: "video", src: cgiphone },
    { id: 2, title: "Product Animation", type: "video", src: paphone },
    { id: 2, title: "Product Modelling", type: "image", src: pamphone },
    { id: 2, title: "Character Modelling", type: "image", src: charphone },
    { id: 2, title: "Interior & Exterior", type: "image", src: intphone },
  ];

  const slides = isPhone ? phoneSlides : desktopSlides;

  useEffect(() => {
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
  }, [currentSlide, slides]);

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

          <div className="absolute sm:bottom-1/2 bottom-1/4  left-[3%]   sm:left-[5%] bg-black/10">
            <h2 className="text-white text-3xl sm:text-6xl font-bold uppercase tracking-normal sm:tracking-wider">
              {slide.title}
            </h2>
            <div className="mt-2 h-1 w-full bg-white mx-auto"></div>
          </div>
        </div>
      ))}

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
