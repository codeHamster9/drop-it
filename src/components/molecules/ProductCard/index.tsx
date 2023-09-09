import { FunctionComponent } from "react";
import Card from "../../atoms/Card";
import "./product-card.css";
import { useDispatch } from "react-redux";
import { addProduct } from "../../../store/cart/cartSlice";
import { Product } from "../../../types/Product";

const CatalogProduct: FunctionComponent<Product> = ({
  id,
  title,
  price,
  currency = "$",
  image,
}) => {
  const dispatch = useDispatch();
  return (
    <Card>
      <div className="container">
        <img src={image} alt="" className="image" />
        <div className="details-container">
          <div className="code">{id}</div>
          <div className="title">{title}</div>
          <div className="price">
            {currency}
            {price}
          </div>
        </div>
        <div
          className="action-btn"
          onClick={() =>
            dispatch(addProduct({ id, title, price, image }))
          }></div>
      </div>
    </Card>
  );
};

export default CatalogProduct;
