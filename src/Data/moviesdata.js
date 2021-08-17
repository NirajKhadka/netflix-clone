const API_KEY = "687f3f87b36203a3622a3138c2397729";

const movies_data = [
  {
    title: "Trending",
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  },
  {
    title: "Netflix Originals",
    fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_network=213`,
  },
  {
    title: "Top Rated",
    fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  },
  {
    title: "Action Movies",
    fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  },
  {
    title: "Comedy Movies",
    fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  },
  {
    title: "Horror Movies",
    fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  },
  {
    title: "Romance Movies",
    fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  },
  {
    title: "Documentaries",
    fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
  },
];

export default movies_data;
