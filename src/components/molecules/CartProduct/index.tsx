import { FunctionComponent, useEffect, useState } from "react";
import Card from "../../atoms/Card";
import "./cart-product.css";
import { useDispatch } from "react-redux";
import { addProduct } from "../../../store/cart/cartSlice";

type Props = {
  id: string;
  title: string;
  price: number;
  currency?: string;
  image?: string;
};

const CartProduct: FunctionComponent<Props> = ({
  id,
  title,
  price,
  currency = "$",
  image,
}) => {
  const [quantitiy, setQuantitiy] = useState(1);
  const [total, setTotal] = useState(price || 0);
  const dispatch = useDispatch();

  useEffect(() => {
    setTotal(price * quantitiy);
  }, [price, quantitiy]);

  return (
    <Card>
      <div className="cart-product-container">
        <img src={image} alt="" className="image" />
        <div className="cart-details-container">
          <div className="title">{title}</div>
          <div className="price">
            {currency}
            {price}
          </div>
          <div className="quantitiy-btn">
            <span
              className="minus-btn"
              onClick={() => setQuantitiy(quantitiy - 1)}>
              -
            </span>
            <span className="total">{quantitiy}</span>
            <span
              className="plus-btn"
              onClick={() => setQuantitiy(quantitiy + 1)}>
              +
            </span>
          </div>
        </div>
        <div className="action-container">
          <div
            className="remove-btn"
            onClick={() =>
              dispatch(addProduct({ id, title, price, image }))
            }></div>
          <div className="total-price">
            {currency} {total.toFixed(2)}
          </div>
        </div>
      </div>
    </Card>
  );
};

export default CartProduct;
