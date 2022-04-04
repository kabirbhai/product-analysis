import { useNavigate } from "react-router-dom";
import laptop from "../../Images/laptop.jpg";
import "./Home.css";

const Home = () => {
  const navigate = useNavigate();
  const exploreMore = () => {
    navigate("/review");
  };
  return (
    <div className="home-container">
      <div className="flex justify-between h-[100vh]">
        <div className="pl-6 pt-16">
          <h1 className="text-6xl text-orange-400">Best Laptop Review</h1>
          <h1 className="text-4xl text-orange-400">
            Choose One
            <span className="text-5xl text-yellow-800"> -IN 2022</span>
          </h1>
          <p className="mt-4 text-black">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit,
            eveniet nam. Suscipit consectetur <br /> sint earum in incidunt
            dolores repellat porro, excepturi, rem <br /> alias consequatur
            delectus iste praesentium provident aspernatur et?
          </p>
          <button
            onClick={exploreMore}
            className=" border-2 text-xl  px-6 py-4 rounded-lg mt-3 text-white bg-orange-600 hover:bg-orange-900 "
          >
            Explore more
          </button>
        </div>

        <div>
          <img className="rounded-lg  " src={laptop} alt=" loading" />
        </div>
      </div>

      <div className="review-container">
        <h1 className=" text-3xl text-center underline">Customer Review</h1>
        <button className="border-2">See More</button>
      </div>
    </div>
  );
};

export default Home;
