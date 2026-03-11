
import { useState, useEffect } from "react";


export default function HomePage() {
  const images = ["/img/handloom.jpg", "/img/bg saran.jpg"];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const slider = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 6000);

    return () => clearInterval(slider);
  }, []);

  return (
    <div className="relative w-full overflow-hidden">
      {/* image slider */}
      <img
        src={images[current]}
        alt="slider"
        className="w-full h-130 object-cover transition-all duration-1000"
      />

      {/* text area */}
      <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center pt-35 text-white ">
        <h1 className="text-8xl font-bold">Handloom Collection</h1>

        <p className="text-3xl font-semibold mt-8">
          Traditional Style with Modern Fashion.
        </p>
      </div>

      {/* details   */}
      <div className="py-5">
        <div className="flex gap-5 p-5">
          <div className="flex items-center mb-4 w-full bg-gray-200 p-10 gap-5">
            <h1 className="fa fa-check text-5xl m-0 mr-3 text-orange-500"></h1>
            <h3 className="font-semibold text-3xl">Quality Product</h3>
          </div>
          <div className="flex items-center mb-4 w-full bg-gray-200 p-10 gap-5">
            <h1 className="fa fa-shipping-fast text-5xl m-0 mr-3 text-orange-500"></h1>
            <h3 className="font-semibold text-3xl">Free Shipping</h3>
          </div>
          <div className="flex items-center mb-4 w-full bg-gray-200 p-10 gap-5">
            <h1 className="fa fa-exchange-alt text-5xl m-0 mr-3 text-orange-500"></h1>
            <h3 className="font-semibold text-3xl">14-Days Return</h3>
          </div>
          <div className="flex items-center mb-4 w-full bg-gray-200 p-10 gap-5">
            <h1 className="fa fa-phone-volume text-5xl m-0 mr-3 text-orange-500"></h1>
            <h3 className="font-semibold text-3xl">24/7 Support</h3>
          </div>
        </div>
      </div>
      <hr />

      {/* Products section */}
      {/* <Products/> */}
      <div className="py-10 px-5">
        <h1 className="text-4xl px-5 font-bold">Featured Products</h1>
      </div>
      <div className="grid grid-cols-4 w-full gap-5 px-10 py-5">
        <div className=" bg-gray-100 grid text-center hover:border-orange-500 hover:shadow-xl shadow-orange-500/50 ...">
          <img
            src="public/img/green saree.jpeg"
            alt="green sari"
            className="p-4 bject-cover transition-transform duration-300 hover:scale-110"
          />
          <div className="space-y-2 p-4">
            <h2 className="hover:text-orange-500 text-xl font-semibold">
              Green Rayon saree
            </h2>
            <p className="font-semibold">RS: 4500.00 </p>
            <button
              className="bg-orange-400 px-2 py-1 rounded-md"
            >
              View Details
            </button>
          </div>
        </div>
        <div className="bg-gray-100 grid text-center hover:border-orange-500 hover:shadow-xl shadow-orange-500/50 ...">
          <img
            src="public/img/pink saree.jpeg"
            alt="green sari"
            className="p-4 bject-cover transition-transform duration-300 hover:scale-110"
          />
          <div className="space-y-2 p-4">
            <h2 className="hover:text-orange-500 text-xl font-semibold">
              Pink Rayon saree
            </h2>
            <p className="font-semibold">RS: 4500.00 </p>
            <button
              className="bg-orange-400 px-2 py-1 rounded-md"
            >
              View Details
            </button>
          </div>
        </div>
        <div className="bg-gray-100 grid text-center hover:border-orange-500 hover:shadow-xl shadow-orange-500/50 ...">
          <img
            src="public/img/black saree.jpeg"
            alt="green sari"
            className="p-4 bject-cover transition-transform duration-300 hover:scale-110"
          />
          <div className="space-y-2 p-4">
            <h2 className="hover:text-orange-500 text-xl font-semibold">
              Black Rayon and cotton saree
            </h2>
            <p className="font-semibold">RS: 5000.00 </p>
            <button className="bg-orange-400 px-2 py-1 rounded-md">
              View Details
            </button>
          </div>
        </div>

        <div className="bg-gray-100 grid text-center hover:border-orange-500 hover:shadow-xl shadow-orange-500/50 ...">
          <img
            src="public/img/couple hanloom_n.jpg"
            alt="green sari"
            className="p-4 bject-cover transition-transform duration-300 hover:scale-110"
          />
          <div className="space-y-2 p-4">
            <h2 className="hover:text-orange-500 text-xl font-semibold">
              Couple handloom Combo
            </h2>
            <p className="font-semibold">RS: 12,000.00 </p>
            <button className="bg-orange-400 px-2 py-1 rounded-md">
              View Details
            </button>
          </div>
        </div>
        <div className="bg-gray-100 grid text-center hover:border-orange-500 hover:shadow-xl shadow-orange-500/50 ...">
          <img
            src="public/img/dark blue saree.jpeg"
            alt="green sari"
            className="p-4 bject-cover transition-transform duration-300 hover:scale-110"
          />
          <div className="space-y-2 p-4">
            <h2 className="hover:text-orange-500 text-xl font-semibold">
              Dark Blue Rayon saree
            </h2>
            <p className="font-semibold">RS: 5500.00 </p>
            <button className="bg-orange-400 px-2 py-1 rounded-md">
              View Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
