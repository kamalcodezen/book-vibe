import { NavLink } from "react-router";

const Navbar = () => {
  const navMenu = [
    { label: "Home", path: "/" },
    { label: "Listed Books", path: "/allListedBooks" },
    { label: "Page To Read", path: "/pageRead" },
  ];

  return (
    <div>
      <div className=" navbar container  mx-auto bg-base-100 ">
        <div className="navbar-start ">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <a>Item 1</a>
              </li>
              <li>
                <a>Parent</a>
                <ul className="p-2">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </li>
              <li>
                <a>Item 3</a>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">Book Vibe</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal ">
            {navMenu.map((menu, ind) => (
              <NavLink
                className={({ isActive }) =>
                  `relative  ml-7 text-[15px] font-medium transition duration-300 
                  ${isActive ? "text-green-600" : "text-gray-600 hover:text-green-500"}

                  after:content-[''] after:absolute after:left-0 after:-bottom-1 
                  after:h-[2px] after:w-full 
                  after:origin-left after:scale-x-0 
                  after:bg-green-600 after:transition-transform after:duration-300

                  ${isActive ? "after:scale-x-100" : "hover:after:scale-x-100"}
                  `
                }
                key={ind}
                to={menu.path}
              >
                {menu.label}
              </NavLink>
            ))}
          </ul>
        </div>
        <div className="navbar-end space-x-6">
          <a className="btn btn-accent font-medium text-white">Sign In</a>
          <a className="btn btn-info   font-medium text-white">Sign Up</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
