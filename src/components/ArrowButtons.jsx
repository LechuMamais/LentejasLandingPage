import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { motion } from "motion/react";

const sides = ["left", "right"];

function ArrowButtons({ handleArrowClick }) {
  return (
    <>
      {sides.map((side, index) => (
        <motion.button
          key={index}
          onClick={() => handleArrowClick(side)}
          className="text-[30px] lg:text-[60px] cursor-pointer p-2 "
          whileHover={side === "right" ? { translateX: 8 } : { translateX: -8 }}
          whileTap={{ translateY: 1, scale: 0.98 }}
          aria-label="Desplazar productos a la izquierda"
        >
          <motion.span
            initial={{ color: "#D9D9D9" }}
            whileHover={{ color: "var(--color-bgButton_hover)" }}
            whileTap={{ color: "var(--color-bgButton_click)" }}
          >
            {side === "right" ? <BsArrowRight /> : <BsArrowLeft />}
          </motion.span>
        </motion.button>
      ))}
    </>
  );
}

export default ArrowButtons;
