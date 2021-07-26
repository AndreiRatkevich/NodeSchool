const parsePromised = (json) => {
  return new Promise((resolve, reject) => {
    try {
      resolve(JSON.parse(json));
    } catch (err) {
      reject(err);
    }
  });
};

const onReject = (err) => console.log(err.message);

parsePromised(process.argv[2]).then(null, onReject);
