// SEARCH API
// comst search_key = `https://api.themoviedb.org/3/search/movie?api_key=${MY_API_KEY}&query=${searchKeyword}&include_adult=false&language=ko-KR&page=1`

// API
const MY_API_KEY = `5d59af4f23d0d20dbd878aad8ac9a2fd`;

const API_URL = `https://api.themoviedb.org/3/movie/popular?`;

const IMAGE_URL = `https://image.tmdb.org/t/p/w1080`;

let popularTop20Document = document.querySelector(".most-popular");

//API 데이터 가져와서 카드 만들기
const movieCardDom = (movies) => {
  popularTop20Document.innerHTML = "";

  movies.forEach((movie) => {
    popularTop20Document.innerHTML += `<div class="movie">
        <img class="movie-image" src="https://image.tmdb.org/t/p/w500${movie.poster_path}" onclick="alert('영화 ID: ${movie.id}')">
        <div class="movie.info">
          <h3>${movie.original_title}</h3>
          <p>${movie.overview}</p>
          <span>Rating: ${movie.vote_average}</span>
        </div>
    </div>`;
  });
};

const getpopularTop20Moviews = async () => {
  const request = await fetch(`${API_URL}api_key=${MY_API_KEY}&language=ko-KR`);

  const { results } = await request.json();

  movieCardDom(results);
};

// API 검색기능
async function searchMovie(keyword) {
  const response = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${MY_API_KEY}&query=${keyword}&include_adult=false&language=ko-KR&page=1`
  );
  const { results } = await response.json();
  movieCardDom(results);
}

const searchForm = document.querySelector("#search_form");
searchForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const keyword = event.target.children[0].value;
  searchMovie(keyword);
});

await searchMovie();

getpopularTop20Moviews();
