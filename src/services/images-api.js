const BASE_URL =
  'https://pixabay.com/api/?image_type=photo&orientation=horizontal';
const API_KEY = '30894904-b3442836f64f4cd578f07534a';

function fetchImages(imageName, page) {
  return fetch(
    `${BASE_URL}&key=${API_KEY}&q=${imageName}&page=${page}&per_page=12`
  )
    .then(response => {
      if (response.ok) return response.json();
      return Promise.reject(new Error(`No results were found for your search`));
    })
    .then(({ hits }) => hits);
}

export { fetchImages };
