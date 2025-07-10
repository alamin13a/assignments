import products from "../data/products";
import { useParams } from "react-router";
import useCart from "../context/useCartContext";

export default function ProductDetails() {
  const { productId } = useParams();
  const product = products.find((p) => p.id === parseInt(productId));

  const { dispatch } = useCart();
  const handleAddToCart = () => {
    dispatch({
      type: "addToCart",
      payload: product,
    });
  };

  return (
    <div className="mt-12">
      <div className="grid lg:grid-cols-2 gap-8 justify-center">
        <div>
          <img src={product.image} alt={product.title} className="w-[400px] mx-auto" />
        </div>
        <div className="flex flex-col gap-5 max-w-[400px] lg:w-full ">
          <h5 className="text-xl lg:text-2xl font-medium mt-2">{product.title}</h5>
          <p className=" lg:text-xl">{product.description}</p>
          <p>Price: $ {product.price.toFixed(2)}</p>
          <button onClick={handleAddToCart} className="bg-[#f85606] text-white w-fit py-1 px-5 rounded cursor-pointer">
            Add To Cart
          </button>
        </div>
      </div>
      <div>
        <h3 className="text-xl md:text-2xl mt-8">More Details</h3>
        <hr />
        <p className="my-4 text-sm md:text-[16px]">{product.more}</p>
        <img src={product.image} alt="" className="mx-auto" />
      </div>
    </div>
  );
}
