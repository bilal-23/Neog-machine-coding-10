import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";
import { Checkbox } from "../components/ui/checkbox";
import { Button } from "../components/ui/button";
import { Link } from "react-router-dom";
import { useProductContext } from "../context/product-context";

const ProductHeader = () => {
  const { updateActiveFilters, activeFilters } = useProductContext();

  return (
    <div className="flex justify-between">
      <h1 className="text-4xl font-bold">Products</h1>
      <Select onValueChange={(e) => updateActiveFilters("department", e)}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Department" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="disabled" disabled>
            Department
          </SelectItem>
          <SelectItem value="kitchen">Kitchen</SelectItem>
          <SelectItem value="clothing">Clothing</SelectItem>
          <SelectItem value="toys">Toys</SelectItem>
        </SelectContent>
      </Select>
      <div className="flex items-center gap-2">
        <Checkbox
          id="low-stock"
          checked={activeFilters.lowStock}
          onCheckedChange={(e) => {
            updateActiveFilters("lowStock", e);
          }}
        />
        <label
          htmlFor="low-stock"
          className="text-base cursor-pointer font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          Low Stock
        </label>
      </div>
      <Select
        onValueChange={(e) => {
          updateActiveFilters("sortBy", e);
        }}
      >
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder={"Sort By"} />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="disabled" disabled>
            Sort By
          </SelectItem>
          <SelectItem value="name" defaultChecked>
            Name
          </SelectItem>
          <SelectItem value="price">Price</SelectItem>
          <SelectItem value="stock">Stock</SelectItem>
        </SelectContent>
      </Select>
      <Link to="/add-product">
        <Button variant="outline">New</Button>
      </Link>
    </div>
  );
};

export default ProductHeader;
