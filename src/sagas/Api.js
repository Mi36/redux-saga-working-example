const url = 'https://jsonplaceholder.typicode.com/todos';

function* getDataFromApi() {
  const response = yield fetch(url);
  const movies = yield response.status === 200 ? response.json() : [];
  return movies;
}
//export as object

const URL2 = `https://itunes.apple.com/search?term=shreya`;

function* fetchImages() {
  const res = yield fetch(URL2);
  const data = yield res.status === 200 ? res.json() : [];
  const images = data.results;
  return images;
}

export const Api = {
  getDataFromApi,
  fetchImages,
};
