/* eslint-disable no-template-curly-in-string */
const API_KEY="64e0dadc8e2b8a06b5364eca13306dd1";
const requests={
    fetchTrending: '/trending/all/week?api_key=64e0dadc8e2b8a06b5364eca13306dd1&language=en-US',
    fetchNetflixOriginals:'/discover/tv?api_key=64e0dadc8e2b8a06b5364eca13306dd1&with_networks=213',
    fetchTopRated:'/movie/top_rated?api_key=64e0dadc8e2b8a06b5364eca13306dd1&language=en-US',
    fetchActionMovies:'/discover/movie?api_key=64e0dadc8e2b8a06b5364eca13306dd1&with_genres=28',
    fetchComedyMovies:'/discover/movie?api_key=64e0dadc8e2b8a06b5364eca13306dd1&with_genres=35',
fetchHorrorMovies:'/discover/movie?api_key=64e0dadc8e2b8a06b5364eca13306dd1&with_genres=27',
fetchRomanceMovies:'/discover/movie?api_key=64e0dadc8e2b8a06b5364eca13306dd1&with_genres=10749',
fetchDocumentaries:'/discover/movie?api_key=64e0dadc8e2b8a06b5364eca13306dd1&with_genres=99'
}

export default requests;