import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { getViewPortWidth } from "../utils/viewportWidthHeight";
import { CarouselTextFontSizeCalculator } from "../utils/carouselFontSizeCalculator";
import { slides } from "../data/carouselSlides";

function Carousel() {
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
            className="w-[100svw] h-[100svh] flex lg:justify-center items-center pt-[60px]"
            style={{
              backgroundImage: `url(${slide.image})`,
              backgroundSize: "cover",
            }}
          >
            <p
              className="text-secondary opacity-85 font-bold hidden lg:block"
              style={{
                fontSize: `${
                  (getViewPortWidth() / slide.text.join("").length) * 1.3
                }px`,
              }}
            >
              {slide.text.join("")}
            </p>

            <div className="flex flex-col flex-start pl-[32px] gap-0 h-full justify-evenly lg:hidden leading-none">
              {slide.text.map((sil, index) => (
                <p
                  className="text-secondary opacity-85 font-bold"
                  key={index}
                  style={{
                    fontSize: `${CarouselTextFontSizeCalculator(slide.text)}px`,
                  }}
                >
                  {sil}
                </p>
              ))}
            </div>
          </section>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default Carousel;
