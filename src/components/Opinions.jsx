import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import OpinionCard from "./OpinionCard";
import opinions from "../data/opinions";

function Opinions() {
  return (
    <section
      id="opinions"
      className="flex flex-col items-center justify-center bg-[url('/images/Opinions_background.png')] bg-cover bg-center min-h-screen pt-[100px] md:pt-[180px] pb-20 px-6"
    >
      <div className="w-full max-w-[1800px]">
        <div className="flex flex-col items-center w-full">
          <h2 className="text-3xl md:text-[36px] font-semibold text-primary text-center mb-12 md:mb-24 py-6 w-full">
            Expertos nos recomiendan
          </h2>
          <div className="w-full flex justify-center">
            <Swiper
              modules={[Autoplay]}
              slidesPerView={1}
              loop={true}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              breakpoints={{
                640: {
                  slidesPerView: 2,
                },
                /*768: {
                  slidesPerView: 3,
                  spaceBetween: 40,
                },*/
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 40,
                },
              }}
              className="!py-18 w-full max-w-[1600px] flex justify-evenly"
            >
              {opinions.map((opinion, index) => (
                <SwiperSlide key={index}>
                  <div className="flex justify-center">
                    <OpinionCard opinion={opinion} />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className="flex items-center justify-center mt-20 md:mt-32 w-full py-12 lg:py-24">
            <p className="text-3xl md:text-[48px] text-primary font-medium text-center">
              ¡Buscanos en tu supermercado!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Opinions;
