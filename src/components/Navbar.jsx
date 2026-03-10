import { NavLink } from "react-router-dom";

export default function Navbar () {
    return (
        <>
        <header className="">
            <div>
                <div>
                    <div className="flex ">

                        <div className="">
                            <img src="public/img/shop-trend-logo.png" alt="Logo"  className="w-50 h-30"/>
                        </div>
                       <div className="px-6 pt-10  ">
                        <input type="Search" name="search" placeholder="🔍   Search for products" className="border border-gray-200 p-4 rounded-md w-150" />
                        {/* <i className="fas fa-search text-xl text-black ml-4 "></i> */}
                       </div>
                       <div>

                       </div>
                    </div>
                </div>
                <nav className="flex justify-between items-center px-10 bg-black text-white p-4 font-semibold text-2xl">
                    <div>
                         <h1>All Categories</h1>
                    </div>
                    <div className="space-x-10">
                        <NavLink to="/">Home</NavLink>
                        <NavLink to="/about">About</NavLink>
                        <NavLink to="/products">Products</NavLink>
                        <NavLink to="/faqs">FAQS</NavLink>
                        <NavLink to="/blogs">Blogs</NavLink>
                         <NavLink to="/contact">Contact</NavLink>
                    </div>

                </nav>
            </div>
        </header>
        </>
    )
}