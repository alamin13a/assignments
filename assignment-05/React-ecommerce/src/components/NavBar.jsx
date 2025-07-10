import NavbarLogo from "./NavbarLogo";
import { Link } from "react-router";
import { MdAddShoppingCart } from "react-icons/md";
import useCart from "../context/useCartContext";

export default function NavBar() {
  const { cartItems } = useCart();
  const totalCart = cartItems.length;

  return (
    <div className="flex flex-col items-center">
      <div className="sm:py-2 md:py-5">
        <Link to="/">
          <NavbarLogo />
        </Link>
      </div>
      <nav className="bg-[#F85606] text-white w-full">
        <ul className="flex gap-5 justify-center items-center font-medium">
          <li className="py-1 sm:py-2 px-5 text-sm md:text-[16px]">
            <Link to="/">Home</Link>
          </li>
          <li className="py-1 sm:py-2 px-5 text-sm md:text-[16px]">
            <Link to="about">About</Link>
          </li>
          <li className="py-1 sm:py-2 px-5 text-sm md:text-[16px]">
            <Link to="cart" className="flex justify-center items-center">
              <MdAddShoppingCart className="text-xl" /> <span>{totalCart}</span>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
