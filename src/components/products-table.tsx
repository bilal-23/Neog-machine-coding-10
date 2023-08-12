import { useNavigate } from "react-router-dom";
import { useProductContext } from "../context/product-context";

const ProductTable = () => {
  const { filteredProducts } = useProductContext();

  const navigate = useNavigate();
  const handleNavigateProductDetail = (id: number) => {
    navigate(`/product/${id}`);
  };

  return (
    <table className="min-w-full border border-slate-900 ">
      <thead>
        <tr className="bg-slate-700  text-center">
          <th className="py-2 px-4 ">Image</th>
          <th className="py-2 px-4 ">Name</th>
          <th className="py-2 px-4 ">Description</th>
          <th className="py-2 px-4 ">Price</th>
          <th className="py-2 px-4 ">Stock</th>
          <th className="py-2 px-4 ">Supplier</th>
        </tr>
      </thead>
      <tbody className="px-4 ">
        {filteredProducts.map((product) => (
          <tr
            onClick={handleNavigateProductDetail.bind(this, product.id)}
            key={product.id}
            className="border-b border-slate-900 text-center cursor-pointer hover:bg-slate-900 transition-all duration-400 ease-in-out hover:text-slate-1"
          >
            <td className="py-2 px-4">
              <img src={product.imageUrl} alt={product.name} className="h-16" />
            </td>
            <td className="py-2 px-4">{product.name}</td>
            <td className="py-2 px-4">{product.description}</td>
            <td className="py-2 px-4">${product.price}</td>
            <td className="py-2 px-4">{product.stock}</td>
            <td className="py-2 px-4">{product.supplier}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ProductTable;
