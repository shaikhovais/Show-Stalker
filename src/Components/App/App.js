import "./App.css";
import { useState, useEffect } from "react";
import Show from "../Show/Show";
import Filter from "../Filter/Filter";
import Poster from "../Poster/Poster";
import Loader from "../Loader/Loader";

function App() {
  const [searchItem, setSearchItem] = useState("");
  const [showList, setShowList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("shows");
  const [showFilter, setShowFilter] = useState(false);

  function handleSubmit(e) {
    const val = e.target.value;
    setSearchItem(val);
  }

  async function getTheShows(searchItem) {
    let data, response, url;
    url = `https://api.tvmaze.com/search/${filter}?q=${searchItem}`;
    if (filter === "shows") {
      response = await fetch(url);
      data = await response.json();
    } else {
      url = `https://api.tvmaze.com/search/${filter}?q=${searchItem}`;
      response = await fetch(url);
      data = await response.json();
      document.getElementsByClassName('actorInfo')[0].classList.remove('hideDiv');

    }
    setShowList(data);
  }

  useEffect(() => {
    (async () => {
      setLoading(true);
      await getTheShows(searchItem);
      setLoading(false);
    })();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchItem, filter]);

  return (
    <>
      <div className="home">
        {/* Poster */}
        <Poster setShowFilter={setShowFilter} />

        {/* Filter & Input */}
        {showFilter && (
          <Filter
            filter={filter}
            setFilter={setFilter}
            setShowList={setShowList}
            handleSubmit={handleSubmit}
          />
        )}
      </div>

      {/* Results & NoResult */}
      <div>
        {!loading && (
          <div className="displayShows">
            <Show
                searchItem={searchItem}
                filter={filter}
                showList={showList}
                setShowList={setShowList}
              />
          </div>
        )}
        {loading && (<Loader />)}
      </div>
    </>
  );
}

export default App;
