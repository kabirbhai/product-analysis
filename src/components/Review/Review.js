import React from "react";
import useReview from "../../hooks/useReview";
import ReviewAll from "../ReviewAll/ReviewAll";

const Review = () => {
  const [reviews, setReviews] = useReview([]);
  console.log(typeof reviews);

  return (
    <div className=" grid grid-cols-1 md:grid-cols-3 gap-4">
      {reviews.map((review) => (
        <ReviewAll key={review.id} review={review} />
      ))}
    </div>
  );
};

export default Review;
