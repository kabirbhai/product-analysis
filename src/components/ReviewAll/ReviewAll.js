import React from "react";

const ReviewAll = (props) => {
  const { name, description, rating } = props.review;
  return (
    <div>
      <div className="rounded-lg border-2 p-4">
        <div>
          <h1 className="text-xl font-bold">{name} </h1>
          <p>{description}</p>
          <p>Rating:{rating}</p>
        </div>
      </div>
    </div>
  );
};

export default ReviewAll;
