import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { useProductContext } from "../context/product-context";
interface Product {
  id: number;
  department: string;
  name: string;
  description: string;
  price: number;
  stock: number;
  sku: string;
  supplier: string;
  delivered: number;
  imageUrl: string;
}

const ProductDetail = () => {
  const [product, setProduct] = useState<Product>();
  const { id } = useParams();
  const navigate = useNavigate();
  const { getProduct } = useProductContext();

  useEffect(() => {
    if (!id) return navigate("/404");
    console.log(id);
    const product = getProduct(id);
    if (product) setProduct(product);
  }, [id]);

  if (!product) return null;
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
