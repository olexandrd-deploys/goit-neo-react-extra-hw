import { useSelector } from "react-redux";
import { selectUser } from "../../redux/auth/selectors";
import css from "./UserMenu.module.css";

const UserMenu = () => {
  const userName = useSelector(selectUser).name;
  return (
    <div className={css.UserMenu}>
      <p>Welcome, {userName}</p>
      <button className={css.logout} type="button">
        Logout
      </button>
    </div>
  );
};

export default UserMenu;
