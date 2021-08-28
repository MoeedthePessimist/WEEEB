const API_KEY = 'b9560820e0986243c8eeaa788c142c9e';

const requests = {
fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`, 
fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`, 
fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
};

export default requests;