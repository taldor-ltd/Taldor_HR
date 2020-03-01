export const httpService = {
  post,
  get,
};

const httpOptions = { 'Content-Type': 'application/json' };

const apiUrl = "http://localhost:5000/";

function post(action, requestData) {
  return fetch(apiUrl + action, {
      method: 'POST',
      headers: httpOptions,
      body: JSON.stringify(requestData)
    });
}

function get(action) {
  let data = fetch(apiUrl + action, {
    method: 'GET',
    headers: httpOptions,
  })
    .then((response) => response.json())
    .then(data => {
      return data;
    }).catch((response) => {
      return 'Error'
    });
  return data;
}

