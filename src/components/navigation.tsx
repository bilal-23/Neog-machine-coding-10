import { cn } from "../lib/utils";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div className={cn("min-w-1/5 bg-slate-700 px-10 py-20 min-h-screen")}>
      <ul className={cn("flex flex-col gap-4 text-2xl")}>
        <li className="hover:text-white text-slate-400">
          <NavLink
            to={"/dashboard"}
            className={({ isActive }) => (!isActive ? "" : "text-white")}
          >
            Dashboard
          </NavLink>
        </li>
        <li className="hover:text-white text-slate-400">
          <NavLink
            to={"/departments"}
            className={({ isActive }) => (!isActive ? "" : "text-white")}
          >
            Department
          </NavLink>
        </li>
        <li className="hover:text-white text-slate-400">
          <NavLink
            to={"/products"}
            className={({ isActive }) => (!isActive ? "" : "text-white")}
          >
            Products
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navigation;
