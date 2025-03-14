import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { getViewPortWidth } from "../utils/viewportWidthHeight";

function Carousel() {
  const slides = [
    {
      image: "images/Lentejas.png",
      text: "LENTEJAS",
    },
    {
      image: "images/garbanzos.jpg",
      text: "GARBANZOS",
    },
    {
      image: "images/Alubias.avif",
      text: "ALUBIAS",
    },
  ];

  return (
    <Swiper
      id="home"
      spaceBetween={0}
      slidesPerView={1}
      loop={true}
      autoplay={{
        delay: 2500,
      }}
      modules={[Autoplay]}
      speed={800}
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index}>
          <section
            className="w-[100svw] h-[100svh] flex justify-center items-center"
            style={{
              backgroundImage: `url(${slide.image})`,
              backgroundSize: "cover",
            }}
          >
            <p
              className="text-secondary opacity-85 font-bold"
              style={{
                fontSize: `${(getViewPortWidth() / slide.text.length) * 1.3}px`,
              }}
            >
              {slide.text}
            </p>
          </section>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default Carousel;
