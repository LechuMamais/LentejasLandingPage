import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import {
  getViewPortHeight,
  getViewPortWidth,
} from "../utils/viewportWidthHeight";
import { CarouselTextFontSizeCalculator } from "../utils/carouselFontSizeCalculator";
import { slides } from "../data/carouselSlides";
import { useEffect, useState } from "react";

function Carousel() {
  const [windowSize, setWindowSize] = useState({
    windowWidth: getViewPortWidth(),
    windowHeight: getViewPortHeight(),
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        windowWidth: getViewPortWidth(),
        windowHeight: getViewPortHeight(),
      }); // esto forzará el re-render
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

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
                  (windowSize.windowWidth / slide.text.join("").length) * 1.3
                }px`,
              }}
            >
              {slide.text.join("")}
            </p>

            <div className="flex flex-col flex-start pl-[0px] w-full h-full justify-center gap-12 lg:hidden leading-none">
              {slide.text.map((sil, index) => (
                <p
                  className="text-secondary opacity-85 font-bold"
                  key={index}
                  style={{
                    fontSize: `${CarouselTextFontSizeCalculator(
                      slide.text,
                      windowSize
                    )}px`,
                    textAlign: `${
                      slide.text.join("") == "GARBANZOS" ? "center" : "start"
                    }`,
                    marginLeft: `${
                      slide.text.join("") == "GARBANZOS" ? "0" : "32px"
                    }`,
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
