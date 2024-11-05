/* eslint-disable react-refresh/only-export-components */
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { createContext, useState } from "react";
import { toast } from "react-toastify";

export const NavBackground = createContext(true);
export const CartDataStore = createContext([]);
export const WishlistDataStore = createContext([]);
export const TotalProductPrice = createContext(0);
export const AddToCart = createContext(() => {});
export const AddToWishlist = createContext(() => {});

const Layout = () => {
  const [color, setColor] = useState(true);
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  // Add To Cart Functionality
  const handleAddToCart = (product) => {
    setCart([...cart, product]);
    setTotalPrice(totalPrice + product.price);
    toast.success("Item Added to Cart", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  };

  // Add To WishList Functionality
  const handleAddToWishlist = (product) => {
    setWishlist([...wishlist, product]);
    toast.success("Item Added to Wishlist", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  };

  // const handleOpenModal = () => {
  //   my_modal_5.showModal();
  // };

  return (
    <div>
      <AddToWishlist.Provider value={handleAddToWishlist}>
        <AddToCart.Provider value={handleAddToCart}>
          <TotalProductPrice.Provider value={[totalPrice, setTotalPrice]}>
            <WishlistDataStore.Provider value={[wishlist, setWishlist]}>
              <CartDataStore.Provider value={[cart, setCart]}>
                <NavBackground.Provider value={[color, setColor]}>
                  <Navbar></Navbar>
                  <div className=" pt-6 pb-12">
                    <Outlet></Outlet>
                  </div>
                  <Footer></Footer>
                </NavBackground.Provider>
              </CartDataStore.Provider>
            </WishlistDataStore.Provider>
          </TotalProductPrice.Provider>
        </AddToCart.Provider>
      </AddToWishlist.Provider>
    </div>
  );
};

export default Layout;
