import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import Rating from "react-rating";

const ReviewAll = (props) => {
  const { name, description, rating } = props.review;
  return (
    <div>
      <div className="rounded-lg border-2 p-4">
        <div>
          <p>{description}</p>

          <div className="flex justify-between items-center">
            <h1 className="text-xl font-bold">{name} </h1>
            <Rating
              initialRating={rating}
              emptySymbol={<FontAwesomeIcon icon={faStar} />}
              fullSymbol={
                <FontAwesomeIcon style={{ color: "goldenrod" }} icon={faStar} />
              }
              readonly
            ></Rating>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewAll;
