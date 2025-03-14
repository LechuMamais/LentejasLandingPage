import { Flex, Text } from "@chakra-ui/react";
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
          <Flex
            as="section"
            w="100svw"
            h="100svh"
            justifyContent="center"
            alignItems="center"
            bg={`url(${slide.image})`}
            backgroundSize="cover"
          >
            <Text
              color="secondary"
              opacity={0.85}
              fontWeight="bold"
              fontSize={(getViewPortWidth() / slide.text.length) * 1.3}
            >
              {slide.text}
            </Text>
          </Flex>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default Carousel;
