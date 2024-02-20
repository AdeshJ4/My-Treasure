function p1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("rejected");
      // resolve('resolved 1');
    }, 2000);
  });
}

function p2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("resolved 2");
    }, 4000);
  });
}

Promise.race([p1(), p2()])
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });
