import React, { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import ProductCard from "../components/ProductCard";
import ProductFilter from "../components/ProductFilter";
import products from "../data/products";

const Home = () => {
  const { dispatch } = useContext(CartContext);
  const [filter, setFilter] = useState("");

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  const sortedProducts = [...products].sort((a, b) => {
    if (filter === "low") return a.price - b.price;
    if (filter === "high") return b.price - a.price;
    return 0;
  });

  return (
    <div className="p-4">
      <ProductFilter onChange={handleFilterChange} />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {sortedProducts.map((product) => (
          <ProductCard key={product.id} product={product} dispatch={dispatch} />
        ))}
      </div>
    </div>
  );
};

export default Home;
