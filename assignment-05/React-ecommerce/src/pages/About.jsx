import aboutImage from "../assets/images/shop.jpg";

export default function About() {
  return (
    <div>
      <div className="relative h-[400px] bg-cover bg-center" style={{ backgroundImage: `url(${aboutImage})` }}>
        <div className="absolute inset-0 bg-black/40 custom-blur-overlay"></div>

        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2">About This Store</h1>
            <p className="text-gray-200 text-[12px] sm:text-sm ld:text-[16px]">
              This is a simple React E-commerce frontend project using Context API and React Router.
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4 my-4">
        <h2 className="text-lg md:text-2xl font-medium">🛒 About Us — React E-commerce</h2>
        <p className="indent-4 text-sm md:text-[16px]">
          Welcome to React E-commerce, your trusted destination for high-quality products and a smooth, modern shopping experience. Built with the
          latest technologies and designed for simplicity, React E-commerce is more than just an online store — it's a shopping experience designed
          around you.
        </p>
        <p className="indent-4 text-sm md:text-[16px]">
          At React E-commerce, we believe buying what you need — or love — should be easy, secure, and enjoyable. That's why we've created a platform
          that brings together a wide selection of carefully curated products, all accessible with just a few clicks. Whether you're shopping for
          fashion, electronics, home goods, or lifestyle essentials, we've got something for everyone.
        </p>
        <hr />
        <h3 className="ext-lg md:text-2xl font-medium">🌟 Why Choose React E-commerce?</h3>
        <ul className="list-disc list-inside">
          <li>
            <span className="font-medium text-sm md:text-[16px]">Diverse Product Selection</span> <br />{" "}
            <p className="indent-6 text-sm md:text-[16px]">
              From everyday essentials to trending must-haves, our catalog is constantly updated to meet your needs and interests.
            </p>
          </li>
          <li>
            <span className="font-medium text-sm md:text-[16px]">Fast, Secure Checkout</span> <br />
            <p className="indent-6 text-sm md:text-[16px]">
              Enjoy a seamless checkout experience backed by trusted payment gateways and encrypted data security.
            </p>
          </li>

          <li>
            <span className="font-medium text-sm md:text-[16px]">Reliable Shipping</span> <br />
            <p className="indent-6 text-sm md:text-[16px]">We work with top logistics partners to ensure your order arrives quickly and safely.</p>
          </li>

          <li>
            <span className="font-medium text-sm md:text-[16px]">Customer-First Support</span> <br />
            <p className="indent-6 text-sm md:text-[16px]">
              Need help? Our friendly support team is here to answer your questions and resolve any issues quickly.
            </p>
          </li>
          <li>
            <span className="font-medium text-sm md:text-[16px]">Built with Modern Tech</span> <br />
            <p className="indent-6 text-sm md:text-[16px]">
              Powered by React and the latest web technologies, our store is optimized for speed, performance, and mobile
            </p>
          </li>
        </ul>
        <hr />
        <p className="indent-4 text-sm md:text-[16px] ">
          Whether you're a first-time visitor or a returning customer, we're glad you're here. At React E-commerce, your satisfaction is our mission —
          and your trust is our biggest reward.
        </p>
        <p className="font-medium text-sm md:text-[16px]">Thank you for choosing us. Let's make online shopping smarter, together.</p>
      </div>
    </div>
  );
}
