import { motion } from "framer-motion";
import { handleScroll } from "../utils/handleScroll";

function Hero() {
  return (
    <section className="flex flex-col justify-center items-center gap-8 w-[100svw] h-[100svh] px-8 bg-[url('/images/citric_bg.jpg')] bg-repeat-x bg-bottom">
      <h1 className=" text-primary font-semibold text-center  text-[48px] md:text-[96px]">
        EAT HEALTHY
      </h1>
      <p className=" text-center text-primary max-w-[1000px] text-[18px] md:text-[36px]">
        Descubre el sabor y la calidad de las mejores legumbres
      </p>
      <motion.button
        className="cursor-pointer mt-[144px] border-none rounded-[8px] bg-bgButton px-[32px] py-[16px] text-primary"
        whileHover={{
          backgroundColor: "var(--color-bgButton_hover)",
          transition: { duration: 0.2 },
        }}
        whileTap={{ scale: 0.95 }}
        onClick={() => handleScroll("products")}
      >
        Nuestros Productos
      </motion.button>
    </section>
  );
}

export default Hero;
