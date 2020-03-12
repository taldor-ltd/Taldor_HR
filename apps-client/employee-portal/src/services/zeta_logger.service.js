export const zetaLogger = {
  post,
};

const httpOptions = { 'Content-Type': 'application/json',
                      'Key' : 'dec377ea-61ca-42c7-a491-95b744587b0a' };

const apiUrl = "http://zetaexapi.devcenter.co.il/api/eventsbox";

const logger = {
  status_ID: 1,
  message: 'Object reference not set to an instance of an object.',
  details: 'e',
  clientMessage: 'roi',
  environment: "Test",
  iP_Address: '192.168.56.1',
  host: 'L006639.Taldor.corp',
  username: "roia",
  user_Email: "roia@taldor.co.il",
  resolver_Email: "roia@taldor.co.il",
};

function post(msg) {
  return fetch(apiUrl, {
      method: 'POST',
      headers: httpOptions,
      body: JSON.stringify(logger)
    });
}



