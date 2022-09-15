import React from "react";
import loader from "../../Images/Loader.gif";

function Loader() {
  return (
    <div className="loader-main">
      <img src={loader} alt={"loader"} className={"loaderImg"} />
    </div>
  );
}

export default Loader;
