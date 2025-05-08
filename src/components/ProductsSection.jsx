import { useEffect } from "react";
import products from "../data/products";
import ProductCard from "./ProductCard";
import ArrowButtons from "./ArrowButtons";

function ProductsSection() {
  useEffect(() => {
    const wrapper = document.getElementById("products-card-wrapper");
    if (wrapper) {
      const handleWheel = (e) => {
        const isAtStart = wrapper.scrollLeft === 0;
        const isAtEnd =
          wrapper.scrollLeft + wrapper.clientWidth >= wrapper.scrollWidth - 1;
        const isScrollingDown = e.deltaY > 0;
        const isScrollingUp = e.deltaY < 0;

        if ((isAtStart && isScrollingUp) || (isAtEnd && isScrollingDown)) {
          return;
        }

        e.preventDefault();
        wrapper.scrollTo({
          left: wrapper.scrollLeft + (isScrollingDown ? 332 : -332),
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

    productsCardWrapper.scrollTo({
      left:
        side === "left"
          ? productsCardWrapper.scrollLeft - 332
          : productsCardWrapper.scrollLeft + 332,
      behavior: "smooth",
    });
  };

  return (
    <section
      id="products"
      className="flex flex-col w-[100svw] bg-bgCustomGreen overflow-hidden pt-[60px]"
    >
      <h2 className="text-primary pl-8 py-8 text-[32px] md:text-[48px]">
        Nuestros Productos
      </h2>

      <div
        id="products-card-wrapper"
        className="flex gap-8 overflow-x-auto pt-4 pb-8 snap-x snap-mandatory pr-8 md:pr-12 pl-8 max-w-[1060px] w-full !m-auto"
      >
        {products.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>

      <div className="flex justify-end px-4 pb-12 pt-6">
        <ArrowButtons handleArrowClick={handleArrowClick} />
      </div>
    </section>
  );
}

export default ProductsSection;
