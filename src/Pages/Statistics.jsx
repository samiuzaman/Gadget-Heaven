import React, { PureComponent, useContext } from "react";
import { useLoaderData } from "react-router-dom";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  PieChart,
  Pie,
  Tooltip,
  CartesianGrid,
  Legend,
  ComposedChart,
  Area,
} from "recharts";
import { CartDataStore, TotalProductPrice } from "../Layout/Layout";
import { BiFullscreen } from "react-icons/bi";

const LineCharts = () => {
  const allProducts = useLoaderData();
  const [totalPrice, setTotalPrice] = useContext(TotalProductPrice);
  const [cart, setCart] = useContext(CartDataStore);
  console.log(allProducts);

  return (
    <div>
      <div className="text-center bg-primary mt-[-24px] py-8 mb-10">
        <h1 className="text-2xl lg:text-3xl text-white font-bold mb-6 ">
          Dashboard
        </h1>
        <p className=" text-white px-6 lg:px-72 text-center">
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to the coolest accessories, we have it all!
        </p>
        <div className="mt-5">
          <button
            onClick={() => setCart(true)}
            className="btn bg-white rounded-full text-primary hover:bg-primary hover:text-white text-base font-medium px-6 mr-6"
          >
            Cart
          </button>
          <button
            onClick={() => setCart(false)}
            className="btn btn-outline border-white text-white rounded-full hover:bg-primary hover:border-white text-base font-medium px-6"
          >
            Wishlist
          </button>
        </div>
      </div>
      <div className="w-11/12 lg:w-5/6 mx-auto bg-white rounded-xl">
        <ComposedChart
          width={1200}
          height={450}
          data={allProducts}
          margin={{
            top: 20,
            right: 80,
            bottom: 20,
            left: 20,
          }}
        >
          <CartesianGrid stroke="#f5f5f5" />
          <XAxis
            dataKey="product_title"
            label={{
              value: "Product Name",

              offset: 0,
              style: {
                fontSize: "10px",
              },
            }}
            tick={{ fontSize: 10 }}
            angle={-10}
            textAnchor="end"
            scale="band"
            dy={10}
          />
          <YAxis
            className=""
            label={{ value: "Price", angle: -90, position: "insideLeft" }}
          />
          <Tooltip />
          <Legend />
          <Area type="monotone" dataKey="amt" fill="#8884d8" stroke="#8884d8" />
          <Bar dataKey="price" barSize={25} fill="#413ea0" />
          <Area type="monotone" dataKey="price" stroke="#ff7300" />
        </ComposedChart>
      </div>
    </div>
  );
};

export default LineCharts;
