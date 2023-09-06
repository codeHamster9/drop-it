import ProductCard from '../../molecules/ProductCard';
import './product-list.css';

const ProductList = ({ products, onClick }) => {
  return (
    <div className="products-container">
      {products.length
        ? products.map((product) => (
            <ProductCard {...product} onClick={onClick} />
          ))
        : 'Loading...'}
    </div>
  );
};

export default ProductList;
