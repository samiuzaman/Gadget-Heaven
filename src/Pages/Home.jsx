import Banner from "../components/Banner";
import Categories from "../components/categories";
import Navbar from "../components/Navbar";
import ProductCard from "../components/ProductCard";

const Home = () => {
  return (
    <div>
      {/* Banner Section Code Start Here */}
      <Banner></Banner>
      {/* Category and Product section Code Start Here  */}
      <div className="w-11/12 lg:w-5/6 mx-auto flex flex-col justify-center mt-48 text-center pt-28">
        <h2 className="text-2xl lg:text-4xl">Explore Cutting-Edge Gadgets</h2>
        <div className="flex flex-col lg:flex-row justify-between items-start">
          <Categories></Categories>
          <ProductCard></ProductCard>
        </div>
      </div>
    </div>
  );
};

export default Home;