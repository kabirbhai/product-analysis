import React from "react";

const ReviewAll = (props) => {
  const { name, balance } = props.review;
  return (
    <div>
      <div className="rounded-lg border-2 p-4">
        <div>
          <h1>pd name:{balance} </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi,
            maxime.
          </p>
          <p>ratting{name}</p>
        </div>

        <div>
          <h1>name {name}</h1>
        </div>
      </div>
    </div>
  );
};

export default ReviewAll;
