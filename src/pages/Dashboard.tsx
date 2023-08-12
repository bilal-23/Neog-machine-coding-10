import { useEffect, useState } from "react";
import { useProductContext } from "../context/product-context";

const Dashboard = () => {
  const [data, setData] = useState({
    totalStocks: 0,
    totalDelivered: 0,
    lowStockItem: 0,
  });
  const { products } = useProductContext();

  useEffect(() => {
    let totalStocks = 0;
    let totalDelivered = 0;
    let lowStockItem = 0;

    if (products) {
      // Get total stocks
      totalStocks = products.reduce((acc, curr) => {
        return acc + curr.stock;
      }, 0);

      totalDelivered = products.reduce((acc, curr) => {
        return acc + curr.delivered;
      }, 0);

      lowStockItem = products.reduce((acc, curr) => {
        if (curr.stock <= 10) {
          return acc + 1;
        }
        return acc;
      }, 0);

      setData({
        totalStocks,
        totalDelivered,
        lowStockItem,
      });
    }
  }, [products]);

  return (
    <div className="flex gap-4 flex-wrap">
      <Card value={data.totalStocks} title="Total Stocks" />
      <Card value={data.totalDelivered} title="Total Delivered" />
      <Card value={data.lowStockItem} title="Low Stock Items" />
    </div>
  );
};

export default Dashboard;

interface ICardProps {
  title: string;
  value: number;
}
export const Card: React.FC<ICardProps> = ({ title, value }) => {
  return (
    <div className="p-10 w-[200px] flex flex-col justify-center items-center gap-4 text-2xl bg-slate-700 hover:bg-slate-900 duration-300 transition-all ease-in-out rounded-md">
      <p className="text-white">{value}</p>
      <p className="text-white font-bold text-center">{title}</p>
    </div>
  );
};
