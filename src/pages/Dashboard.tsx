const Dashboard = () => {
  return (
    <div className="flex gap-4 flex-wrap">
      <Card value={"77"} title="Total Stock" />
      <Card value={"77"} title="Total Stock" />
      <Card value={"77"} title="Total Stock" />
    </div>
  );
};

export default Dashboard;

interface ICardProps {
  title: string;
  value: string;
}
export const Card: React.FC<ICardProps> = ({ title, value }) => {
  return (
    <div className="p-10 w-[200px] flex flex-col justify-center items-center gap-4 text-2xl bg-slate-700 hover:bg-slate-900 duration-300 transition-all ease-in-out rounded-md">
      <p className="text-white">{value}</p>
      <p className="text-white font-bold text-center">{title}</p>
    </div>
  );
};
