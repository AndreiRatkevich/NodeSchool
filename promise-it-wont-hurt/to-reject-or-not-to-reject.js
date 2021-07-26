const promise = new Promise((resolve, reject) => {
  resolve("I FIRED");
  reject(new Error("I DID NOT FIRE"));
});

const onReject = (err) => console.log(err.message);

promise.then(console.log, onReject);
