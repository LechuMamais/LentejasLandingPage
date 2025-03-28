function ProductCard({ product }) {
  return (
    <div className="w-[300px] md:w-[300px] border border-gray-200 rounded-[16px] overflow-hidden shrink-0 shadow-md bg-bgCustom transition-transform duration-150 ease-in-out hover:shadow-lg hover:transform hover:scale-102">
      <img
        src={product.image.url}
        alt={product.image.alt}
        className="object-cover w-full h-[300px]"
      />

      <div className="p-4 space-y-2">
        <h3 className="text-xl font-semibold text-primary">{product.title}</h3>

        <p className="text-sm text-primary font-Inter">{product.description}</p>
      </div>
    </div>
  );
}

export default ProductCard;
