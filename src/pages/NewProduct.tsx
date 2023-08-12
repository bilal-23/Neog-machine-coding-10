import { Label } from "../components/ui/label";
import { Input } from "../components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";
import { SyntheticEvent, useState } from "react";
import { Textarea } from "../components/ui/textarea";
import { Button } from "../components/ui/button";
import { useProductContext } from "../context/product-context";
import { useNavigate } from "react-router";

interface IInitialState {
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

const initialState: IInitialState = {
  id: Math.floor(Math.random() * 10000),
  department: "",
  name: "",
  description: "",
  price: 0,
  stock: 0,
  sku: "",
  supplier: "",
  delivered: 0,
  imageUrl: "",
};

const NewProduct = () => {
  const { addProduct } = useProductContext();
  const [formData, setFormData] = useState(initialState);
  const navigate = useNavigate();
  const [buttonDisabled, setButtonDisabled] = useState(true);

  const handleChangeInput = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const temp = { ...formData, [e.target.id]: e.target.value };
    // Check if all fields are filled
    if (Object.values(temp).every((value) => value !== null)) {
      setButtonDisabled(false);
    }
    setFormData((prev) => {
      return { ...prev, [e.target.id]: e.target.value };
    });
  };

  const handleFormSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    addProduct(formData);
    navigate("/products");
  };

  return (
    <>
      <h1 className="text-4xl font-bold mb-4 text-center">Add New Product</h1>
      <form
        className="flex flex-col gap-2 border-slate-900 w-auto lg:w-1/2 m-auto"
        onSubmit={handleFormSubmit}
      >
        <div>
          <Label htmlFor="department">Department:</Label>
          <Select
            onValueChange={(e) => {
              setFormData((prev) => {
                return { ...prev, department: e };
              });
            }}
          >
            <SelectTrigger id="department" className="w-full">
              <SelectValue placeholder="Select Department" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="disabled" disabled>
                Department
              </SelectItem>
              <SelectItem value="kithcen">Kitchen</SelectItem>
              <SelectItem value="clothing">Clothing</SelectItem>
              <SelectItem value="toys">Toys</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div>
          <Label htmlFor="name">Name:</Label>
          <Input id="name" required onChange={handleChangeInput} />
        </div>
        <div className="textarea">
          <Label htmlFor="description">Description:</Label>
          <Textarea
            id="description"
            className="overflow-hidden textarea"
            required
            onChange={handleChangeInput}
          />
        </div>
        <div>
          <Label htmlFor="price">Price:</Label>
          <Input
            id="price"
            placeholder="0"
            type="number"
            required
            onChange={handleChangeInput}
          />
        </div>
        <div>
          <Label htmlFor="stock">Stock:</Label>
          <Input
            id="stock"
            type="number"
            placeholder="0"
            onChange={handleChangeInput}
          />
        </div>
        <div>
          <Label htmlFor="sku">SKU:</Label>
          <Input id="sku" type="text" required onChange={handleChangeInput} />
        </div>
        <div>
          <Label htmlFor="supplier">Supplier:</Label>
          <Input
            id="supplier"
            type="text"
            required
            onChange={handleChangeInput}
          />
        </div>
        <div>
          <Label htmlFor="delivered">Delivered:</Label>
          <Input
            id="delivered"
            type="number"
            placeholder="0"
            required
            onChange={handleChangeInput}
          />
        </div>
        <div>
          <Label htmlFor="imageUrl">Image Url:</Label>
          <Input
            id="imageUrl"
            type="text"
            required
            onChange={handleChangeInput}
          />
        </div>
        <div className="mt-2">
          <Button className="w-full" disabled={buttonDisabled}>
            Add Product
          </Button>
        </div>
      </form>
    </>
  );
};

export default NewProduct;
