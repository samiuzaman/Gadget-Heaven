import DefaultImg from "../assets/banner.jpg";

const Banner = () => {
  return (
    <div className="relative w-11/12 mx-auto text-center bg-primary pt-20 pb-64 mt-[-24px] rounded-b-2xl mb-72">
      <h1 className="text-3xl lg:text-5xl text-white font-bold w-full lg:w-4/6 mx-auto mb-6 px-5 lg:px-0">
        Upgrade Your Tech Accessorize with Gadget Heaven Accessories
      </h1>
      <p className=" text-white p-6 lg:px-72 text-center">
        Explore the latest gadgets that will take your experience to the next
        level. From smart devices to the coolest accessories, we have it all!
      </p>
      <button className="btn bg-white rounded-full text-primary text-base font-medium my-8">
        Shop Now
      </button>
      <div className="absolute lg:inset-x-12 w-full lg:w-4/5 mx-auto  border-2 border-white rounded-2xl text-center h-[536px]">
        <figure className="object-fill w-full h-full p-4">
          <img
            className="w-full h-full rounded-2xl"
            src={DefaultImg}
            alt="default Image"
          />
        </figure>
      </div>
    </div>
  );
};

export default Banner;
