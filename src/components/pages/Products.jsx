import { useState } from "react";

export default function Products() {

  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Green Rayon Saree",
      price: 4500,
      qty: 1,
      img: "/img/green saree.jpeg"
    },
    {
      id: 2,
      name: "Pink Rayon Saree",
      price: 4500,
      qty: 1,
      img: "/img/pink saree.jpeg"
    },
    {
      id: 3,
      name: "couple combo ",
      price: 12000,
      qty: 1,
      img: "/img/couple hanloom_n.jpg"
    },
    {
      id: 4,
      name: "Black Rayon Cotton saree",
      price: 5000,
      qty: 1,
      img: "/img/black saree.jpeg"
    },
    {
      id:5,
      name: "dark blue sare",
      price: 5000,
      qty: 1,
      img: "/img/dark blue saree.jpeg"
    },
    {
      id:6,
      name: "cotton top",
      price: 2500,
      qty: 1,
      img: "https://www.eshandlooms.com/wp-content/uploads/2021/02/EL262.jpg"
    },
    {
      id:7,
      name: "cotton Sarong combo",
      price: 7899,
      qty: 1,
      img: "https://dynamic-cdn.zenegal.store/fit-in/700x1050/products/52718/mens-handloom-sarong-16800891215573.jpg" 
    },
    {
      id:6,
      name: "Reyon Sarong Combo",
      price: 8000,
      qty: 1,
      img: "https://www.ownacraft.com/wp-content/uploads/2024/04/CS21312-1.webp"
    }
    

  ]);

  // increase quantity
  const increaseQty = (id) => {
    setProducts(products.map((p) =>
      p.id === id ? { ...p, qty: p.qty + 1 } : p
    ));
  };

  // decrease quantity
  const decreaseQty = (id) => {
    setProducts(products.map((p) =>
      p.id === id && p.qty > 1 ? { ...p, qty: p.qty - 1 } : p
    ));
  };

  return (
    <>
      <div className="p-10">
        <h1 className="text-4xl px-5 font-bold">Featured Products</h1>
      </div>

      <div className="grid grid-cols-4 gap-5 px-10 pb-10">

        {products.map((item) => {

          const total = item.price * item.qty;

          return (
            <div key={item.id} className="bg-gray-100 pb-5 grid text-center hover:border-orange-500 hover:shadow-xl shadow-orange-500/50 ...">

              <img
                src={item.img}
                alt={item.name}
                className="p-4 object-cover transition-transform duration-300 hover:scale-110"
              />

              <h2 className="text-xl font-semibold hover:text-orange-500">
                {item.name}
              </h2>

              <p className="font-bold">RS: {total}</p>

              {/* Quantity */}
              <div className="flex justify-center gap-3 mt-3">

                <button
                  onClick={() => decreaseQty(item.id)}
                  className="bg-gray-300 px-3"
                >
                  -
                </button>

                <span className="font-bold">{item.qty}</span>

                <button
                  onClick={() => increaseQty(item.id)}
                  className="bg-gray-300 px-3"
                >
                  +
                </button>

              </div>

            </div>
          );
        })}

      </div>
    </>
  );
}

