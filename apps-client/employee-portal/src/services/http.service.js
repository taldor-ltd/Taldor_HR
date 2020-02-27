export const httpService = {
  post,
  get,
};

const httpOptions = {
  headers: new Headers({
    'Content-Type': 'application/json'
  })
};

const httpPostUrl = "https://jsonplaceholder.typicode.com/posts";
const httpGetUrl = "https://jsonplaceholder.typicode.com/posts?userId=1";
const bodyParams = JSON.stringify({ title: 'foo', body: 'bar', userId: 1 });

function post(url, requestData) {

  let data = fetch(httpPostUrl, {
    method: 'POST', headers: httpOptions,
    body: bodyParams
  })
    .then((response) => response.json())
    .then(data => {
      return data;
    }).catch((response) => {
      return 'Error'
    });
  return data;
}

function get(url) {

  let data = fetch(httpGetUrl, {
    method: 'GET', headers: httpOptions,
  })
    .then((response) => response.json())
    .then(data => {
      return data;
    }).catch((response) => {
      return 'Error'
    });
  return data;
}

