import "./App.css";
import MoviesLists from "./Component/MoviesLists";
import requests from "./Data/requests";
import Banner from "./Component/Banner";
import Navbar from "./Component/Navbar.js";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Banner fetchUrl={requests.fetchTrending} />
      <MoviesLists
        title="Netflix Originals"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargePoster={true}
      />
      <MoviesLists title="Trending Now" fetchUrl={requests.fetchTrending} />
      <MoviesLists title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <MoviesLists
        title="Action Movies"
        fetchUrl={requests.fetchActionMovies}
      />
      <MoviesLists
        title="Comedy Movies"
        fetchUrl={requests.fetchComedyMovies}
      />
      <MoviesLists
        title="Horror Movies"
        fetchUrl={requests.fetchHorrorMovies}
      />
      <MoviesLists
        title="Romance Movies"
        fetchUrl={requests.fetchRomanceMovies}
      />
      <MoviesLists
        title="Documentaries"
        fetchUrl={requests.fetchDocumentaries}
      />
    </div>
  );
}

export default App;
