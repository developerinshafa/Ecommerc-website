export default function Cart({ cart, setCart }) {
  // Increase quantity
  const increaseQty = (id) => {
    setCart(cart.map(item => 
      item.id === id ? { ...item, qty: item.qty + 1 } : item
    ));
  };

  // Decrease quantity
  const decreaseQty = (id) => {
    setCart(cart.map(item => 
      item.id === id && item.qty > 1 ? { ...item, qty: item.qty - 1 } : item
    ));
  };

  // Remove item
  const removeItem = (id) => {
    setCart(cart.filter(item => item.id !== id));
  };

  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  return (
    <div className="p-10">
      <h1 className="text-4xl font-bold mb-10">Shopping Cart</h1>

      {cart.length === 0 && <p>Cart is Empty</p>}

      {cart.map(item => (
        <div key={item.id} className="flex items-center gap-10 border-b py-5">
          <img src={item.img} alt={item.name} className="w-24" />
          <h2>{item.name}</h2>

          {/* Quantity controls */}
          <div className="flex items-center gap-2">
            <button 
              onClick={() => decreaseQty(item.id)}
              className="bg-gray-300 px-2 rounded"
            >
              -
            </button>
            <span>{item.qty}</span>
            <button 
              onClick={() => increaseQty(item.id)}
              className="bg-gray-300 px-2 rounded"
            >
              +
            </button>
          </div>

          <p>Rs: {item.price * item.qty}</p>

          <button
            onClick={() => removeItem(item.id)}
            className="bg-red-500 text-white px-3 py-1 rounded"
          >
            Remove
          </button>
        </div>
      ))}

      {cart.length > 0 && (
        <h2 className="text-2xl font-bold mt-10">
          Total: Rs {total}
        </h2>
      )}
    </div>
  );
}