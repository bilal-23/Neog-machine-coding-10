import { SyntheticEvent } from "react";
import { Link, useNavigate } from "react-router-dom";

const Departments = () => {
  return (
    <div className="flex gap-4 flex-wrap">
      <Card link={"products/?department=kitchen"} title="Kitchen" />
      <Card link={"products/?department=clothing"} title="Clothing" />
      <Card link={"products/?department=toys"} title="Toys" />
    </div>
  );
};

export default Departments;

interface ICardProps {
  title: string;
  link: string;
}
export const Card: React.FC<ICardProps> = ({ title, link }) => {
  const navigate = useNavigate();

  // This function chnages the filter in the store and navigates to the products page
  const handleClick = (e: SyntheticEvent) => {
    e.preventDefault();
    // dispatch(setFilter({department: title}))
    navigate(`/${link}`);
  };

  return (
    <Link to={`/${link}`} onClick={handleClick}>
      <div className="p-10 w-[200px] flex flex-col justify-center items-center text-2xl bg-slate-700 hover:bg-slate-900 duration-300 transition-all ease-in-out rounded-md">
        <p className="font-bold text-white">{title}</p>
      </div>
    </Link>
  );
};
