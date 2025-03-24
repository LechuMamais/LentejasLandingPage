import products from "../data/products";
import ProductCard from "./ProductCard";
import { BsArrowRight } from "react-icons/bs";

function ProductsSection() {
  return (
    <section
      id="products"
      className="flex flex-col justify-evenly w-[100svw] h-[100svh] bg-bgCustomGreen px-[120px]"
    >
      <h2 className="text-primary text-[48px]">Nuestros Productos</h2>

      <div className="flex gap-12">
        {products.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>

      <div className="flex flex-row-reverse">
        <div className="pr-[24px] text-[120px] cursor-pointer transition-all duration-200 hover:pr-0">
          <BsArrowRight className="fill-[#D9D9D9] transition-all duration-400 hover:fill-bgButton_hover" />
        </div>
      </div>
    </section>
  );
}

export default ProductsSection;
