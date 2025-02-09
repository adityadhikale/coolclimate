import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/autoplay";

// Images (Replace with your actual images)
import img1 from "../assets/1.webp";
import img2 from "../assets/3.webp";
import img3 from "../assets/8.webp";
import img4 from "../assets/4.webp"; 
import img5 from "../assets/6.webp";

const slides = [
  {
    id: 1,
    image: img1,
    title: "Experience Comfort & Efficiency",
    description: "Cool Climate brings you the best cooling solutions for your home and office.",
  },
  {
    id: 2,
    image: img2,
    title: "Innovative Climate Control",
    description: "Energy-efficient and environment-friendly cooling systems tailored for you.",
  },
  {
    id: 3,
    image: img3,
    title: "Reliable Cooling Services",
    description: "Our expert technicians ensure the best service and maintenance support.",
  },
  {
    id: 4,
    image: img4,
    title: "Advanced Air Conditioning",
    description: "Stay cool with our latest energy-saving air conditioning technology.",
  },
  {
    id: 5,
    image: img5,
    title: "24/7 Customer Support",
    description: "We're here for you any time, ensuring uninterrupted comfort and service.",
  },
];

const Carousel = () => {
  return (
    <div className="relative w-full h-[calc(100vh-64px)]"> {/* Subtracting navbar height */}
      <Swiper
        modules={[Autoplay, EffectFade]}
        effect="fade"
        autoplay={{ delay: 4500, disableOnInteraction: false }}
        loop
        className="w-full h-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div
              className="relative w-full h-full flex items-center justify-center md:justify-start bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="absolute inset-0 bg-black/50"></div> {/* Dark overlay */}
              <div className="relative text-white px-6 md:px-16 max-w-2xl text-center md:text-left animate-fadeIn">
                <h2 className="text-3xl md:text-5xl font-bold mb-4">
                  {slide.title}
                </h2>
                <p className="text-lg md:text-xl animate-slideUp">
                  {slide.description}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carousel;
