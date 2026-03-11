export const Categories = ({ onSelect }) => {
  const list = ["Sarees", "Sarongs", "Tops", "Shirts", "Materials"];
  return (
    <ul className="bg-white text-black w-40 shadow-md">
      {list.map(cat => (
        <li
          key={cat}
          className="p-2 hover:bg-gray-200 cursor-pointer"
          onClick={() => onSelect && onSelect(cat)}
        >
          {cat}
        </li>
      ))}
    </ul>
  );
};

export default Categories; 