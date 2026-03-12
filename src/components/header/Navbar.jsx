import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
// import Categories from "./Categories";

export default function Navbar({ cart }) {
  
  const navigate = useNavigate();
  return (
    <>
      <header className="sticky top-0 z-50 bg-white ">
        <div className="">
          <div className="flex items-center justify-between px-5">
            <div className="">
              <img
                src="public/logo/Sri_Hanloom.png"
                alt="Logo"
                className="w-50 p-2"
              />
            </div>

            <div className="flex space-x-10 ">
              <div className="flex text-3xl text-orange-400 pt-12 space-x-10">
                <i className="fa fa-heart"></i>
                {/* items count show */}
                <NavLink to="/cart" className="relative">
                  <i className="fa fa-shopping-cart text-3xl"></i>
                  {cart.length > 0 && (
                    <span className="absolute -top-2 -right-3 bg-red-500 text-white px-2 rounded-full text-sm">
                      {cart.reduce((sum, item) => sum + item.qty, 0)}
                    </span>
                  )}
                </NavLink>
              </div>

              <div className="pt-12 font-bold pb-10 ">
                <button className="bg-gray-300 px-4 p-2">Register</button>
                <button className="bg-black text-white px-4 p-2 ">Login</button>
              </div>
            </div>
          </div>

          <nav className=" flex justify-between items-center px-20 bg-black text-white p-1 font-semibold text-2xl">
            <div className="hover:text-gray-800 bg-orange-500 p-2 relative">
              All Categories
              <i className="fa fa-angle-down px-4 text-center"></i>
              <div className="absolute top-full left-0">
                {/* <Categories
                  onSelect={(cat) => navigate(`/products?category=${cat}`)}
                /> */}
              </div>
            </div>

            <div className="space-x-10 ">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "text-orange-400" : "hover:text-orange-400"
                }
              >
                Home
              </NavLink>
              <NavLink
                to="/products"
                className={({ isActive }) =>
                  isActive ? "text-orange-400" : "hover:text-orange-400"
                }
              >
                Products
              </NavLink>
              <NavLink
                to="/faqs"
                className={({ isActive }) =>
                  isActive ? "text-orange-400" : "hover:text-orange-400"
                }
              >
                FAQS
              </NavLink>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive ? "text-orange-400" : "hover:text-orange-400"
                }
              >
                Contact
              </NavLink>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
}
