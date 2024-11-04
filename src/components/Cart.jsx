const Cart = () => {
  return (
    <div className="w-11/12 lg:w-5/6 mx-auto my-12">
      <div className="flex justify-between items-center">
        <h3 className="text-xl font-bold text-myDark1">Cart</h3>
        <div className="flex items-center gap-6">
          <p className="text-xl font-bold text-myDark1">Total cost: 999.99</p>
          <button className="btn btn-outline hover:bg-primary hover:border-primary text-primary rounded-full ">
            Sort by Price
          </button>
          <button className="btn text-white bg-gradient-to-b from-primary via-primary to-pink-400/70 rounded-full">
            Purchase
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
