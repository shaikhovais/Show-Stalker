import React from "react";

function Filter(props) {
  const { filter, setFilter, setShowList, handleSubmit } = props;

  let placeholder = ["e.g Stranger Things, Mirzapur", "e.g Kapil Sharma, Shakira"];

  function changeFilter(e) {
    setFilter(e.target.value);
    setShowList([]);
  }
  return (
    <div className="filter-main">
      <h4>Search for your favourite shows</h4>
      <div className="filter">
        <div className="option">
          <input
            type={"radio"}
            name={"filter"}
            value={"people"}
            onClick={changeFilter}
            id={"people"}
          />
          <span className="filterName">Actor</span>
        </div>
        <div className="option">
          <input
            type={"radio"}
            name={"filter"}
            value={"shows"}
            onClick={changeFilter}
            id={"show"}
            defaultChecked={true}
          />
          <span className="filterName">Shows</span>
        </div>
      </div>
      {/* InputBox */}
      <form>
        <input
          id="searchBox"
          name="searchBox"
          type={"text"}
          placeholder={filter === "shows" ? placeholder[0] : placeholder[1]}
          onChange={handleSubmit}
          autoComplete='off'
        />
      </form>
      <div className="actorInfo">
        {filter === "people" && (
          <h3>Click on actor below to display their shows</h3>
        )}
      </div>
    </div>
  );
}

export default Filter;
