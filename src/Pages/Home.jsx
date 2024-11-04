import Banner from "../components/Banner";
import Categories from "../components/categories";
import ProductCard from "../components/ProductCard";

const Home = () => {
  return (
    <div>
      {/* Banner Section Code Start Here */}
      <Banner></Banner>
      {/* Category and Product section Code Start Here  */}
      <div className="w-11/12 mx-auto flex flex-col itme mt-48 mb-12 text-center pt-28">
        <h2 className="text-2xl lg:text-4xl mb-8">Explore Cutting-Edge Gadgets</h2>
        <div className="flex flex-col lg:flex-row justify-center items-start gap-6">
          <Categories></Categories>
          <ProductCard></ProductCard>
        </div>
      </div>
    </div>
  );
};

export default Home;
