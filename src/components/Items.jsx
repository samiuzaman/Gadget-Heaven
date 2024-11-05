import { useContext } from "react";
import { AddToCart } from "../Layout/Layout";

const Items = ({ product, button }) => {
  const handleAddToCart = useContext(AddToCart);
  const { product_image, product_title, price, description } = product;
  return (
    <div className="flex gap-8 border-2 p-5 my-6 rounded-xl shadow-lg">
      <figure className="w-52 max-h-40 flex justify-center items-center">
        <img
          className="w-full h-full bg-base-300 rounded-xl"
          src={product_image}
          alt=""
        />
      </figure>
      <div className="flex flex-col justify-center gap-3">
        <h3 className="text-xl text-myDark1 font-bold">{product_title}</h3>
        <p className="text-base text-secondary font-normal">{description}</p>
        <p className="text-lg text-myDark2 font-semibold">Price: $ {price}</p>
        {button ? (
          <button
            onClick={() => handleAddToCart(product)}
            className="lg:w-40 btn btn-active bg-primary text-white hover:text-primary flex items-center rounded-full"
          >
            Add To Card
          </button>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Items;
