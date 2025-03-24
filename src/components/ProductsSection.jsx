import { useEffect } from "react";
import products from "../data/products";
import ProductCard from "./ProductCard";
import { BsArrowRight } from "react-icons/bs";

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

  const handleArrowClick = () => {
    const productsCardWrapper = document.getElementById(
      "products-card-wrapper"
    );
    productsCardWrapper.scrollTo({
      left: productsCardWrapper.scrollLeft + 332,
      behavior: "smooth",
    });
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
        className="flex gap-8 md:gap-12 overflow-x-auto pt-4 pb-8 snap-x snap-mandatory pr-8 md:pr-12 pl-8"
      >
        {products.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>

      <div className="flex flex-row-reverse">
        <button
          onClick={handleArrowClick}
          className="pr-6 text-[80px] md:text-[120px] md:pb-8 cursor-pointer transition-all duration-200 hover:pr-2 focus:outline-none"
          aria-label="Desplazar productos a la derecha"
        >
          <BsArrowRight className="fill-[#D9D9D9] hover:fill-bgButton_hover transition-colors duration-300" />
        </button>
      </div>
    </section>
  );
}

export default ProductsSection;
