import React, { useState } from "react";
import NoResult from "../NoResult/NoResult";

function Show(props) {
  const [actorShows, setActorShows] = useState(false);
  const { filter, showList, setShowList, searchItem } = props;
  console.log(showList);
  let noImage =
    "https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg";

  async function showsOfActor(actor) {
    const url = `https://api.tvmaze.com/people/${actor}/castcredits?embed=show`;
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    setActorShows(true);
    document.getElementsByClassName('actorInfo')[0].classList.add('hideDiv');
    setShowList(data);
  }

  if(showList.length === 0) {           // No result
    return (searchItem.length !== 0 ? 
      <NoResult /> : <></>
    );
  } else if(actorShows === true) {           // Displaying shows after clicking on actor
    return (
      showList &&
      showList?.map((showObj) => {
        return (
          <>
            <div className="shows" key={showObj}>
              <img
                src={
                  showObj._embedded.show.image === null
                    ? noImage
                    : showObj._embedded.show.image.original
                }
                alt="poster"
                className="image"
              />
              <div className="showInfo">
                <h3>{showObj._embedded.show.name}</h3>
                <h4>Language : {showObj._embedded.show.language}</h4>
              </div>
            </div>
          </>
        );
      })
    );
  } else if (filter === "shows") {        //Displaying shows
    return (
      showList &&
      showList?.map((showObj) => {
        return (
          <>
            <div className="shows" key={showObj}>
              <img
                src={
                  showObj.show.image === null
                    ? noImage
                    : showObj.show.image.original
                }
                alt="poster"
                className="image"
              />
              <div className="showInfo">
                <h3>{showObj.show.name}</h3>
                <h4>Language : {showObj.show.language}</h4>
              </div>
            </div>
          </>
        );
      })
    );
  } else {
    return (                //displaying actors
      showList &&
      showList?.map((showObj) => {
        return (
          <>
            <div className="shows" key={showObj}>
              <img
                onClick={() => showsOfActor(showObj.person.id)}
                src={
                  showObj.person.image === null
                    ? noImage
                    : showObj.person.image.original
                }
                alt="poster"
                className="image actors"
              />
              <div className="showInfo">
                <h3>{showObj.person.name}</h3>
              </div>
            </div>
          </>
        );
      })
    );
  }
}

export default Show;
