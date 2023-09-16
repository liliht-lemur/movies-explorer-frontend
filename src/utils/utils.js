import { URL_IMAGES, HTTP_REGEX } from './constants';

const findTheMovies = (movies, keyWord, isShort) => {
  const word = keyWord.toLowerCase().trim();

  const searchedMovies = movies
    .filter((movie) => {
      const enName = movie.nameEN && movie.nameEN.toLowerCase().trim();
      const ruName = movie.nameRU && movie.nameRU.toLowerCase().trim();

      return (ruName.match(word)) || (enName && enName.match(word));
    });

  if (isShort) {
    return searchedMovies.filter((movie) => movie.duration <= 40);
  }

  return searchedMovies;
};

const convertDuration = (time) => {
  const hours = Math.trunc(time / 60);
  const minutes = time % 60;

  return `${hours}ч ${minutes}м`;
};

const buildMovieCard = (movies) => {
  return movies
    .map((movie) => ({
      country: movie.country || 'unknown',
      director: movie.director || 'unknown',
      duration: movie.duration || 60,
      year: movie.year || 2000,
      description: movie.description || 'unknown',
      image: `${URL_IMAGES}/${movie.image.url}`,
      trailerLink: movie.trailerLink,
      thumbnail: `${URL_IMAGES}/${movie.image.url}`,
      movieId: movie.id,
      nameRU: movie.nameRU || 'unknown',
      nameEN: movie.nameEN || 'unknown',
    }))
    .map((movie) => (
      HTTP_REGEX.test(movie.trailerLink) ? movie : { ...movie, trailerLink: movie.image }
    ));
};

export { convertDuration, findTheMovies, buildMovieCard };
