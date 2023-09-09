import { useState } from "react";
import Input from "../../components/atoms/Input";
import ProductList from "../../components/molecules/ProductList";
import "./product-catalog.css";
import { fetchProducts } from "../../api/products";
import { useLoaderData } from "react-router-dom";
import { Product } from "../../types/Product";

export async function loader() {
  return await fetchProducts();
}

const filterProducts = (products, query) => {
  if (!query) return products;
  return products.filter((p) => {
    const id = p.id.toString();
    const title = p.title.toLowerCase();
    return id.includes(query) || title.includes(query);
  });
};

const ProductCatalog = () => {
  const [search, setSearch] = useState("");
  const products = useLoaderData() as Product[];

  return (
    <div className="catalog-container">
      <span className="main-title">Catalog</span>
      <Input value={search} onChange={(e) => setSearch(e.target.value)} />
      <ProductList products={filterProducts(products, search)} />
    </div>
  );
};

export default ProductCatalog;
