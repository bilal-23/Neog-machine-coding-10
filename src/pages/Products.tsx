import ProductHeader from "../components/product-header";
import ProductTable from "../components/products-table";

const Products = () => {
  return (
    <>
      <div className="flex flex-col gap-12 text-white w-full">
        <ProductHeader />
        <ProductTable />
      </div>
    </>
  );
};

export default Products;
