import Dashboard from "./pages/Dashboard";
import { Routes, Route } from "react-router-dom";
import Navigation from "./components/navigation";
import Departments from "./pages/Departments";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import NewProduct from "./pages/NewProduct";

function App() {
  return (
    <>
      <main className="flex  bg-slate-800">
        <Navigation />
        <section className="py-10 px-12 w-full">
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/departments" element={<Departments />} />
            <Route path="/products" element={<Products />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/add-product" element={<NewProduct />} />
            <Route path="*" element={<div>404: Not Found</div>} />
          </Routes>
        </section>
      </main>
    </>
  );
}

export default App;
