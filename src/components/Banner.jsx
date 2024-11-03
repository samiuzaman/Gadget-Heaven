import ProductDetails from "./ProductDetails";

const Banner = () => {
  return (
    <div className="relative w-11/12 mx-auto text-center bg-primary pt-20 pb-52 mt-[-24px] rounded-b-2xl">
      <h1 className="text-3xl lg:text-5xl text-white font-bold w-4/6 mx-auto mb-6">
        Upgrade Your Tech Accessorize with Gadget Heaven Accessories
      </h1>
      <p className=" text-white px-72">
        Explore the latest gadgets that will take your experience to the next
        level. From smart devices to the coolest accessories, we have it all!
      </p>
      <button className="btn bg-white rounded-full text-primary text-base font-medium my-8">
        Shop Now
      </button>
      {/* <ProductDetails></ProductDetails> */}
    </div>
  );
};

export default Banner;
