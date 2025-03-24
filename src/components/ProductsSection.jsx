import { useEffect } from "react";
import products from "../data/products";
import ProductCard from "./ProductCard";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

function ProductsSection() {
  useEffect(() => {
    const wrapper = document.getElementById("products-card-wrapper");
    if (wrapper) {
      const handleWheel = (e) => {
        // Verificar si estamos en un extremo
        const isAtStart = wrapper.scrollLeft === 0;
        const isAtEnd =
          wrapper.scrollLeft + wrapper.clientWidth >= wrapper.scrollWidth - 1; // -1 por redondeo de píxeles
        // Determinar la dirección del scroll
        const isScrollingDown = e.deltaY > 0;
        const isScrollingUp = e.deltaY < 0;

        // Si estamos en el inicio y scrolleando hacia arriba,
        // o en el final y scrolleando hacia abajo, permitir el scroll normal
        if ((isAtStart && isScrollingUp) || (isAtEnd && isScrollingDown)) {
          return; // No hacer nada, permitir scroll normal de la página
        }

        // En cualquier otro caso, prevenir el scroll de la página y mover el carrusel
        e.preventDefault();
        wrapper.scrollTo({
          left: wrapper.scrollLeft + (e.deltaY > 0 ? 332 : -332),
          behavior: "smooth",
        });
      };

      wrapper.addEventListener("wheel", handleWheel, { passive: false });
      return () => wrapper.removeEventListener("wheel", handleWheel);
    }
  }, []);

  const handleArrowClick = (side) => {
    const productsCardWrapper = document.getElementById(
      "products-card-wrapper"
    );
    if (side === "left") {
      productsCardWrapper.scrollTo({
        left: productsCardWrapper.scrollLeft - 332,
        behavior: "smooth",
      });
    }
    if (side === "right") {
      productsCardWrapper.scrollTo({
        left: productsCardWrapper.scrollLeft + 332,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="products"
      className="flex flex-col w-[100svw] bg-bgCustomGreen"
    >
      <h2 className="text-primary pl-8 py-8 text-[32px] md:text-[48px]">
        Nuestros Productos
      </h2>

      <div
        id="products-card-wrapper"
        className="flex gap-8 overflow-x-auto pt-4 pb-8 snap-x snap-mandatory pr-8 md:pr-12 pl-8 max-w-[1060px] !m-auto"
      >
        {products.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>

      <div className="flex justify-end px-4 pb-12 pt-6">
        <button
          onClick={() => handleArrowClick("left")}
          className="text-[30px] lg:text-[60px] cursor-pointer p-2 transition-all duration-300 hover:translate-x-[-8px] focus:outline-none"
          aria-label="Desplazar productos a la izquierda"
        >
          <BsArrowLeft className="fill-[#D9D9D9] hover:fill-bgButton_hover transition-colors duration-300 delay-[100ms]" />
        </button>
        <button
          onClick={() => handleArrowClick("right")}
          className="text-[30px] lg:text-[60px] cursor-pointer p-3 transition-all duration-300 hover:translate-x-[8px] focus:outline-none"
          aria-label="Desplazar productos a la derecha"
        >
          <BsArrowRight className="fill-[#D9D9D9] hover:fill-bgButton_hover transition-colors duration-300 delay-[100ms]" />
        </button>
      </div>
    </section>
  );
}

export default ProductsSection;
