import React from "react";
import PropagateLoader from "react-spinners/PropagateLoader";

const Spinner = () => {
  return (
    <div className="flex justify-center items-center">
      <PropagateLoader color={"rgba(255,0,0,0.2)"} />
    </div>
  );
};

export default Spinner;
