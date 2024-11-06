import { useContext } from "react";
import { CartDataStore, TotalProductPrice } from "../Layout/Layout";

import Modal from "./Modal";
import CartItem from "./CartItem";

const Cart = () => {
  const [totalPrice, setTotalPrice] = useContext(TotalProductPrice);
  const [cart, setCart] = useContext(CartDataStore);

  // Sort By Price in Products function
  const handleSortByPrice = () => {
    const sorting = [...cart].sort((a, b) => b.price - a.price);
    setCart(sorting);
  };

  return (
    <div className="w-11/12 lg:w-5/6 mx-auto my-12">
      <div className="flex justify-between">
        <h3 className="text-xl font-bold text-myDark1">Cart</h3>
        <div className="flex items-center gap-6">
          <p className="text-xl font-bold text-myDark1">
            Total cost: $ {totalPrice.toFixed(2)}
          </p>
          <button
            onClick={handleSortByPrice}
            className="btn btn-outline hover:bg-primary hover:border-primary text-primary rounded-full "
          >
            Sort by Price
          </button>
          {/* Modal Open Button */}
          <Modal></Modal>
        </div>
      </div>
      {/* Product Single Card */}

      <div>
        {cart?.map((product) => (
          <CartItem key={product.product_id} product={product}></CartItem>
        ))}
      </div>

      {cart.length === 0 ? <p className="text-3xl text-red-600 font-bold">No Data to Show Statistics</p> : ""}
    </div>
  );
};

export default Cart;
