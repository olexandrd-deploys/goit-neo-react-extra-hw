import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../redux/auth/selectors";
import css from "./UserMenu.module.css";
import { logOut } from "../../redux/auth/operations";

const UserMenu = () => {
  const dispatch = useDispatch();
  const userName = useSelector(selectUser).name;

  const handleLogout = () => {
    dispatch(logOut());
  };

  return (
    <div className={css.UserMenu}>
      <p>Welcome, {userName}</p>
      <button className={css.logout} onClick={handleLogout} type="button">
        Logout
      </button>
    </div>
  );
};

export default UserMenu;
