import { createContext, useContext, useEffect, useState } from "react";
import { inventoryData } from "../data";

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

interface ProductContextType {
  products: Product[];
  addProduct: (product: Product) => void;
  getProduct: (id: string) => Product | undefined;
  activeFilters: {
    department: string;
    lowStock: boolean;
    sortBy: string;
  };
  filteredProducts: Product[];
  updateActiveFilters: (
    filterType: "department" | "lowStock" | "sortBy",
    value: string | boolean
  ) => void;
}
interface filterType {
  department: string;
  lowStock: boolean;
  sortBy: string;
}
const ProductContext = createContext<ProductContextType>({
  products: [],
  filteredProducts: [],
  activeFilters: {
    department: "",
    lowStock: false,
    sortBy: "",
  },
  addProduct: (_product: Product) => {},
  getProduct: (_id: string) => undefined,
  updateActiveFilters: (
    _filterType: "department" | "lowStock" | "sortBy",
    _value: string | boolean
  ) => {},
});

interface IProps {
  children: React.ReactNode;
}
export const ProductProvider: React.FC<IProps> = ({ children }) => {
  const [allProducts, setAllProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]); // [
  const [activeFilters, setActiveFilters] = useState({
    department: "all",
    lowStock: false,
    sortBy: "",
  });

  useEffect(() => {
    // Get Data from local storage
    const persistedInventory = localStorage.getItem("inventory");
    if (persistedInventory) {
      setAllProducts(JSON.parse(persistedInventory));
      setFilteredProducts(JSON.parse(persistedInventory));
      return;
    }
    // Set Data to local storage
    setAllProducts(inventoryData);
    setFilteredProducts(inventoryData);
    localStorage.setItem("inventory", JSON.stringify(inventoryData));
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      filterProducts(activeFilters, allProducts);
    }, 100);
    return () => {
      clearTimeout(timer);
    };
  }, [activeFilters, allProducts]);

  const addProduct = (product: Product) => {
    setAllProducts([...allProducts, product]);
    localStorage.setItem(
      "inventory",
      JSON.stringify([...allProducts, product])
    );
  };
  const getProduct = (id: string) => {
    return allProducts.find((product) => product.id === parseInt(id));
  };
  const updateActiveFilters = (
    filterType: "department" | "lowStock" | "sortBy",
    value: string | boolean
  ) => {
    if (filterType === "lowStock") {
      setActiveFilters({ ...activeFilters, lowStock: value as boolean });
      return;
    } else {
      setActiveFilters({ ...activeFilters, [filterType]: value as string });
    }
  };

  const filterProducts = (filters: filterType, products: Product[]) => {
    if (
      filters.department === "" &&
      !filters.lowStock &&
      filters.sortBy === ""
    ) {
      setFilteredProducts(products);
      return;
    }

    let tempProducts = [...products];
    // filter by department
    if (filters.department !== "") {
      tempProducts = tempProducts.filter(
        (product) =>
          product.department.toLocaleLowerCase() ===
          filters.department.toLocaleLowerCase()
      );
    }
    if (filters.department === "all") {
      tempProducts = [...products];
    }
    // filter by low stock
    if (filters.lowStock) {
      tempProducts = tempProducts.filter((product) => product.stock <= 10);
    }
    // Ascending Order
    // sort by price
    if (filters.sortBy === "price") {
      tempProducts = tempProducts.sort((a, b) => a.price - b.price);
    }
    // sort by name (alphabetical) ascending
    if (filters.sortBy === "name") {
      tempProducts = tempProducts.sort((a, b) => {
        return a.name.localeCompare(b.name);
      });
    }
    // sort by stock (ascending)
    if (filters.sortBy === "stock") {
      tempProducts = tempProducts.sort((a, b) => a.stock - b.stock);
    }

    setFilteredProducts(tempProducts);
  };

  const value = {
    products: allProducts,
    addProduct,
    getProduct,
    activeFilters,
    filteredProducts,
    updateActiveFilters,
  };
  return (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  );
};

export const useProductContext = () => useContext(ProductContext);
