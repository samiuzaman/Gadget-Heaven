import Graph from "../components/Graph";


const Statistics = () => {
  return (
    <div>
      {/* Heading Section Code Start Here */}
      <div className="text-center bg-primary mt-[-24px] py-8 ">
        <h1 className="text-2xl lg:text-3xl text-white font-bold mb-6 ">
          Statistics
        </h1>
        <p className=" text-white px-6 lg:px-72 text-center">
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to the coolest accessories, we have it all!
        </p>
        <h4>No Data to Show Statistics </h4>
      </div>
      {/* Heading Section Code Start Here */}
      <Graph></Graph>
      
    </div>
  );
};

export default Statistics;
