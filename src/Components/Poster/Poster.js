import React, { useState } from "react";
import searchIcon from "../../Images/Search.png";

function Poster(props) {
  const { setShowFilter } = props;
  const [height, setHeight] = useState("100vh");

  const homePageStyle = {
    height: height,
  };
  function changePoster() {
    document.getElementById("home-btn").style.display = "none";
    const main = document.getElementById("main").style;
    main.setProperty("background-image", "url()");
    main.backgroundColor = "black";
    main.fontSize = "40px";
    setHeight("20vh");
    setShowFilter(true);
  }

  return (
    <div className="poster-main darken" style={homePageStyle} id={"main"}>
      <h1 className="title" id={"title"}>
        Show Stalker
      </h1>
      <button onClick={() => changePoster()} id={"home-btn"}>
        Let's Search
        <img src={searchIcon} alt={"searchIcon"} />
      </button>
    </div>
  );
}

export default Poster;
