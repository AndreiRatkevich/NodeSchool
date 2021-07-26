const attachTitle = (name) => `DR. ${name}`;
const promise = Promise.resolve("MANHATTAN")
  .then(attachTitle)
  .then(console.log);
