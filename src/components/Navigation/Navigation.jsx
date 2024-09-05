import { NavLink } from "react-router-dom";
import clsx from "clsx";
import css from "./Navigation.module.css";

const buildLinkClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};

const Navigation = () => {
  return (
    <nav>
      <ul className={css.navigationList}>
        <li>
          <NavLink to="/" className={buildLinkClass}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/contacts" className={buildLinkClass}>
            Contacts
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
