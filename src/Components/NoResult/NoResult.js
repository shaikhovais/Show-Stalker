import React from "react";
import noResult from '../../Images/NoResult.png'

function NoResult() {

  return (
    <div className="noResult-main">
      <img src={noResult} alt={"noResult"}/>
      <h3>Sorry! No result found :( </h3>
      <p>We cannot find what you are searching for.<br/> Please check the spelling or search for something else.</p>
    </div>
  );
}

export default NoResult;
