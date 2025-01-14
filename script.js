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
    const response = await fetch(`${BASE_URL}/movie/550?api_key=${api_key}&language=pt-BR&page=1`);
    const data = await response.json();
    console.log(data);
}
