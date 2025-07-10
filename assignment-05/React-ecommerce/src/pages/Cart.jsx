import useCart from "../context/useCartContext";

export default function Cart() {
  const { cartItems, dispatch } = useCart();
  const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.qty, 0);

  const removeFromCart = (id) => {
    dispatch({
      type: "removeFromCart",
      payload: id,
    });
  };

  return (
    <div>
      <h2 className="text-2xl font-medium text-center my-5">Your Cart</h2>
      <hr />
      {cartItems.length === 0 ? (
        <div className="h-[50vh] flex justify-center items-center">
          <p className="">No cart items found...</p>
        </div>
      ) : (
        <table className="mx-auto">
          <thead className="border-b-2">
            <tr>
              <th></th>
              <th className="text-center text-[12px] md:text-[16px]  md:px-4 py-2">Product</th>
              <th className="text-center text-[12px] md:text-[16px]  md:px-4 py-2">Quantity</th>
              <th className="text-center text-[12px] md:text-[16px] px-1 md:px-4 py-2">Price</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((item) => (
              <tr key={item.id}>
                <td className="text-center px-4 py-2">
                  <img src={item.image} alt={item.title} className="h-16 md:h-20 w-24 md:w-28" />
                </td>
                <td className="text-center text-[12px] md:text-[16px]  md:px-4 py-2">{item.title}</td>
                <td className="text-center text-[12px] md:text-[16px]  md:px-4 py-2">{item.qty}</td>
                <td className="text-center text-[12px] md:text-[16px] px-1 md:px-4 py-2">${(item.price * item.qty).toFixed(2)}</td>
                <td className="text-center text-[12px] md:text-[16px] px-1 md:px-4 py-2">
                  {<button onClick={() => removeFromCart(item.id)}>Remove</button>}
                </td>
              </tr>
            ))}
            <tr className="border-t-2">
              <td></td>
              <td></td>
              <td className="text-right text-[12px] md:text-[16px] py-2 font-medium">Total:</td>
              <td className="text-center text-[12px] md:text-[16px] py-2 font-medium">
                {cartItems.length > 0 ? <p>${totalPrice.toFixed(2)}</p> : null}
              </td>
              <td></td>
            </tr>
          </tbody>
        </table>
      )}
      {/* {cartItems.length > 0 ? <p className="text-center font-medium py-4">Total: ${totalPrice.toFixed(2)}</p> : null} */}
    </div>
  );
}
