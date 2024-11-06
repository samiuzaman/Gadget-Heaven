import React, { useContext } from "react";
import { CartToDeleteProduct } from "../Layout/Layout";
import { RxCross2 } from "react-icons/rx";

const CartItem = ({ product }) => {
  const { product_image, product_title, price, description } = product;
  const deletedCartProduct = useContext(CartToDeleteProduct);
  return (
    <div>
      <div className="flex justify-between items-center border-2 p-5 my-6 rounded-xl shadow-lg">
        <div className="flex items-center gap-6">
          <figure className="w-40 h-36 flex justify-center items-center">
            <img
              className="w-full h-full bg-base-300 rounded-xl"
              src={product_image}
              alt=""
            />
          </figure>
          <div className="flex flex-col justify-center gap-3">
            <h3 className="text-xl text-myDark1 font-bold">{product_title}</h3>
            <p className="text-base text-secondary font-normal">
              {description}
            </p>
            <p className="text-lg text-myDark2 font-semibold">
              Price: $ {price}
            </p>
          </div>
        </div>
        <div
          onClick={() => deletedCartProduct(product.product_id)}
          className="text-right btn  text-red-700 text-2xl font-bold rounded-full"
        >
          <RxCross2></RxCross2>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
