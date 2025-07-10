import products from "../data/products";
import ProductCard from "../components/ProductCard";
import { useState } from "react";

export default function Home() {
  const [filter, setFilter] = useState("");

  const sortedProducts = [...products].sort((a, b) => {
    if (filter === "lowToHigh") return a.price - b.price;
    if (filter === "highToLow") return b.price - a.price;
    return 0;
  });

  const handleFilter = (e) => setFilter(e.target.value);

  return (
    <div>
      {/* product section header  */}
      <div className="grid grid-cols-1 sm:grid-cols-2 my-5 gap-4">
        <h3 className="text-xl lg:text-2xl font-medium">Exclusive Products</h3>
        <div className="flex items-center sm:justify-end">
          <p className="font-medium mr-2">Sort by price:</p>
          <select onChange={handleFilter} className="bg-sky-100 px-3">
            <option value="default">Default</option>
            <option value="lowToHigh">Low ➝ High</option>
            <option value="highToLow">High ➝ Low</option>
          </select>
        </div>
      </div>

      {/* product collection */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {sortedProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
