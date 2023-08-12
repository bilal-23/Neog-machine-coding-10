const product = {
  id: 1,
  department: "Kitchen",
  name: "Stainless Steel Cookware Set",
  description:
    "A set of high-quality stainless steel cookware including pots and pans.",
  price: 149.99,
  stock: 15,
  sku: "KITCH001",
  supplier: "KitchenWonders Inc.",
  delivered: 15,
  imageUrl: "https://m.media-amazon.com/images/I/616vJsA33kL.jpg",
};
const ProductDetail = () => {
  return (
    <div className="p-12 max-w-[500px] m-auto bg-slate-700 rounded-md flex flex-col  gap-2">
      <p className="py-2 px-4 text-2xl font-bold text-center">{product.name}</p>
      <div className="py-2 px-4 m-auto">
        <img src={product.imageUrl} alt={product.name} className="h-40" />
      </div>
      <div className="text-lg">
        <p className="flex flex-wrap py-2 px-4">
          <span className="min-w-[100px]">Price:</span>
          <span>{product.price}</span>
        </p>
        <p className="flex flex-wrap py-2 px-4">
          <span className="min-w-[100px]">Stock:</span>
          <span>{product.stock}</span>
        </p>
        <p className="flex flex-wrap py-2 px-4">
          <span className="min-w-[100px]">Supplier:</span>
          <span>{product.supplier}</span>
        </p>
        <p className="flex flex-wrap py-2 px-4">
          <span className="min-w-[100px]">Department:</span>
          <span>{product.department}</span>
        </p>
        <p className="flex flex-wrap py-2 px-4">
          <span className="min-w-[100px]">SKU:</span>
          <span>{product.sku}</span>
        </p>
        <p className="flex flex-wrap py-2 px-4">
          <span className="min-w-[100px]">Delivered:</span>
          <span>{product.delivered}</span>
        </p>
        <p className="flex flex-wrap py-2 px-4">
          <span className="min-w-[100px]">Description:</span>
          <span>{product.description}</span>
        </p>
      </div>
    </div>
  );
};

export default ProductDetail;
