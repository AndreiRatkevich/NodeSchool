const http = require("q-io/http");

http
  .read("http://localhost:7000")
  .then((id) => {
    return http.read("http://localhost:7001/" + id);
  })
  .then((json) => console.log(JSON.parse(json)))
  .catch(console.log);
