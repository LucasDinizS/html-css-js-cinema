let api_key;
const BASE_URL = 'https://api.themoviedb.org/3';

fetch('http://localhost:5000/')
    .then(data => data.json())
    .then(data=>{
        api_key = data.apiKey;
    
        return fetchPopularMovies();})
        // Armazenar a API Key na variável
    .catch(err => console.error('Erro:', err));

async function fetchPopularMovies() {
    const response = await fetch(`${BASE_URL}/movie/popular?api_key=${api_key}&language=pt-BR&page=1`);
    const data = await response.json();
    data.results.forEach(movie => {
        $("#movies-grid").append(`
                <div class = "movie">
                    <img src="https://image.tmdb.org/t/p/original/${movie.poster_path}"/>
                    <span class = "movie-title">${movie.title}</span>
                    <span class = "movie-date">${movie.release_date}</span>
                    <span class = "movie-overview">${movie.overview}</span>
                </div>
            `)
      });
}
