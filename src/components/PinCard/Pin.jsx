import React from "react";

const Pin = ({ pinSize }) => {
  console.log(pinSize);
  return (
    <div className={`pin ${pinSize}`}>
      <div>hello</div>
    </div>
  );
};

export default Pin;
