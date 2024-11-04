import { useContext, useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { NavBackground } from "../Layout/Layout";

const ProductCard = () => {
  const [color, setColor] = useContext(NavBackground);
  const allData = useLoaderData();
  const [products, setProducts] = useState([]);
  useEffect(() => {
    setProducts(allData.slice(0, 6));
  }, [allData, setProducts]);

  return (
    <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {products?.map((product) => (
        <div
          key={product?.product_id}
          className="card bg-base-100 min-w-80 max-w-96  shadow-xl"
        >
          <figure className="h-52 mx-5 mt-5 rounded-lg bg-base-200">
            <img
              src={product?.product_image}
              alt="Shoes"
              className="h-full p-4 rounded-xl"
            />
          </figure>
          <div className="card-body">
            <h3 className="card-title text-myDark1 text-xl font-semibold">
              {product.product_title}
            </h3>
            <p className="text-secondary font-medium text-left text-lg">
              Price ${product.price}
            </p>

            <div className="card-actions">
              <Link
                to={`/detail/${product?.product_id}`}
                onClick={() => setColor(false)}
                className="btn btn-outline border-primary text-primary hover:bg-primary rounded-full text-base font-medium"
              >
                View Details
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductCard;
