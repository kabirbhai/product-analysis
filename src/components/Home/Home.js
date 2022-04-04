import React from "react";
import Images from "../../Images/background.jpg";
import laptop from "../../Images/laptop.jpg";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-container">
      <div className="flex justify-between">
        <div className="pl-6 pt-10">
          <h1 className="text-6xl text-orange-400">Best Laptop Review</h1>
          <h1 className="text-6xl text-orange-400">
            Choose One
            <span className="text-6xl text-yellow-100">IN 2022</span>
          </h1>
          <p className="mt-4">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit,
            eveniet nam. Suscipit consectetur <br /> sint earum in incidunt
            dolores repellat porro, excepturi, rem <br /> alias consequatur
            delectus iste praesentium provident aspernatur et?
          </p>
          <button className="border-2 text-xl border-cyan-700 px-6 py-4 rounded-lg mt-3 text-black hover:bg-orange-200 hover:text-blue-700">
            Explore more
          </button>
        </div>

        <div>
          <img
            className="rounded-tl-2xl rounded-bl-2xl w-[400px] h-[400px]"
            src={laptop}
            alt=""
          />
        </div>
      </div>

      {/* <div
        className="bg-image"
        style={{
          backgroundImage: "url(" + Images + ")",
        }}
      ></div> */}
    </div>
  );
};

export default Home;
