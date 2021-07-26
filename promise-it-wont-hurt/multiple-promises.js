const all = (getPromise1, getPromise2) => {
  return new Promise((resolve, reject) => {
    let count = 0;
    const values = [];

    function process() {
      if (++count == 2) resolve(values);
    }

    getPromise1.then((res) => {
      values[0] = res;
      process();
    });
    getPromise2.then((res) => {
      values[1] = res;
      process();
    });
  });
};

all(getPromise1(), getPromise2()).then(console.log);
