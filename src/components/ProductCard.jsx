import { motion } from "framer-motion";

function ProductCard({ product }) {
  return (
    <motion.div
      className="w-[300px] md:w-[300px] border border-gray-200 rounded-[16px] overflow-hidden shrink-0 bg-bgCustom"
      style={{ boxShadow: "var(--shadow-default)" }}
      whileHover={{
        scale: 1.015,
        boxShadow: "var(--shadow-hover)",
        transition: { duration: 0.15 },
      }}
    >
      <img
        src={product.image.url}
        alt={product.image.alt}
        className="object-cover w-full h-[300px]"
      />

      <div className="p-4 space-y-2">
        <h3 className="text-xl font-semibold text-primary">{product.title}</h3>

        <p className="text-sm text-primary font-Inter">{product.description}</p>
      </div>
    </motion.div>
  );
}

export default ProductCard;
