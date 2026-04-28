const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error("Reject From P1"));
  }, 4000);
});

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error("Reject From P2"));
  }, 2000);
});

const p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error("Reject From P3"));
  }, 2000);
});

const p4 = new Promise((resolve, reject) => {
  let msg = "";
  setTimeout(() => {
    if (msg.length === 0) {
      reject(new Error("Reject From P4"));
    }
    resolve("Resolved From P4");
  }, 2000);
});

const resolveAny = (...args) => {
  return new Promise((resolve, reject) => {
    let allPromise = [...args];
    let resArr = [];
    let errorCount = 0;

    allPromise.forEach((promise, index) => {
      if (!(promise instanceof Promise)) {
        reject(`${promise} is not a Promise`);
        return;
      }

      promise
        .then((result) => {
          resolve(result);
          return;
        })
        .catch((err) => {
          resArr[index] = err.message;
          errorCount++;
          if (errorCount === allPromise.length) {
            reject(resArr);
          }
        });
    });
  });
};

resolveAny(p1, p2, p3, p4)
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });
