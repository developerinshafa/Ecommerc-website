import { useState } from "react";
import { useLocation } from "react-router-dom";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

export default function Products({ cart, setCart }) {
  const query = useQuery();
  const category = query.get("category");

  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Green Rayon Saree",
      price: 4500,
      qty: 1,
      img: "/img/green saree.jpeg",
    },
    {
      id: 2,
      name: "Pink Rayon Saree",
      price: 4500,
      qty: 1,
      img: "/img/pink saree.jpeg",
    },
    {
      id: 3,
      name: "couple combo ",
      price: 12000,
      qty: 1,
      img: "/img/couple hanloom_n.jpg",
    },
    {
      id: 4,
      name: "Black Rayon Cotton saree",
      price: 5000,
      qty: 1,
      img: "/img/black saree.jpeg",
    },
    {
      id: 5,
      name: "dark blue sare",
      price: 5000,
      qty: 1,
      img: "/img/dark blue saree.jpeg",
    },
    {
      id: 6,
      name: "cotton top",
      price: 2500,
      qty: 1,
      img: "https://www.eshandlooms.com/wp-content/uploads/2021/02/EL262.jpg",
    },
    {
      id: 7,
      name: "cotton Sarong combo",
      price: 7899,
      qty: 1,
      img: "https://dynamic-cdn.zenegal.store/fit-in/700x1050/products/52718/mens-handloom-sarong-16800891215573.jpg",
    },
    {
      id: 8,
      name: "Reyon Sarong Combo",
      price: 8000,
      qty: 1,
      img: "https://www.ownacraft.com/wp-content/uploads/2024/04/CS21312-1.webp",
    },
  ]);
  //search state
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  //   add to cart function
  const addToCart = (product) => {
    console.log("Adding to cart:", product);
    const exist = cart.find((x) => x.id === product.id);

    if (exist) {
      setCart(
        cart.map((x) => (x.id === product.id ? { ...x, qty: x.qty + 1 } : x)),
      );
    } else {
      setCart([...cart, { ...product, qty: 1 }]);
    }
  };

  return (
    <>
      <div className="px-10 ">
        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="border border-gray-300 p-2 px-4 rounded w-full my-5"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 px-10 pb-10">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((item) => (
            <div
              key={item.id}
              className="bg-gray-100 p-4 text-center hover:border-orange-500 hover:shadow-xl"
            >
              <img
                src={item.img}
                className="w-full object-cover h-64 mb-2"
                alt={item.name}
              />
              <h2 className="text-xl font-semibold">{item.name}</h2>
              <p className="font-bold">Rs: {item.price}</p>
              <button
                onClick={() => {
                  const exist = cart.find((x) => x.id === item.id);
                  if (exist) {
                    setCart(
                      cart.map((x) =>
                        x.id === item.id ? { ...x, qty: x.qty + 1 } : x,
                      ),
                    );
                  } else {
                    setCart([...cart, { ...item, qty: 1 }]);
                  }
                }}
                className="bg-orange-400 px-4 py-2 mt-2 rounded"
              >
                Add To Cart
              </button>
            </div>
          ))
        ) : (
          <p className="text-center text-2xl font-bold col-span-4 mt-10">
            Item not found
          </p>
        )}
      </div>
    </>
  );
}
