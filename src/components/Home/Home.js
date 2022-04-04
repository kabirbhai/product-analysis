import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useNavigate } from "react-router-dom";
import useReview from "../../hooks/useReview";
import laptop from "../../Images/laptop.jpg";
import Review from "../Review/Review";
import "./Home.css";

const Home = () => {
  // const [reviews] = useReview([]);
  // Explore more
  const navigate = useNavigate();
  const exploreMore = () => {
    navigate("/review");
  };

  // Show Review
  // const show = usuNavigate()
  const ShowReview = () => {
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
          <img
            className="rounded-lg h-[400px] w-[400px] mt-20 "
            src={laptop}
            alt=" loading"
          />
        </div>
      </div>

      {/*========== Review section ============== */}

      <div className="review-container">
        <h1 className=" text-3xl text-center underline">Customer Review</h1>
        <div className="review-items">
          <Review></Review>
        </div>
        <div className="flex justify-center my-4 ">
          <button
            onClick={ShowReview}
            className="hover:bg-orange-800 border-2 px-10 rounded-lg gap-2 py-2 bg-orange-600 text-white text-xl flex justify-center items-center"
          >
            All Review
            <div>
              <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
