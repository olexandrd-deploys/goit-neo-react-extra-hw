import { NavLink } from "react-router-dom";
import clsx from "clsx";
import css from "./AuthNav.module.css";

const AuthNav = () => {
  const buildLinkClass = ({ isActive }) => {
    return clsx(css.link, isActive && css.active);
  };
  return (
    <nav className={css.navigationContainer}>
      <ul className={css.navigationList}>
        <li>
          <NavLink to="/register" className={buildLinkClass}>
            Register
          </NavLink>
        </li>
        <li>
          <NavLink to="/login" className={buildLinkClass}>
            Log In
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default AuthNav;
