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
 return fetch(apiUrl + action, {
    method: 'GET',
    headers: httpOptions,
  });
}

