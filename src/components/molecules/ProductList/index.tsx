import ProductCard from "../../molecules/ProductCard";
import "./product-list.css";

const ProductList = ({ products }) => {
  return (
    <div className="products-container">
      {products.length
        ? products.map((product, key) => <ProductCard {...product} key={key} />)
        : "Loading..."}
    </div>
  );
};

export default ProductList;
