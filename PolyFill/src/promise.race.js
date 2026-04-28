const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Resolved From P1");
  }, 5000);
});

const p2 = new Promise((resolve, reject) => {
  let msg = "";
  setTimeout(() => {
    if (msg.length === 0) {
      reject(new Error("Reject From P2"));
    }
    resolve("Resolved From P2");
  }, 3000);
});

const promiseRace = (...args) => {
  return new Promise((resolve, reject) => {
    let allPromise = [...args];
    allPromise.forEach((promise, index) => {
      promise
        .then((result) => {
          resolve(result);
        })
        .catch((err) => {
          reject(err.message);
        });
    });
  });
};

promiseRace(p1, p2)
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.log(err);
  });
