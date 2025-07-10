import "./App.css";
import { Outlet } from "react-router";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="max-w-full">
      <div className="max-w-[1140px] mx-auto">
        <div className="mx-[30px] sm:mx-[50px] lg:mx-100px">
          <NavBar />
        </div>
      </div>
      <div className="max-w-[1140px] mx-auto">
        <div className="mx-[30px] sm:mx-[50px] lg:mx-100px">
          <Outlet />
        </div>
      </div>
      <div className="max-w-[1140px] mx-auto">
        <div className="mt-8 mx-[30px] sm:mx-[50px] lg:mx-100px">
          <Footer />
        </div>
      </div>
    </div>
  );
}
