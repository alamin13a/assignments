import { Link } from "react-router";
import useCart from "../context/useCartContext";

export default function ProductCard({ product }) {
  const shortDescription = product.description.length > 60 ? product.description.slice(0, 60) + "..." : product.description;

  const { dispatch } = useCart();

  const handleAddToCart = () => {
    dispatch({
      type: "addToCart",
      payload: product,
    });
  };

  return (
    <div className="shadow-2xl">
      <Link to={`/product/${product.id}`}>
        <img src={product.image} alt={product.title} className="w-full h-80 object-cover" />
      </Link>
      <div className="flex flex-col gap-2 p-4 pt-2">
        <Link to={`/product/${product.id}`}>
          <h4 className="text-[18px] font-medium">{product.title}</h4>
        </Link>
        <p className="text-gray-500 text-sm">{shortDescription}</p>

        <div className="flex justify-between">
          <p className="font-medium">Price: ${product.price.toFixed(2)}</p>
          <button onClick={handleAddToCart} className="text-[#F85606] border-2 border-[#F85606]  text-sm font-medium px-3 rounded cursor-pointer">
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
}
