import { NavLink } from "react-router-dom";


export default function Navbar() {
  
  return (
    <>
      <header className="sticky top-0 z-50 bg-white">
        <div className="">
          <div className="flex row text-center  px-5">
            <div className="">
              <img
                src="public/img/Sri_Hanloom.png"
                alt="Logo"
                className="w-70 p-2"
              />
            </div>
            <div className="px-6 pt-10 ">
              <input
                type="text"
                name="search"
                placeholder="Search for products"
                className="border border-gray-200 p-3 px-5 rounded-md text-xl italic"
              />
            </div>
            <div className="flex  space-x-10 ">
            <div className="text-3xl text-orange-400 pt-12 space-x-10">
              <i className="fa fa-heart"></i>
              <i className="fa fa-shopping-cart "></i>
            </div>
            <div className="pt-12 font-bold ">
              <button className="bg-gray-300 px-4 p-2">Register</button>
              <button className="bg-black text-white px-4 p-2 ">Login</button>
            </div>
            </div>
          </div>

          <nav className=" flex justify-between items-center px-20 bg-black text-white p-4 font-semibold text-2xl">
            <div className="relative  ">
              <div className="hover:text-gray-800 bg-orange-500 p-2">
                All Categories
                <i className="fa fa-angle-down px-4 text-center"></i>
                <section></section>
              </div>
            </div>
            <div className="space-x-10 ">
              <NavLink to="/" className="hover:text-orange-400">Home</NavLink>
              <NavLink to="/products" className="hover:text-orange-400">Products</NavLink>
              <NavLink to="/faqs" className="hover:text-orange-400">FAQS</NavLink>
              <NavLink to="/contact" className="hover:text-orange-400">Contact</NavLink>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
}
