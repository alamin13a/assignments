const Logo = () => (
  <svg width="50" height="50" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="align-middle">
    {/* React atom swirl */}
    <circle cx="32" cy="32" r="6" fill="#61DAFB" />
    <ellipse cx="32" cy="32" rx="20" ry="6" stroke="#61DAFB" strokeWidth="3" fill="none" transform="rotate(45 32 32)" />
    <ellipse cx="32" cy="32" rx="20" ry="6" stroke="#61DAFB" strokeWidth="3" fill="none" transform="rotate(-45 32 32)" />
  </svg>
);

const NavbarLogo = () => (
  <div className="flex items-center text-[#20232a] font-semibold text-lg font-sans gap-2">
    <Logo />
    <span className="text-xl lg:text-2xl">React E-commerce</span>
  </div>
);

export default NavbarLogo;
