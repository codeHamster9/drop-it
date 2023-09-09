import { useSelector } from "react-redux";
import Badge from "../../atoms/Badge";
import { RootState } from "../../../store";
import { Link } from "react-router-dom";

const Header = () => {
  const count = useSelector((state: RootState) => state.cart.value.length);

  return (
    <div className="header">
      <img
        className="logo"
        srcSet="../../../assets/logo.png"
        alt=""
        width="100"
        height="100"
      />

      <Link to="/cart">
        <Badge count={count} />
      </Link>
    </div>
  );
};

export default Header;
