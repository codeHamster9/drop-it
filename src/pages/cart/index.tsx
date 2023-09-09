import { useSelector } from "react-redux";
import { RootState } from "../../store";
import ProductList from "../../components/molecules/ProductList";

const Cart = () => {
  const products = useSelector((state: RootState) => state.cart.value);

  return <ProductList products={products} />;
};

export default Cart;
