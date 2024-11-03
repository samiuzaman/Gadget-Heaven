import DefaultImg from "../assets/banner.jpg";
const ProductDetails = () => {
  return (
    <div className="absolute inset-x-12 w-11/12 lg:w-4/5 mx-auto  border-2 border-white rounded-2xl text-center h-[536px]">
      <figure className="object-fill w-full h-full p-4">
        <img
          className="w-full h-full rounded-2xl"
          src={DefaultImg}
          alt="default Image"
        />
      </figure>
    </div>
  );
};

export default ProductDetails;
