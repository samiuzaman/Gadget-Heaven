import { useEffect, useState } from "react";

const Categories = () => {
  const [categorys, setCategory] = useState([]);
  useEffect(() => {
    fetch("categories.json")
      .then((response) => response.json())
      .then((data) => setCategory(data));
  }, []);

  return (
    <div className="bg-white lg:w-48 flex flex-col gap-6 p-5 rounded-xl shadow-xl">
      {categorys?.map((category) => (
        <button
          key={category.id}
          className="text-myDark2 bg-base-200 p-2 rounded-full"
        >
          {category.category}
        </button>
      ))}
    </div>
  );
};

export default Categories;
