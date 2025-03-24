import { useEffect } from "react";
import products from "../data/products";
import ProductCard from "./ProductCard";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

function ProductsSection() {
  useEffect(() => {
    const wrapper = document.getElementById("products-card-wrapper");
    if (wrapper) {
      const handleWheel = (e) => {
        if (e.deltaY !== 0) {
          e.preventDefault();
          wrapper.scrollTo({
            left: wrapper.scrollLeft + e.deltaY,
            behavior: "smooth",
          });
        }
      };
      wrapper.addEventListener("wheel", handleWheel);
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
      className="flex flex-col w-[100svw] bg-bgCustomGreen md:px-[120px]"
    >
      <h2 className="text-primary pl-8 py-8 text-[32px] md:text-[48px]">
        Nuestros Productos
      </h2>

      <div
        id="products-card-wrapper"
        className="flex gap-8 overflow-x-auto pt-4 pb-8 snap-x snap-mandatory pr-8 md:pr-12 pl-8"
      >
        {products.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>

      <div className="flex justify-end px-0 pb-12 pt-6">
        <button
          onClick={() => handleArrowClick("left")}
          className="text-[60px] lg:text-[80px] cursor-pointer transition-all duration-300 hover:translate-x-[-8px] focus:outline-none"
          aria-label="Desplazar productos a la izquierda"
        >
          <BsArrowLeft className="fill-[#D9D9D9] hover:fill-bgButton_hover transition-colors duration-300 delay-[100ms]" />
        </button>
        <button
          onClick={() => handleArrowClick("right")}
          className="text-[60px] lg:text-[80px] cursor-pointer transition-all duration-300 hover:translate-x-[8px] focus:outline-none"
          aria-label="Desplazar productos a la derecha"
        >
          <BsArrowRight className="fill-[#D9D9D9] hover:fill-bgButton_hover transition-colors duration-300 delay-[100ms]" />
        </button>
      </div>
    </section>
  );
}

export default ProductsSection;
